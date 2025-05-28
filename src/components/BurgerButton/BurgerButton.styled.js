import styled from "styled-components";

export const Wrapper = styled.div`
position: relative;
margin-right: 10px;
`

export const IconButton = styled.button`
  background: transparent;
  border: none;
  padding: 0;
  margin: 0;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 32px;
    height: 32px;
    object-fit: contain;
    transition: transform 0.3s ease; 
    
  }

  &:focus {
    outline: none;
  }
`;

