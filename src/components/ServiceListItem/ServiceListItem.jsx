import styled from "styled-components";
import { FaChevronDown } from "react-icons/fa";




export default function ServiceListItem({ children, title, img, handleClick, isOpen }) {
    return (
        <WrapperItem>
            <Item onClick={handleClick}>
                <WrapperIMGTitle>
                    <div>
                    <img src={img} alt="3" />
                    </div>
                    <h2>{title}</h2>
                      <Icon $isopen={isOpen}> 
                        <FaChevronDown />
                    </Icon>
                </WrapperIMGTitle>
                {isOpen && <p>{children}</p>}
            </Item>
        </WrapperItem>

    )
}

export const WrapperItem = styled.div`
  position: relative;
  padding: 15px 5px;
  width: 95%;
  margin: 20px 10px;
  background: #fff;
  border-radius: 4px;
  z-index: 1;
  min-height: 110px; 

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    padding: 6px;
    border-radius: 4px;
    background: linear-gradient(45deg, #00ff00,rgb(0, 119, 65));
    mask:
  linear-gradient(#fff 0 0) content-box,
  linear-gradient(#fff 0 0);
-webkit-mask:
  linear-gradient(#fff 0 0) content-box,
  linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    z-index: -1;
  }
`;

export const Item = styled.li`
list-style: none;
cursor: pointer;
img{
width: 80px;
}
p {
  font-size: 16px;
  line-height: 1.5;
  color: #1b5e20; 
  background: linear-gradient(to right, #2e7d32, #66bb6a);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;

  word-break: break-word;
  width: 100%;
  margin-top: 10px;
  padding-left: 10px;
}

@media (min-width: 768px) {
flex-direction: row;
}
`
export const WrapperIMGTitle = styled.div`
display: flex;
align-items: flex-start;
align-items: center;
gap: 15px; 
  padding: 0 15px 0 30px;
h2 {
    color: green;
}
`
export const Icon = styled.div`
  font-size: 20px;
  color: green;
  margin-left: auto;
  padding-right: 25px;
  transition: transform 0.3s ease;

  ${({ $isopen }) => $isopen && `
    transform: rotate(180deg);
  `}
`;
