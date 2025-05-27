"use client";

import { useTranslations } from "next-intl";

export default function AboutContent() {
  const t = useTranslations("translation.title");

  return (
    <div>
      <h1>{t("highlight1")}</h1>
      <p>{t("middle")}</p>
    </div>
  );
}
