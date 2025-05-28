import Link from "next/link";
import { useTranslations } from "next-intl";

export default function AllPage({locale}) {
    const t = useTranslations("translation.AllPage")
    return (
        <>
       <Link href={`/${locale}/engine`}>{t("engine")}</Link>
       <Link href={`/${locale}/electric`}>{t("electric")}</Link>
       <Link href={`/${locale}/gassistem`}>{t("gasSistem")}</Link>
       <Link href={`/${locale}/diagnostic`}>{t("diagnostik")}</Link>
       <Link href={`/${locale}/brake`}>{t("brake")}</Link>
        </>
    )
}