"use client"
import { useEffect, useRef, useState } from "react";
import * as SC from "./ButtonPhone.styled";
import { useTranslations } from 'next-intl'
import PhoneForm from "../PhoneForm/PhoneForm";
import Modal from "../Modal/Modal";


export default function ButtonPhone() {
    const t = useTranslations("translation")
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [showText, setShowText] = useState(false);
  const [isShaking, setIsShaking] = useState(false);
  const iconRef = useRef(null);

  const toggleModal = () => {
    setIsOpenModal(!isOpenModal);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setShowText(prev => !prev);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!showText) {
      setIsShaking(true);
      const timeout = setTimeout(() => {
        setIsShaking(false);
      }, 5000);
      return () => clearTimeout(timeout);
    }
  }, [showText]);

  return (
    <>
      <SC.WrapperButton type="button" onClick={toggleModal}>
        {showText ? (
          <span className="text">{t('buttonphone')}</span>
        ) : (
          <img
            ref={iconRef}
            className={isShaking ? "icon shake" : "icon"}
            src="/images/telephone-call.png"
            alt="phone"
          />
        )}
      </SC.WrapperButton>

      {isOpenModal && (
        <Modal closeModal={toggleModal}>
          <PhoneForm />
        </Modal>
      )}
    </>
  );
}
