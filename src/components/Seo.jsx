"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import { useClientLocale } from "@/context/LocaleProvider";

export default function Seo({ page }) {
  const pathname = usePathname();
  const { locale } = useClientLocale();
  const t = useTranslations(`translation.meta.${page}`);

  const baseUrl = "https://next-intl-templat.vercel.app/";
  const url = `${baseUrl}${locale === "en" ? "" : "/" + locale}${pathname}`;

  useEffect(() => {
    setMeta("description", t("description"));
    setMeta("robots", "index, follow");

    setPropertyMeta("og:title", t("title"));
    setPropertyMeta("og:description", t("description"));
    setPropertyMeta("og:type", "website");
    setPropertyMeta("og:url", url);

    setLink("canonical", url);
    setLink("alternate", `${baseUrl}/cz${pathname}`, "cz");
    setLink("alternate", `${baseUrl}/ua${pathname}`, "ua");
    setLink("alternate", `${baseUrl}/ru${pathname}`, "ua");
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
