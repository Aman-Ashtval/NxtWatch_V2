import styled from 'styled-components'

import {Link} from 'react-router-dom'
import {FaGamepad} from 'react-icons/fa'

// Background container
export const BgContainer = styled.div`
  padding: 0px;
  margin: 0px;
  background-color: ${props => (props.lightTheme ? '#f9f9f9' : '  #0f0f0f ')};
`

export const GamingContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: transparent;
`
// Right Container div
export const RightContainer = styled.div`
  height: 100vh;
  flex-grow: 1;
  overflow-y: scroll;
`

// Gaming logo container
export const GamingBg = styled.div`
  height: 150px;
  background-color: ${props => (props.lightTheme ? '#f4f4f4' : '#383838')};
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    height: 100px;
  }
`

// Gaming icon
export const GameIcon = styled(FaGamepad)`
  width: 100px;
  height: 100px;
  padding: 25px;
  margin: 0px 22px 0px 50px;
  color: #ff0000;
  background-color: ${props =>
    props.theme === 'true' ? '#e2e8f0' : '#000000'};
  border-radius: 100%;
  @media (max-width: 768px) {
    width: 70px;
    height: 70px;
    padding: 16px;
    margin: 0px 20px 0px 35px;
  }
`

// Gaming handing
export const GameHeading = styled.h1`
  color: ${props => (props.lightTheme ? '#1e293b' : '#ffffff')};
  font-size: 32px;
  margin: 0px;
  @media (max-width: 768px) {
    font-size: 28px;
  }
`

// Gaming item ul list
export const ListEl = styled.ul`
  list-style-type: none;
  padding: 0px;
  margin: 50px;
  overflow-y: scroll;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    margin: 16px;
  }
`

// Link item
export const LinkItem = styled(Link)`
  text-decoration: none;
  width: 32%;
  margin-bottom: 40px;
  @media (max-width: 576px) {
    width: 48%;
    height: 300px;
  }
`

// list item li
export const ListItem = styled.li`
  padding: 5px;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    background-color: ${props => (props.lightTheme ? 'none' : ' #090b0b')};
    z-index: 5;
    border-radius: 5px;
  }
`

// game image element
export const GameBanner = styled.img`
  width: 100%;
`

// game title h1
export const Title = styled.p`
  font-size: 22px;
  font-weight: 500;
  color: ${props => (props.lightTheme ? '#1e293b' : '#ffffff')};
  margin: 10px 0px;
  @media (max-width: 768px) {
    font-size: 18px;
  }
`

// game description p
export const Description = styled.p`
  color: #475569;
  font-weight: 400;
  font-size: 18px;
  margin-top: 0px;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`
