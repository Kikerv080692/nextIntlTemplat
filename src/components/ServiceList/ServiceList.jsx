"use client"
import { useState } from 'react';
import styled from "styled-components";
import { useTranslations } from "next-intl";
import Services from "../../data/serviceList.json"
import ServiceListItem from '../ServiceListItem/ServiceListItem';



export default function ServiceList() {
    const t = useTranslations("serviceList");
    const [openIndex, setOpenIndex] = useState(null)

    const toggleOpenIndex = (index) => {
        setOpenIndex(index === openIndex ? null : index)
    }
// console.log("Test title:", t("title"));
  return (
  <List>
    {Services.map(({ title, icon, text1, text2, text3, text4, text5, text6, text7, text8 }, index) => (
      <ServiceListItem
        key={index}
        isOpen={openIndex === index}
        handleClick={() => toggleOpenIndex(index)}
        title={t("title")}  
        img={icon}
      >
        {text1 && <p>{t("text1")}</p>}
        {text2 && <p>{t("text2")}</p>}
        {text3 && <p>{t("text3")}</p>}
        {text4 && <p>{t("text4")}</p>}
        {text5 && <p>{t("text5")}</p>}
        {text6 && <p>{t("text6")}</p>}
        {text7 && <p>{t("text7")}</p>}
        {text8 && <p>{t("text8")}</p>}
      </ServiceListItem>
    ))}
  </List>
);
}
export const List = styled.ul`
display: grid;
padding: 0;
box-sizing: border-box;
grid-template-columns: 1fr; 
background: #131619;
max-width: 400px;
width: 100%;  
align-items: start;

@media (min-width: 768px) {
grid-template-columns: repeat(2, 1fr); 
}

@media (min-width: 1024px) {
 grid-template-columns: repeat(3, 1fr);  
}

@media (min-width: 1700px) {
      grid-template-columns: repeat(5, 1fr); 
   
}
`;