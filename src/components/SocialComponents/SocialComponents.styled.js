import styled from 'styled-components';

const BaseIconWrapper = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 16%;
  color: white;
  text-decoration: none;
  margin: 5px;
  transition: all 0.3 ease, background-color 0.3s ease; ;
  &:hover {
    transform: scale(1.2);
  }
`;

export const IconWrapperViber = styled(BaseIconWrapper)`
  background-color: #7360F2;


`;

export const IconWrapperWhatsapp = styled(BaseIconWrapper)`
  background-color: #25D366;
`;
