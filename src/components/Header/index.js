import {FaMoon} from 'react-icons/fa'
import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'

import {
  HeaderContainer,
  HeaderLogo,
  IconContainer,
  ImageEl,
  LogoutBtn,
  PopupContainer,
  PopupMsg,
  CustomButton,
} from './styledComponent'

import './index.css'

const Header = () => {
  const fill = true
  return (
    <HeaderContainer>
      <HeaderLogo
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
        alt="nxt watch logo"
      />
      <IconContainer>
        <FaMoon fontSize="25px" />
        <ImageEl
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
          alt="profile"
        />
        <Popup
          modal
          trigger={<LogoutBtn type="button">Logout</LogoutBtn>}
          className="popup-content"
        >
          {close => (
            <>
              <PopupContainer>
                <PopupMsg>Are you sure you want to logout?</PopupMsg>
                <center>
                  <CustomButton type="button" onClick={() => close()}>
                    Cancel
                  </CustomButton>
                  <CustomButton
                    fill="true"
                    type="button"
                    onClick={() => close()}
                  >
                    Cancel
                  </CustomButton>
                </center>
              </PopupContainer>
            </>
          )}
        </Popup>
      </IconContainer>
    </HeaderContainer>
  )
}

export default Header
