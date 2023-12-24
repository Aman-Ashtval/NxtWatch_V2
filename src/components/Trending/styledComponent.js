import styled from 'styled-components'

import {FaFire} from 'react-icons/fa'

// Background container
export const BgContainer = styled.div`
  padding: 0px;
  margin: 0px;
  background-color: ${props => (props.lightTheme ? '#f9f9f9' : '  #0f0f0f ')};
`

export const TrendingContainer = styled.div`
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

// trending logo container
export const TrendingBg = styled.div`
  height: 150px;
  background-color: ${props => (props.lightTheme ? '#f4f4f4' : '#383838')};
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    height: 100px;
  }
`

// trending icon
export const FireIcon = styled(FaFire)`
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

// trending handing
export const Heading = styled.h1`
  color: ${props => (props.lightTheme ? '#1e293b' : '#ffffff')};
  font-size: 32px;
  margin: 0px;
  @media (max-width: 768px) {
    font-size: 28px;
  }
`

// trending item list
export const ListEl = styled.ul`
  list-style-type: none;
  padding: 50px;
  @media (max-width: 768px) {
    padding: 16px;
  }
`

// ----------------------------inherit style from Video Item details

// Loader Container div
export const LoaderContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

// -------------- Failure view ----------------------------------------------->

// image element for no Search view
export const ImageEl = styled.img`
  width: 300px;
`

// no search heading
export const FailureHeading = styled.h1`
  color: ${props => (props.lightTheme ? '#1e293b' : '#ffffff')};
  font-size: 22px;
  font-weight: 550;
  margin-bottom: 0px;
  text-align: center;
`

// paragraph element for no search result
export const FailureDescription = styled.p`
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
  margin-top: 16px;
`
