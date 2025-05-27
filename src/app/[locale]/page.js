"use client";

import { useTranslations, useFormatter } from "next-intl";

export default function Home() {
  const t = useTranslations("translation");
  const format = useFormatter();
  const date = new Date();
  const amount = 1234.56;

  return (
    <div>
      <h1>{t("welcome")}</h1>
      <p>{t("greeting", { name: "User" })}</p>
      <p>
        Date: {format.dateTime(date, { dateStyle: "full", timeStyle: "short" })}
      </p>
      <p>
        Currency:{" "}
        {format.number(amount, { style: "currency", currency: "USD" })}
      </p>
    </div>
  );
}
