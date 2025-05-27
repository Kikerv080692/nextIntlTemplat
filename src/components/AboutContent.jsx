"use client";

import { useTranslations } from "next-intl";

export default function AboutContent() {
  const t = useTranslations("translation.about");

  return (
    <div>
      <h1>{t("title")}</h1>
      <p>{t("description")}</p>
    </div>
  );
}
