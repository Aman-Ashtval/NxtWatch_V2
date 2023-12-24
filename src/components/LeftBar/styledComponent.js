import styled from 'styled-components'
import {Link} from 'react-router-dom'

import {AiFillHome} from 'react-icons/ai'
import {FaFire, FaGamepad} from 'react-icons/fa'
import {RiPlayListAddLine} from 'react-icons/ri'

// Left Container div
export const LeftContainer = styled.div`
  height: 100vh;
  width: 20%;
  flex-shrink: 0;
  background-color: ${props => (props.lightTheme ? '#ffffff' : '#212121')};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0px 0px 20px 0px;
  @media (max-width: 768px) {
    display: none;
  }
`

// menu unordered list
export const MenuItemList = styled.ul`
  list-style-type: none;
  padding: 0px;
  color: ${props => (props.lightTheme ? '#475569' : ' #f8fafc')};
  @media (max-width: 768px) {
    height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`

// menu list item
export const ListItem = styled.li`
  display: flex;
  align-items: center;
  padding: 10px 16px;
  color: inherit;
  background-color: ${props => {
    const {isActive, lightTheme} = props
    if (isActive && lightTheme) {
      return '#f1f1f1'
    }
    if (isActive && lightTheme === false) {
      return '#383838'
    }
    return 'transparent'
  }};
  font-weight: ${props => (props.isActive ? 'bold' : '400px')};
  @media (max-width: 768px) {
    padding-left: 30%;
  }
`

// menu Link
export const NavLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  margin-left: 16px;
  @media (max-width: 768px) {
    width: 100%;
  }
`

// Home icon
export const HomeIcon = styled(AiFillHome)`
  font-size: 20px;
  color: ${props => (props.active === 'true' ? ' #ff0b37' : 'inherit')};
`

// Fire Icon
export const FireIcon = styled(FaFire)`
  font-size: 20px;
  color: ${props => (props.active === 'true' ? ' #ff0b37' : 'inherit')};
`

// Game Icon
export const GameIcon = styled(FaGamepad)`
  font-size: 20px;
  color: ${props => (props.active === 'true' ? ' #ff0b37' : 'inherit')};
`

// Play List Icon
export const SaveListIcon = styled(RiPlayListAddLine)`
  font-size: 20px;
  color: ${props => (props.active === 'true' ? ' #ff0b37' : 'inherit')};
`

// icon name paragraph
export const NameParagraph = styled.p`
  color: inherit;
  margin: 0px 16px;
  font-size: 16px;
  font-weight: inherit;
  font-family: 'Roboto';
`

// left NavBar Bottom container div
export const BottomContainer = styled.div`
  padding: 10px 16px;
`

// Bottom Container Heading Container
export const Heading = styled.p`
  color: ${props => (props.lightTheme ? '#1e293b' : '#f8fafc')};
  font-weight: 550;
  font-size: 18px;
  margin-top: 0px;
`

// social icon Container div
export const SocialIconsContainer = styled.div`
  margin: 10px 0px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`

// social-icons image element
export const SocialIconImage = styled.img`
  width: 30px;
  margin: 5px 16px 5px 0px;
`

// social description
export const Description = styled.p`
  color: ${props => (props.lightTheme ? '#475569' : '#f8fafc')};
  font-size: 16px;
  font-weight: 500;
`
