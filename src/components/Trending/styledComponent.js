import styled from 'styled-components'

import {FaFire} from 'react-icons/fa'

export const TrendingContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: ${props => (props.lightTheme ? ' #f8fafc' : ' #181818')};
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
