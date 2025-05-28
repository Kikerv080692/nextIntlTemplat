"use client";
import AllPage from "@/components/AllPage/AllPage";
import Brands from "@/components/Brands/Brands";
import { MainWrapper } from "@/components/Footer/Footer.styled";
import ServiceList from "@/components/ServiceList/ServiceList";
import { useTranslations } from "next-intl";
import styled from "styled-components";

export default function Home() {
  const t = useTranslations("translation.title");
 

   return (
       
            <Wrapper>
                <div>
                    <Title>
                        <span className="gradient">{t('highlight1')}</span> 
                    </Title>
                    <SubTitle>{t('tittle2')}</SubTitle>
                </div>
                <WrapperImage>
                    <Image src="/images/Garage.webp" alt="Garage" />
                </WrapperImage>
                {/* <ServiceList/> */}
                <Brands/>
                <AllPage/>
            </Wrapper>
        
    )
}

export const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;     
text-align: center; 
background: #131619;
width: 100%;
`
export const Title = styled.h1`
  text-transform: uppercase;
  font-size: 24px;
  word-break: break-word;
  margin-bottom: 10px;

  .gradient {
    background: linear-gradient(
      90deg,
      #00ff00,
      #007700,
      #00ff00
    );
    background-size: 200%;
    background-position: 0%;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    display: inline-block;
    animation: shine 2.5s linear infinite;
  }



  @media (min-width: 768px){
    font-size: 30px;
  }

  @keyframes shine {
    0% {
      background-position: 0%;
    }
    100% {
      background-position: 200%;
    }
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  animation: fadeInUp 0.6s ease;
`;

export const SubTitle = styled.h2`
font-size: 18px;
word-break: break-word;
margin-bottom: 10px;
background: linear-gradient(to top,rgb(255, 153, 0),rgb(57, 167, 2));
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    display: inline-block; 

@media (min-width: 768px){
  font-size: 24px;
}
`
export const WrapperImage = styled.div`
margin: 5px 5px;
`
export const Image = styled.img`
  width: 300px;
  border-radius: 16px;

  @media (min-width: 768px) {
    max-width: 800px; 
  }

  @media (min-width: 1024px) {
    max-width: 900px; 
  }

`;

export const WrapperServiceList = styled.div`
border-radius: 6px;
margin: 0 8px;
margin-bottom: 30px;

@media (min-width: 768px){
  margin-bottom: 50px;
}
`