"use client";
import { useTranslations } from 'next-intl';
import styled, { keyframes } from "styled-components";




export default function DiagnosticPage() {
  const  t  = useTranslations("translation.diagnostik");

  return (
    <WrapperDiagnosticPage>
      <WrapperTittle>
        <h1>{t('title')}</h1>
      </WrapperTittle>

      <WrapperIMG>
        <img src="/images/octavia.webp" alt="octavia" />

        <LogoWaveWrapper style={{ top: "15px", left: "20px" }}>
          <img src="/images/logoDiagnostik/brake.png" alt="brake" />
        </LogoWaveWrapper>

        <LogoWaveWrapper style={{ top: "20px", left: "80px" }}>
          <img src="/images/logoDiagnostik/piston.png" alt="piston" />
        </LogoWaveWrapper>
        <LogoWaveWrapper style={{ top: "25px", left: "140px" }}>
          <img src="/images/logoDiagnostik/check.png" alt="check" />
        </LogoWaveWrapper>
        <LogoWaveWrapper style={{ top: "30px", left: "200px" }}>
          <img src="/images/logoDiagnostik/belt.png" alt="belt" />
        </LogoWaveWrapper>
      </WrapperIMG>

      <SubTitle>
        <h2>{t('subtitle')}</h2>
      </SubTitle>
      <Text1>
        <p>{t("text")}</p>
      </Text1>
      <Text2>
        <p>{t("text2")}</p>
      </Text2>
      <WrapperUl>
        <li>{t('li1')}</li>
        <li>{t('li2')}</li>
        <li>{t('li3')}</li>
        <li>{t('li4')}</li>
        <li>{t('li5')}</li>
        <li>{t('li6')}</li>
      </WrapperUl>
      <Last>
        <p>{t('end')}</p>
      </Last>
    </WrapperDiagnosticPage>
  );
}
const wavePulse = keyframes`
  0% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 0.5;
  }
  50% {
    transform: translate(-50%, -50%) scale(2);
    opacity: 0.2;
  }
  100% {
    transform: translate(-50%, -50%) scale(3);
    opacity: 0;
  }
`;

export const WrapperDiagnosticPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  padding: 50px 20px;
  color: white;
`;

export const WrapperTittle = styled.div`
  width: 100%;
  text-align: center;
  padding: 10px 20px;

  h1 {
    font-size: 22px;
    text-transform: uppercase;
    font-weight: bold;
    color: white;
    line-height: 1.3;
    margin: 0 auto;
    max-width: 900px;
    word-break: break-word;
    background: linear-gradient(90deg, rgb(0, 255, 153), rgb(102, 255, 0));
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;

    @media (min-width: 768px) {
      font-size: 30px;
    }

    @media (min-width: 1024px) {
      font-size: 36px;
    }
  }
`;

export const WrapperIMG = styled.div`
  position: relative;
  width: 100%;
  max-width: 600px;

  img {
    width: 100%;
    display: block;
  }
`;

export const LogoWaveWrapper = styled.div`
  position: absolute;
  width: 38px;
  height: 38px;
  background: white;
  padding: 3px;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    background: black;
    border-radius: 6px;
    animation: ${wavePulse} 2s infinite;
    transform: translate(-50%, -50%);
    z-index: -1;
    opacity: 0.4;
  }

  img {
    width: 32px;
    height: 32px;
  }
`;

export const SubTitle = styled.div`
  text-align: center;

  h2 {
    font-size: 20px;
    line-height: 1.4;
    max-width: 800px;
    margin: 0 auto;
    background: linear-gradient(90deg, rgb(255, 204, 0), rgb(102, 255, 0));
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;

    @media (min-width: 768px) {
      font-size: 26px;
    }

    @media (min-width: 1024px) {
      font-size: 30px;
    }
  }
`;

export const Text1 = styled.div`
  text-align: center;

  p {
    max-width: 800px;
    margin: 0 auto;
    font-size: 16px;
    background: linear-gradient(90deg, rgb(81, 255, 0), rgb(102, 255, 0));
    -webkit-background-clip: text;
    background-clip: text;

    -webkit-text-fill-color: transparent;

    @media (min-width: 768px) {
      font-size: 18px;
    }
  }
`;

export const Text2 = styled(Text1)``;

export const WrapperUl = styled.ul`
  list-style: none;
  padding-left: 0;
  margin: 20px auto;
  max-width: 700px;

  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  box-shadow: 0 0 15px rgba(0, 255, 0, 0.2);
  padding: 20px 30px;

  li {
    position: relative;
    font-size: 16px;
    font-weight: 600;
    color: transparent;
    line-height: 1.5;
    background: linear-gradient(90deg, rgb(81, 255, 0), rgb(102, 255, 0));
    -webkit-background-clip: text;
    background-clip: text;

    -webkit-text-fill-color: transparent;
    margin-bottom: 15px;
    padding-left: 30px;

    &::before {
      content: "✓";
      position: absolute;
      left: 0;
      top: 0;
      color: rgb(81, 255, 0);
      font-weight: bold;
      font-size: 20px;
      line-height: 1.5;
    }

    &:hover {
      background: linear-gradient(90deg, #00ff6a, #00c851);
      -webkit-background-clip: text;
    background-clip: text;

      -webkit-text-fill-color: transparent;

      &::before {
        color: #00ff6a;
      }
    }

    @media (min-width: 768px) {
      font-size: 18px;
    }
  }
`;

export const Last = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto;

  p {
    background: linear-gradient(90deg, #00ff6a, #00c851);
    -webkit-background-clip: text;
    background-clip: text;

    -webkit-text-fill-color: transparent;
    font-size: 16px;

    @media (min-width: 768px) {
      font-size: 18px;
    }
  }
`;
