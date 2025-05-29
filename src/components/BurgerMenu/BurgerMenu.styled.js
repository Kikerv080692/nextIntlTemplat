import styled from "styled-components";

export const Wrapper = styled.div`
position: fixed;
background-color: grey;
top: 0;
width: 100vw;
height: 100vh ;
color: black;
  transition: 0.5s linear;
&.enter {
  left: 0; 
  opacity: 1;
  pointer-events: auto;
}
&.out {
  left: -300px;
  pointer-events: none;
  opacity: 0;
}
`
export const Img = styled.img`
  position: absolute;
  top: 30px;
  right: 30px ;
  width: 30px;
`