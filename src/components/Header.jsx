"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import Image from "next/image";
import SocialComponents from "./SocialComponents/SocialComponents";


export default function Header({ locale, onLocaleChange }) {
  const t = useTranslations("translation.header");

  return (
    <header className="header">
      <div><Image
        src="/images/main-logo/autoservis.svg"
        alt="Logo"
        width={120}
        height={60}
      /></div>
      <nav className="nav">
        <Link href={`/${locale}`}>{t("home")}</Link>
        <Link href={`/${locale}/contact`}>{t("contact")}</Link>
        <Link href={`/${locale}/about`}>{t("service")}</Link>
      </nav>
    <SocialComponents/>
      <select onChange={onLocaleChange} value={locale}>
        <option value="ua">UA</option>
        <option value="ru">Ru</option>
        <option value="cz">Cz</option>
      </select>
    </header>
  );
}
