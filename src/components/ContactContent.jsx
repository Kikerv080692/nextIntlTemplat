"use client";

import { useTranslations } from "next-intl";

export default function ContactContent() {
  const t = useTranslations("translation.contact");

  return (
    <div>
      <h1>{t("title")}</h1>
      <p>{t("description")}</p>
    </div>
  );
}
