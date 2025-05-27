"use client";

import { NextIntlClientProvider } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import "./globals.css";

export default function RootLayout({ children, params }) {
  const router = useRouter();
  const pathname = usePathname();
  const [messages, setMessages] = useState(null);
  const [locale, setLocale] = useState(params?.locale || "en");

  // Fallback messages in case JSON files fail to load
  const fallbackMessages = {
    en: {
      translation: {
        welcome: "Welcome to my app",
        greeting: "Hello, {name}!",
        about: {
          title: "About Us",
          description:
            "We are a team dedicated to building awesome web applications.",
        },
        contact: {
          title: "Contact Us",
          description: "Get in touch with us for any inquiries.",
        },
        header: {
          home: "Home",
          about: "About",
          contact: "Contact",
        },
      },
    },
    fr: {
      translation: {
        welcome: "Bienvenue sur mon application",
        greeting: "Bonjour, {name}!",
        about: {
          title: "À propos de nous",
          description:
            "Nous sommes une équipe dédiée à la création d'applications web exceptionnelles.",
        },
        contact: {
          title: "Contactez-nous",
          description: "Contactez-nous pour toute question.",
        },
        header: {
          home: "Accueil",
          about: "À propos",
          contact: "Contact",
        },
      },
    },
  };

  // Sync locale with pathname
  useEffect(() => {
    const currentLocale = pathname.split("/")[1] || "en";
    if (currentLocale !== locale && ["en", "fr"].includes(currentLocale)) {
      console.log("Setting locale to:", currentLocale);
      setLocale(currentLocale);
    }
  }, [pathname, locale]);

  // Load translations via fetch
  useEffect(() => {
    async function loadMessages() {
      try {
        console.log("Fetching translations for locale:", locale);
        const response = await fetch(`/locales/${locale}/translation.json`);
        if (!response.ok) throw new Error("Failed to fetch translations");
        const loadedMessages = await response.json();
        setMessages({ translation: loadedMessages });
        console.log("Loaded messages:", loadedMessages);
      } catch (error) {
        console.error(`Failed to load translations for ${locale}:`, error);
        setMessages(fallbackMessages[locale] || fallbackMessages.en);
        console.log(
          "Using fallback messages:",
          fallbackMessages[locale] || fallbackMessages.en
        );
      }
    }
    loadMessages();
  }, [locale]);

  // Handle locale change
  const handleLocaleChange = (event) => {
    const newLocale = event.target.value;
    console.log("Navigating to locale:", newLocale);
    try {
      setLocale(newLocale);
      router.replace(`/${newLocale}`);
    } catch (error) {
      console.error("Failed to navigate to new locale:", error);
    }
  };

  // Wait for translations to load
  if (!messages) {
    return (
      <html lang={locale}>
        <body>
          <div>Loading...</div>
        </body>
      </html>
    );
  }

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider
          locale={locale}
          messages={messages}
          timeZone="UTC"
        >
          <Header locale={locale} onLocaleChange={handleLocaleChange} />
          <main className="container">{children}</main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
