"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import SocialComponents from "./SocialComponents/SocialComponents";
import styled from "styled-components";
import BurgerButton from "./BurgerButton/BurgerButton";
import { useEffect, useState } from "react";
import Navigation from "./Navigation/Navigation";
import { useClientLocale } from "@/context/LocaleProvider";
import { usePathname, useRouter } from "next/navigation";


export default function Header() {
  const t = useTranslations("translation.header");
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  useEffect(() => {

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const { locale, setLocale } = useClientLocale();
  const onLocaleChange = (e) => {
    const newLocale = e.target.value;
    setLocale(newLocale);
    router.replace(`/${newLocale}${pathname.replace(/^\/[a-z]{2}/, "")}`);
  };
  return (
    <HeaderWrapper>
      <LogoWrapper>
        <Image
          src="/images/main-logo/autoservis.svg"
          alt="Logo"
          width={80}
          height={80}
        />
      </LogoWrapper>
      {!isMobile && <Navigation/>}
      <SocialWrapper>
        <SocialComponents />
      </SocialWrapper>
      <LangSelect onChange={onLocaleChange} value={locale}>
        <option value="ua">UA</option>
        <option value="ru">Ru</option>
        <option value="cz">Cz</option>
      </LangSelect>
      {isMobile && <BurgerButton locale={locale} />}

    </HeaderWrapper>
  );
}

// === Styled Components ===

const HeaderWrapper = styled.header`
box-sizing: border-box;
  background-color: #333;
  color: white;
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 999;
  border-bottom: 1px solid #C4C4C4;
`;
export const SocialWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;
const LogoWrapper = styled.div`
 /* max-width: 100%; */
  height: auto;
  margin-left: 10px;
`;


const Nav = styled.nav`
  /* display: flex;
  justify-content: center;
  gap: 20px; */

  a {
    color: white;
    text-decoration: none;
    font-weight: 500;

    &:hover {
      color: #ccc;
    }
  }
`;

const LangSelect = styled.select`
  padding: 6px;
  border-radius: 6px;
  margin-right: 10px;
  @media (min-width: 768px) {
  }
`;
