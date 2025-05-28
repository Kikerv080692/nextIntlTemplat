import styled from "styled-components";

export const WrapperModal = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 20;
  background-color: rgba(0, 0, 0, 0.6);  
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
`

export const InnerWrapper = styled.div`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
background-color: white;
width: 350px;
height: 200px;
border-radius: 6px;

`

export const Close = styled.button`
position: absolute;
top: 0;
right: 0;
width: 40px;
height: 40px;
color: white;
background: transparent;
border: none;
outline: none;
cursor: pointer;
`