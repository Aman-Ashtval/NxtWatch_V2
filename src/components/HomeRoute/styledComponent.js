import styled from 'styled-components'

import {BsX} from 'react-icons/bs'

// Background container
export const HomeBg = styled.div`
  padding: 0px;
  margin: 0px;
  background-color: ${props => (props.lightTheme ? ' #f9f9f9' : ' #181818')};
`

export const HomeContainer = styled.div`
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

// Banner container div
export const BannerContainer = styled.div`
  margin: 0px;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  height: 35vh;
  padding: 25px 16px;
  display: flex;
  flex-direction: column;
`

// cross button
export const CrossButton = styled.button`
  border: none;
  background-color: transparent;
  align-self: flex-end;
  cursor: pointer;
  padding: 3px;
`

// Cross Icon for banner
export const CrossIcon = styled(BsX)`
  font-size: 35px;
  color: #1e293b;
  @media (max-width: 768px) {
    font-size: 30px;
  }
`

// Banner Logo image
export const BannerLogo = styled.img`
  width: 180px;
  @media (max-width: 768px) {
    width: 150px;
  }
`

// Banner Description paragraph
export const BannerDescription = styled.p`
  color: #1e293b;
  font-size: 20px;
  font-weight: 430;
  @media (max-width: 768px) {
    font-size: 18px;
  }
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
  @media (max-width: 768px) {
    margin-top: 20px;
  }
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
  cursor: pointer;
`

// Loader Container div
export const LoaderContainer = styled.div`
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

// videos unordered list
export const ListContainer = styled.ul`
  list-style-type: none;
  margin: 16px;
  padding: 0px;
  overflow-y: scroll;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`

// image element for no Search view
export const ImageEl = styled.img`
  width: 300px;
`

// no search heading
export const Heading = styled.h1`
  color: ${props => (props.lightTheme ? '#1e293b' : '#ffffff')};
  font-size: 22px;
  font-weight: 550;
  margin-bottom: 0px;
  text-align: center;
`

// paragraph element for no search result
export const ParagraphEl = styled.p`
  color: #606060;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
`

// retry Button
export const RetryButton = styled.button`
  border: none;
  background-color: #4f46e5;
  color: #ffffff;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: 450;
  border-radius: 5px;
  cursor: pointer;
`
