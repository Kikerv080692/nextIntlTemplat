"use client"
import { useState } from "react";
import emailjs from "emailjs-com";
import { useTranslations } from 'next-intl'
import * as SC from './PhoneForm.styled'

export default function PhoneForm() {
    const t = useTranslations("translation")
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState("");
  const [isValid, setIsValid] = useState(null); 

  const formatPhoneNumber = (value) => {
    const digits = value.replace(/\D/g, "");

    if (digits.startsWith("380")) {
      return (
        "+380 " +
        digits.slice(3, 5) +
        (digits.length > 5 ? " " + digits.slice(5, 8) : "") +
        (digits.length > 8 ? " " + digits.slice(8, 12) : "")
      ).trim();
    }

    if (digits.startsWith("420")) {
      return (
        "+420 " +
        digits.slice(3, 6) +
        (digits.length > 6 ? " " + digits.slice(6, 9) : "") +
        (digits.length > 9 ? " " + digits.slice(9, 12) : "")
      ).trim();
    }

    return "+" + digits;
  };

  const handleInputChange = (e) => {
    const raw = e.target.value;
    const formatted = formatPhoneNumber(raw);
    setPhone(formatted);

    const cleaned = formatted.replace(/\s/g, "");
    const isValidUkr = cleaned.match(/^\+380\d{9}$/);
    const isValidCz = cleaned.match(/^\+420\d{9}$/);
    setIsValid(!!(isValidUkr || isValidCz));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const cleanedPhone = phone.replace(/\s/g, "");

    const isValidUkr = cleanedPhone.match(/^\+380\d{9}$/);
    const isValidCz = cleanedPhone.match(/^\+420\d{9}$/);

    if (!isValidUkr && !isValidCz) {
      setStatus("Невірний номер телефону");
      return;
    }

    const templateParams = {
      phone_number: cleanedPhone
    };

    emailjs
      .send(
        "service_px91v0m",
        "template_3j2nb0q",
        templateParams,
        "9aaKCdqlJ7dC3q4mx"
      )
      .then(
        () => {
          setStatus("Телефонний номер відправлено");
          setPhone("");
        },
        (error) => {
          console.error(error);
          setStatus("Надсилання не вдалося");
        }
      );
  };

  return (
    <SC.Form onSubmit={handleSubmit}>
      <SC.Label htmlFor="phone">{t('phone')}</SC.Label>
      <div style={{ display: "flex", alignItems: "center" }}>
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder= {t('placeholder')}
          value={phone}
          onChange={handleInputChange}
          required
          style={{
            border: isValid === null
              ? "1px solid gray"
              : isValid
              ? "2px solid green"
              : "2px solid red",
            outline: "none",
            padding: "8px",
            borderRadius: "4px",
            marginRight: "8px"
          }}
        />
        {isValid === null ? (
         <img src="/images/smile.png" alt="smile" /> 
        ) : isValid ? (
          <span style={{ color: "green" }}>✅</span> 
        ) : (
          <span style={{ color: "red" }}>❌</span> 
        )}
      </div>
      <SC.ButtonSend type="submit">{t('send')}</SC.ButtonSend>
      <span>{status}</span>
      <SC.WrapperTextP>
      <p>{t('phoneText')}</p>

      </SC.WrapperTextP>
    </SC.Form>
  );
}
