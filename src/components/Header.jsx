"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Header({ locale, onLocaleChange }) {
  const t = useTranslations("translation.header");

  return (
    <header className="header">
      <nav className="nav">
        <Link href={`/${locale}`}>{t("home")}</Link>
        <Link href={`/${locale}/about`}>{t("about")}</Link>
        <Link href={`/${locale}/contact`}>{t("contact")}</Link>
      </nav>
      <select onChange={onLocaleChange} value={locale}>
        <option value="en">English</option>
        <option value="fr">French</option>
      </select>
    </header>
  );
}
