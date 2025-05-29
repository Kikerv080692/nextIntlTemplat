import { useState } from 'react';
import * as SC from './BurgerButton.styled'
import Image from "next/image";
import BurgerMenu from '../BurgerMenu/BurgerMenu';

export default function BurgerButton({locale}) {
  const [isShowMenu, setIsShowMenu] = useState(false);

  const handleShowMenu = () => {
    setIsShowMenu(!isShowMenu);
  };
  const handleCloseMenu = () => {
        setIsShowMenu(false)
    }
  return (
    <SC.Wrapper>
      <SC.IconButton type='button' onClick={handleShowMenu}>
        {!isShowMenu ? (
          <Image src="/images/burger-button/menu.png" alt="menu" width={30} height={30} />
        ) : (
          <Image src="/images/burger-button/close-option.png" alt="close" width={30} height={30} />
        )}
      </SC.IconButton>
      {isShowMenu && <BurgerMenu isShowMenu={isShowMenu}   locale={locale} handleShowMenu={handleShowMenu} handleCloseMenu={handleCloseMenu}/>}
    </SC.Wrapper>
  );
}
