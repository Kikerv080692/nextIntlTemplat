import styled from "styled-components";

export const WrapperSwiper = styled.div`
width: 100%;
max-width: 100%;
margin: 0 auto;
padding: 20px 10px;
background: orange;
margin-bottom: 30px;

h1{
    font-size: 22px;
    text-align: center;
    margin-bottom: 20px;
    line-height: 1.6;
    word-wrap: break-word;
    overflow-wrap: break-word;
    word-break: break-word;
  }
  .swiper {
    width: 100%;
    padding-bottom: 30px;
  }
   .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }
    @media (max-width: 639px) {
    .swiper-slide img {
      width: 70px !important;
      height: 70px !important;
    }
  }
    @media (min-width: 640px) and (max-width: 767px) {
    .swiper-slide img {
      width: 80px !important;
      height: 80px !important;
    }
  }
   @media (min-width: 768px) {
    .swiper-slide img {
      width: 100px !important;
      height: 100px !important;
    }
  }
`;
