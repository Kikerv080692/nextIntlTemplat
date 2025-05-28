import Link from "next/link";
import { useTranslations } from "next-intl";
import styled from "styled-components";

export default function Navigation({  locale, handleCloseMenu}) {
    const t = useTranslations("translation.header");
    return (
        <><Nav>
        <Link href={`/${locale}`} onClick={handleCloseMenu}>{t("home")} </Link>
        <Link href={`/${locale}/contact`} onClick={handleCloseMenu}>{t("contact")}</Link>
        <Link href={`/${locale}/about`} onClick={handleCloseMenu}>{t("service")}</Link>
      </Nav></>
    )
}
const Nav = styled.nav`
  display: flex;
  justify-content: center;
  gap: 20px;

  a {
    color: white;
    text-decoration: none;
    font-weight: 500;

    &:hover {
      color: #ccc;
    }
  }
`;