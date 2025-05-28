import styled from "styled-components";

export const WrapperLocationButton = styled.div`
position: fixed;
bottom: 380px;
right: 20px;
width: 60px;
height: 60px;
border-radius: 50%;
background:  #25D366;
cursor: pointer;
  overflow: hidden;
   border: 2px solid  #25D366;
   z-index: 100;
`

export const Button = styled.button`
position: absolute;
top: 8px;
right: 8px;
border: none;
width: 40px;
height: 40px;
cursor: pointer;
background:  #25D366;
img {
    background:  #25D366;
    border: none;
    display: block;
    width: 100%;
    height: 100%;

}
`