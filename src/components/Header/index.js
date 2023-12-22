import {withRouter, Link} from 'react-router-dom'
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
  PopupEl,
  MenuContainer,
  CancelButton,
  CancelIcon,
} from './styledComponent'

import {
  MenuItemList,
  NavLink,
  ListItem,
  HomeIcon,
  NameParagraph,
  FireIcon,
  GameIcon,
  SaveListIcon,
} from '../LeftBar/styledComponent'
import AppContext from '../../context/AppContext'

import './index.css'

// Menu Item List
const menuItemList = [
  {
    id: 'home',
    url: '/',
    displayText: 'Home',
    iconClass: HomeIcon,
  },
  {
    id: 'trending',
    url: '/trending',
    displayText: 'Trending',
    iconClass: FireIcon,
  },
  {
    id: 'gaming',
    url: '/gaming',
    displayText: 'Gaming',
    iconClass: GameIcon,
  },
  {
    id: 'saveVideo',
    url: '/saved-videos',
    displayText: 'saved videos',
    iconClass: SaveListIcon,
  },
]

const Header = props => {
  const {history, activePath} = props
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
            <Link to="/">
              <HeaderLogo src={headerLogoImageUrl} alt="nxt watch logo" />
            </Link>

            <IconContainer>
              <ThemeChangeButton type="button" onClick={changeAppTheme}>
                {themeIcon}
              </ThemeChangeButton>

              {/* menu popup --------------------------------------------------------------------------------------------------------------- */}
              <PopupEl
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
              >
                {close => (
                  <MenuContainer lightTheme={lightTheme}>
                    <CancelButton type="button" onClick={() => close()}>
                      <CancelIcon lightTheme={lightTheme} />
                    </CancelButton>

                    {/* menu list in small devices--------------------------------------> */}

                    <MenuItemList lightTheme={lightTheme}>
                      {menuItemList.map(each => {
                        const {id, url, displayText, iconClass} = each
                        const Icon = iconClass
                        const itemProp = {
                          isActive: activePath === url,
                          lightTheme,
                        }
                        return (
                          <NavLink to={url} key={id}>
                            <ListItem {...itemProp}>
                              <Icon
                                active={activePath === url ? 'true' : 'false'}
                              />
                              <NameParagraph {...itemProp}>
                                {displayText}
                              </NameParagraph>
                            </ListItem>
                          </NavLink>
                        )
                      })}
                    </MenuItemList>
                  </MenuContainer>
                )}
              </PopupEl>

              {/* logout Popup container----------------------------------------------------------------------------------------------------- */}
              <Popup
                modal
                trigger={
                  <LogoutBtn type="button" lightTheme={lightTheme}>
                    <SpanText>Logout</SpanText>
                    <FaArrowAltCircleRight
                      fontSize="28px"
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
