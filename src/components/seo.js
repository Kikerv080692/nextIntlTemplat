// File 1: /src/Seo.js

"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";

export default function Seo({ page }) {
  const pathname = usePathname();
  const locale = useLocale();
  const t = useTranslations(`translation.meta.${page}`);

  const baseUrl = "https://localhost:3000"; 
  const url = `${baseUrl}/${locale}/${pathname}`;
console.log("8888",pathname)

  useEffect(() => {
    // Мета-теги
    setMeta("description", t("description"));
    setMeta("robots", "index, follow");

    // Open Graph
    setPropertyMeta("og:title", t("title"));
    setPropertyMeta("og:description", t("description"));
    setPropertyMeta("og:type", "website");
    setPropertyMeta("og:url", url);

    // Канонічне посилання
    setLink("canonical", url);

    // Альтернативні hreflang для en/fr
    setLink("alternate", `${baseUrl}/cz${pathname}`, "cz");
    setLink("alternate", `${baseUrl}/ua${pathname}`, "ua");
    setLink("alternate", `${baseUrl}/ru${pathname}`, "ru");
  }, [t, pathname, locale]);

  return null;
}

function setMeta(name, content) {
  let tag = document.querySelector(`meta[name="${name}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("name", name);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

function setPropertyMeta(property, content) {
  let tag = document.querySelector(`meta[property="${property}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("property", property);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

function setLink(rel, href, hreflang) {
  const selector = `link[rel="${rel}"]${
    hreflang ? `[hreflang="${hreflang}"]` : ""
  }`;
  let link = document.querySelector(selector);
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", rel);
    if (hreflang) link.setAttribute("hreflang", hreflang);
    document.head.appendChild(link);
  }
  link.setAttribute("href", href);
}
