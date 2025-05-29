import Link from "next/link";
import { useTranslations } from "next-intl";

export default function AllPage({locale, onLinkClick}) {
    const t = useTranslations("translation.AllPage")
    return (
        <>
       <Link href={`/${locale}/engine`} onClick={onLinkClick}>{t("engine")}</Link>
       <Link href={`/${locale}/electric`} onClick={onLinkClick}>{t("electric")}</Link>
       <Link href={`/${locale}/gassistem`} onClick={onLinkClick}>{t("gasSistem")}</Link>
       <Link href={`/${locale}/diagnostic`} onClick={onLinkClick}>{t("diagnostik")}</Link>
       <Link href={`/${locale}/brake`} onClick={onLinkClick}>{t("brake")}</Link>
        </>
    )
}