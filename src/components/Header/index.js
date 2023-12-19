import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

import {FaMoon, FaArrowAltCircleRight} from 'react-icons/fa'
import {IoSunnyOutline} from 'react-icons/io5'
import {GiHamburgerMenu} from 'react-icons/gi'
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
  MenuButton,
  ThemeChangeButton,
  SpanText,
} from './styledComponent'
import AppContext from '../../context/AppContext'

import './index.css'

const Header = props => {
  const {history} = props
  const logoutUser = () => {
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <AppContext.Consumer>
      {value => {
        const {lightTheme, changeAppTheme} = value
        const headerLogoImageUrl = lightTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
        const themeIcon = lightTheme ? (
          <FaMoon fontSize="24px" />
        ) : (
          <IoSunnyOutline color="#ffffff" fontSize="28px" />
        )
        return (
          <HeaderContainer lightTheme={lightTheme}>
            <HeaderLogo src={headerLogoImageUrl} alt="nxt watch logo" />
            <IconContainer>
              <ThemeChangeButton type="button" onClick={changeAppTheme}>
                {themeIcon}
              </ThemeChangeButton>

              {/* menu popup --------------------------------------------------------------------------------------------------------------- */}
              <Popup
                modal
                trigger={
                  <MenuButton type="button" lightTheme={lightTheme}>
                    <ImageEl
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                      alt="profile"
                    />
                    <GiHamburgerMenu
                      fontSize="30px"
                      color="inherit"
                      className="small-device-icons"
                    />
                  </MenuButton>
                }
                className="popup-content"
              >
                {close => (
                  <>
                    <PopupContainer lightTheme={lightTheme}>
                      <PopupMsg lightTheme={lightTheme}>
                        Are you sure you want to logout?
                      </PopupMsg>
                      <center>
                        <CustomButton type="button" onClick={() => close()}>
                          Cancel
                        </CustomButton>
                      </center>
                    </PopupContainer>
                  </>
                )}
              </Popup>

              {/* logout Popup container----------------------------------------------------------------------------------------------------- */}
              <Popup
                modal
                trigger={
                  <LogoutBtn type="button" lightTheme={lightTheme}>
                    <SpanText>Logout</SpanText>
                    <FaArrowAltCircleRight
                      fontSize="30px"
                      color="inherit"
                      className="small-device-icons"
                    />
                  </LogoutBtn>
                }
                className="popup-content"
              >
                {close => (
                  <>
                    <PopupContainer lightTheme={lightTheme}>
                      <PopupMsg lightTheme={lightTheme}>
                        Are you sure you want to logout?
                      </PopupMsg>
                      <center>
                        <CustomButton type="button" onClick={() => close()}>
                          Cancel
                        </CustomButton>
                        <CustomButton
                          fill="true"
                          type="button"
                          onClick={logoutUser}
                        >
                          Confirm
                        </CustomButton>
                      </center>
                    </PopupContainer>
                  </>
                )}
              </Popup>
            </IconContainer>
          </HeaderContainer>
        )
      }}
    </AppContext.Consumer>
  )
}

export default withRouter(Header)
