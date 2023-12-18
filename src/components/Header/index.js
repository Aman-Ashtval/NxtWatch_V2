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
} from './styledComponent'

const Header = () => (
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
      <Popup modal trigger={<LogoutBtn type="button">Logout</LogoutBtn>}>
        {close => (
          <>
            <PopupContainer>
              <p>React is a popular and widely used programming language</p>
            </PopupContainer>
            <button
              type="button"
              className="trigger-button"
              onClick={() => close()}
            >
              Close
            </button>
          </>
        )}
      </Popup>
    </IconContainer>
  </HeaderContainer>
)

export default Header
