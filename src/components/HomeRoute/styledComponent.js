import styled from 'styled-components'

import {BsX} from 'react-icons/bs'

export const HomeContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: ${props => (props.lightTheme ? ' #f8fafc' : ' #181818')};
`
// Right Container div
export const RightContainer = styled.div`
  height: 100vh;
  flex-grow: 1;
  border: 1px solid black;
`

// Banner container div
export const BannerContainer = styled.div`
  margin: 0px;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  height: 35vh;
  padding: 25px 16px;
  display: ${props => (props.showBanner ? 'flex' : 'none')};
  flex-direction: column;
`

// Cross Icon for banner
export const CrossIcon = styled(BsX)`
  font-size: 50px;
  color: #1e293b;
  align-self: flex-end;
  cursor: pointer;
`

// Banner Logo image
export const BannerLogo = styled.img`
  width: 180px;
`

// Banner Description paragraph
export const BannerDescription = styled.p`
  color: #1e293b;
  font-size: 20px;
  font-weight: 430;
`

// Get it button element
export const GetItButton = styled.button`
  align-self: flex-start;
  border: 2px solid #1e293b;
  background-color: transparent;
  padding: 10px 15px;
  color: #1e293b;
  font-size: 18px;
  font-weight: 500;
  margin-top: 22px;
`

// search input container
export const InputContainer = styled.div`
  margin: 18px;
  padding: 5px 0px;
  display: flex;
  align-items: center;
`

// Input container for video search
export const InputEl = styled.input`
  min-width: 40%;
  border: ${props =>
    props.lightTheme ? '1px solid #cbd5e1' : '1px solid #909090'};
  outline: none;
  background-color: ${props => (props.lightTheme ? '#ffffff' : 'transparent')};
  color: ${props => (props.lightTheme ? '#475569' : '#f1f1f1')};
  font-size: 16px;
  font-weight: 500;
  padding: 7px;
  @media (max-width: 768px) {
    flex-grow: 1;
  }
`

// Container Button element for search Icon
export const SearchButton = styled.button`
  border: 1px solid #cbd5e1;
  background-color: #ebebeb;
  font-size: 16px;
  padding: 8px 25px;
  display: flex;
  align-items: center;
`
