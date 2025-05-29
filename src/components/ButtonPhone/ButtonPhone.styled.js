import styled, { keyframes } from "styled-components";

const shake = keyframes`
  0% { transform: rotate(0deg); }
  25% { transform: rotate(6deg); }
  50% { transform: rotate(-20deg); }
  75% { transform: rotate(6deg); }
  100% { transform: rotate(0deg); }
`;

export const WrapperButton = styled.button`
  position: fixed;
  bottom: 300px;
  right: 20px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 2px solid  #25D366;
  padding: 20px;
  background-color:  #25D366;
  cursor: pointer;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
 z-index: 100;

  .icon {
    height: 30px;
  }

  .shake {
    animation: ${shake} 0.8s ease;
  }

  .text {
    font-size: 12px;
    color: white;
    font-weight: bold;
    text-align: center;
  }
  :hover {
    animation: ${shake} 0.8s ease;
  }
`;
