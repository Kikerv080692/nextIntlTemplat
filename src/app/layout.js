"use client";

import "./globals.css";
import { LocaleProvider, useClientLocale } from "@/context/LocaleProvider";
import { NextIntlClientProvider } from "next-intl";
import Header from "@/components/Header";
import Footer from "@/components/Footer/Footer";

function InnerLayout({ children }) {
  const { locale, messages } = useClientLocale();

  if (!messages) return <div>Loading...</div>;

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <Header />
      <main>{children}</main>
      <Footer />
    </NextIntlClientProvider>
  );
}

export default function RootLayout({ children, params }) {
  const defaultLocale = params?.locale || "cz";

  return (
    <html lang={defaultLocale}>
      <body>
        <LocaleProvider defaultLocale={defaultLocale}>
          <InnerLayout>{children}</InnerLayout>
        </LocaleProvider>
      </body>
    </html>
  );
}
