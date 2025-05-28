import styled from "styled-components";


export const MainWrapper = styled.footer`
max-width: 100%;
`
export const WrapperFooter = styled.div`
  background-color: #222;
  color: #fff;
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  border-top: 2px solid #C4C4C4;
  padding-left: 120px;
  img {
    width: 24px;
    margin-right: 10px;
    vertical-align: middle;
    filter: brightness(0) invert(1)
  }

  @media(min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }


`;

export const InfoSection = styled.section`
  display: flex;
  align-items: flex-start;
  gap: 16px;

  h4 {
    margin: 0;
    font-size: 18px;
  }

  span {
    font-weight: bold;
  }

  p {
    margin: 0;
  }
`;

export const ContactSection = styled.section`
  address {
    font-style: normal;
    display: flex;
    flex-direction: column;
    gap: 12px;

    p {
      display: flex;
      align-items: center;
      margin: 0;
    }

    a {
      margin-left: 5px;
    }
  }
`;
