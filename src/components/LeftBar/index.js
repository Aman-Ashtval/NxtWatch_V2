import AppContext from '../../context/AppContext'

import {
  LeftContainer,
  MenuItemList,
  NavLink,
  ListItem,
  HomeIcon,
  NameParagraph,
  FireIcon,
  GameIcon,
  SaveListIcon,
  BottomContainer,
  Heading,
  SocialIconsContainer,
  SocialIconImage,
  Description,
} from './styledComponent'

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

const LeftBar = props => {
  const {activePath} = props

  return (
    <AppContext.Consumer>
      {value => {
        const {lightTheme} = value

        return (
          <LeftContainer lightTheme={lightTheme}>
            <MenuItemList lightTheme={lightTheme}>
              {menuItemList.map(each => {
                const {id, url, displayText, iconClass} = each
                const Icon = iconClass
                const itemProp = {
                  active: activePath === url,
                  lightTheme,
                }
                return (
                  <NavLink to="/" key={id}>
                    <ListItem {...itemProp}>
                      <Icon active={activePath === url ? 'true' : 'false'} />
                      <NameParagraph {...itemProp}>{displayText}</NameParagraph>
                    </ListItem>
                  </NavLink>
                )
              })}
            </MenuItemList>

            {/* bottom container ------------------------------------------------------------------------------------> */}
            <BottomContainer>
              <Heading lightTheme={lightTheme}>CONTACT US</Heading>
              <SocialIconsContainer>
                <SocialIconImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                  alt="facebook logo"
                />
                <SocialIconImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                  alt="twitter logo"
                />
                <SocialIconImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                  alt="linked in logo"
                />
              </SocialIconsContainer>
              <Description lightTheme={lightTheme}>
                Enjoy! Now to see your channels and recommendation
              </Description>
            </BottomContainer>
          </LeftContainer>
        )
      }}
    </AppContext.Consumer>
  )
}

export default LeftBar
