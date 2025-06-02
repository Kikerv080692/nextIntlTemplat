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

    setIcon(
      "apple-touch-icon",
      "/favicon/apple-icon.png",
      "image/png",
      "180x180"
    ); // iOS icon
    setIcon("icon", "/favicon/icon1.png", "image/png", "32x32"); // default favicon
    setIcon("icon", "/favicon/icon0.svg", "image/svg+xml"); // scalable favicon
    setIcon("shortcut icon", "/favicon/favicon.ico"); // fallback favicon
    setManifest("/favicon/manifest.json"); // PWA manifest

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

function setIcon(rel, href, type, sizes) {
  const selector = `link[rel="${rel}"]${sizes ? `[sizes="${sizes}"]` : ""}`;
  let link = document.querySelector(selector);
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", rel);
    document.head.appendChild(link);
  }
  link.setAttribute("href", href);
  if (type) link.setAttribute("type", type);
  if (sizes) link.setAttribute("sizes", sizes);
}
function setManifest(href) {
  let link = document.querySelector(`link[rel="manifest"]`);
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "manifest");
    document.head.appendChild(link);
  }
  link.setAttribute("href", href);
}
