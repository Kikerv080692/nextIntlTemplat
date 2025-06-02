
import Navigation from '../Navigation/Navigation'
import * as SC from './BurgerMenu.styled'

export default function BurgerMenu({handleShowMenu, isShowMenu, handleCloseMenu,locale}) {
  
    return (
        <SC.Wrapper className={isShowMenu ? 'enter' : 'out'}>
          <Navigation handleCloseMenu={handleCloseMenu} handleShowMenu={handleShowMenu} locale={locale} />
          <SC.Img onClick={handleShowMenu} src='/images/burger-button/close-option.png' alt="close"/>
        </SC.Wrapper>
    )
}