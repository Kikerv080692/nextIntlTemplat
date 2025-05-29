import Link from "next/link";
import { useTranslations } from "next-intl";
import styled from "styled-components";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import AllPage from "../AllPage/AllPage";
import { useState } from "react";


export default function Navigation({ locale, handleCloseMenu }) {
  const t = useTranslations("translation.header");
  const [isShowService, setIsShowService] = useState(false);
  const toggleService = () => {
    setIsShowService(prev => !prev);
  };
   const closeServiceMenu = () => {
    setIsShowService(false);
    handleCloseMenu(); // якщо потрібно ще і основне меню закривати
  };
return (
    <>
      <NavWrapper>
        <StyledLink href={`/${locale}`} onClick={handleCloseMenu}>
          {t("home")}
        </StyledLink>

        <StyledLink href={`/${locale}/contact`} onClick={handleCloseMenu}>
          {t("contact")}
        </StyledLink>

        <ServiceToggle onClick={toggleService}>
          {t("service")}
          {isShowService ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </ServiceToggle>
      </NavWrapper>

      {isShowService && (
        <ServiceDropdown>
          <AllPage locale={locale} onLinkClick={closeServiceMenu} />
        </ServiceDropdown>
      )}
    </>
  );
}

const NavWrapper = styled.nav`
  display: flex;
  flex-direction: column; 
  justify-content: center;
  align-items: center;
  gap: 16px;
  padding: 20px;
  margin-top: 50px;
  position: relative; 

  @media (min-width: 768px) {
    flex-direction: row; 
    justify-content: center;
    gap: 20px;
    margin: 0;
     
  }

  @media (min-width: 1024px) {
     gap: 30px;
     margin: 0;
  }
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-weight: 500;
  font-size: 18px;
  transition: color 0.3s ease, transform 0.2s ease;
  &:hover {
    color: #ccc;
    transform: scale(1.05);
  }

  @media (min-width: 768px) {
    font-size: 20px;
  }

  @media (min-width: 1024px) {
    font-size: 22px;
  }
`;
const ServiceToggle = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  color: white;
  font-weight: 500;
  font-size: 18px;
  position: relative;
  transition: color 0.3s ease, transform 0.2s ease;

  &:hover {
    color: #ccc;
    transform: scale(1.05);
  }
    svg {
    transition: transform 0.3s ease;
    ${props => props.isOpen && `transform: rotate(180deg);`} // додатково анімація стрілки
  }

  @media (min-width: 768px) {
    font-size: 20px;
  }

  @media (min-width: 1024px) {
    font-size: 22px;
  }
`;
const ServiceDropdown = styled.div`
   display: flex;
  flex-direction: column;
  align-items: flex-start;  // щоб посилання були вирівняні по лівому краю
  position: absolute;
  top: 100%;  // трохи знизу від ServiceToggle
  right: 170px;   // праворуч від ServiceToggle
  background-color: #222;
  border-radius: 6px;
  padding: 10px 20px;
  margin-top: 8px;
  z-index: 100;

  a {
    color: white;
    text-decoration: none;
    font-size: 16px;
    padding: 6px 0;
    width: 100%;
    &:hover {
      color: #ccc;
    }
  }

    &:hover {
      color: #ccc;
      border-radius: 4px;
    }
      @media (max-width: 767px) {
    position: static;
    background: none;
    padding: 0;
    margin-top: 10px;
    box-shadow: none;
    align-items: center;
    right: 170px; 
    a {
      padding: 6px 0;
      font-size: 18px;
      width: auto;

      &:hover {
        background: none;
        color: #ccc;
      }
    }
  }
    @media (min-width: 1024px) {
   right: 400px
  }
`;