import styled from 'styled-components'
import ReactPlayer from 'react-player'
import {BsDot} from 'react-icons/bs'

// Background container
export const BgContainer = styled.div`
  padding: 0px;
  margin: 0px;
  background-color: ${props => (props.lightTheme ? '#f9f9f9' : '  #0f0f0f ')};
`

// videos details route Bg container
export const VideoDetailsContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: transparent;
`

// Right Container div
export const RightContainer = styled.div`
  height: 100vh;
  flex-grow: 1;
  background-color: transparent;
  padding: 16px;
  overflow-y: scroll;
`

// react video player
export const Player = styled(ReactPlayer)`
  width: 100%;
  min-height: 70%;
  @media (max-width: 900px) {
    min-height: 50%;
  }
`

// videos details title h1
export const Heading = styled.h1`
  color: ${props => (props.lightTheme ? '#1e293b' : '#ffffff')};
  font-size: 18px;
  font-weight: 450;
  @media (max-width: 768px) {
    margin-top: 16px;
  }
`

// Flex Container views
export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #cccccc;
  @media (max-width: 576px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
`

// container element
export const Container = styled.div`
  display: flex;
  align-items: center;
  margin: 16px 0px;
  @media (max-width: 768px) {
    margin: 22px 0px;
  }
`

// paragraph element
export const ParagraphEl = styled.p`
  color: #475569;
  font-size: 14px;
  font-weight: 400;
  margin: 0px;
`

// dot element
export const DotIcon = styled(BsDot)`
  color: #475569;
  font-size: 25px;
`

// response button element
export const ResponseButton = styled.button`
  color: ${props => (props.isFill ? ' #2563eb' : '#64748b')};
  font-size: 16px;
  font-weight: 500;
  margin: 0px 16px 0px 0px;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  border: none;
`

// channel container div
export const ChannelContainer = styled.div`
  margin-top: 22px;
  display: flex;
  align-items: center;
`

// profile image element
export const ProfileImage = styled.img`
  width: 50px;
  margin: 0px 5px;
  align-self: flex-start;
`

// channel text container
export const TextContainer = styled.div`
  flex-grow: 1;
  padding: 0px 10px;
`

// channel title
export const Name = styled(Heading)`
  font-size: 16px;
  font-weight: 450;
  margin-top: 0px;
`

// channel title
export const Title = styled(ParagraphEl)`
  font-size: 13px;
  font-weight: 400;
  margin-top: 0px;
`

// description paragraph
export const Description = styled.p`
  color: ${props => (props.lightTheme ? '#475569' : '#f8fafc')};
  font-size: 16px;
  font-weight: 420;
  margin-top: 22px;
  @media (max-width: 576px) {
    font-size: 15px;
    font-weight: 400;
  }
`

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
