import { createMiddleware } from "next-intl/middleware";

export default createMiddleware({
  locales: ["en", "fr"],
  defaultLocale: "en",
  localeDetection: false, // Disable automatic locale detection to respect selected locale
});

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
