"use client";

import { useTranslations } from "next-intl";
import styled from "styled-components";

export const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;     
text-align: center; 
padding: 20px;
background: #131619;
color: white;


@media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    text-align: left;
  }
`
export const Title = styled.h1`
  text-transform: uppercase;
  font-size: 24px;
  font-weight: 700;
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

  .middle {
    background: linear-gradient(
      90deg,
      #04ff00,
      #007700,
      #04ff00
    );
    background-size: 200%;
    background-position: 0%;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    display: inline-block;
    animation: shine 3.5s linear infinite;
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
  font-size: 20px;
}
`

export const WrapperImage = styled.div`
margin: 20px 20px;

`
export const Image = styled.img`
  max-width: 400px;
  border-radius: 16px;
  padding: 10px;

  @media (min-width: 768px) {
    max-width: 800px; 
  }

  @media (min-width: 1024px) {
    max-width: 1000px; 
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
export default function Home() {
  const t = useTranslations("translation.title");
  const highlight1 = t('highlight1');
    const middle = t('middle');
    const highlight2 = t('highlight2');
   return (
        <>
            <Wrapper>
                <div>
                    <Title>
                        <span className="gradient">{highlight1}</span> <span className='middle'>{middle}</span> <span className="gradient">{highlight2}</span>
                    </Title>
                    <SubTitle>{t('tittle2')}</SubTitle>
                </div>
                <WrapperImage>
                    <Image src="/images/Garage.webp" alt="Garage" />
                </WrapperImage>
            </Wrapper>
        </>

    )
}
