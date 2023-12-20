import {Component} from 'react'
import Cookies from 'js-cookie'
import {formatDistanceToNow} from 'date-fns'
import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'
import {RiPlayListAddLine} from 'react-icons/ri'

import Header from '../Header'
import LeftBar from '../LeftBar'
import AppContext from '../../context/AppContext'

import {
  BgContainer,
  RightContainer,
  Player,
  Heading,
  FlexContainer,
  ParagraphEl,
  DotIcon,
  Container,
  ResponseButton,
  ChannelContainer,
  ProfileImage,
  TextContainer,
  Name,
  Title,
  Description,
} from './styledComponent'

// api constant values
const responseConstants = {
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
  initial: 'INITIAL',
}

class VideoItemDetails extends Component {
  state = {
    videoDetails: {},
    responseStatus: responseConstants.initial,
    isLike: false,
    isDislike: false,
    isSaved: false,
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  getFilterObject = obj => {
    const filterObj = {
      id: obj.id,
      publishedAt: obj.published_at,
      thumbnailUrl: obj.thumbnail_url,
      title: obj.title,
      videoUrl: obj.video_url,
      viewCount: obj.view_count,
      description: obj.description,
      channel: {
        name: obj.channel.name,
        profileImageUrl: obj.channel.profile_image_url,
        subscriberCount: obj.channel.subscriber_count,
      },
    }
    return filterObj
  }

  getVideoDetails = async () => {
    this.setState({responseStatus: responseConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const {match} = this.props
    const {params} = match
    const {id} = params
    const api = `https://apis.ccbp.in/videos/${id}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(api, options)
    if (response.ok) {
      const data = await response.json()
      const videoDetails = this.getFilterObject(data.video_details)
      this.setState({videoDetails, responseStatus: responseConstants.success})
    }
  }

  // toggle like, dislike and saved icons---------------------------------------------->
  toggleLike = () => {
    this.setState(prevState => ({isLike: !prevState.isLike}))
  }

  toggleDisLike = () => {
    this.setState(prevState => ({isDislike: !prevState.isDislike}))
  }

  toggleSave = () => {
    this.setState(prevState => ({isSaved: !prevState.isSaved}))
  }

  // get the successView of video
  getSuccessView = lightTheme => {
    const {videoDetails, isLike, isDislike, isSaved} = this.state
    const {
      videoUrl,
      title,
      viewCount,
      publishedAt,
      channel,
      description,
    } = videoDetails
    const {name, profileImageUrl, subscriberCount} = channel

    return (
      <>
        <Player url={videoUrl} controls width="100%" />
        <Heading lightTheme={lightTheme}>{title}</Heading>
        <FlexContainer>
          <Container>
            <ParagraphEl>{viewCount} views</ParagraphEl>
            <DotIcon />
            <ParagraphEl>
              {formatDistanceToNow(new Date(publishedAt))}
            </ParagraphEl>
          </Container>
          <Container>
            <ResponseButton isFill={isLike} onClick={this.toggleLike}>
              <AiOutlineLike
                fontSize="18px"
                style={{margin: '0px 3px 0px 0px'}}
              />
              Like
            </ResponseButton>
            <ResponseButton isFill={isDislike} onClick={this.toggleDisLike}>
              <AiOutlineDislike fontSize="18px" style={{margin: '0px 3px'}} />
              DisLike
            </ResponseButton>
            <ResponseButton isFill={isSaved} onClick={this.toggleSave}>
              <RiPlayListAddLine fontSize="18px" style={{margin: '0px 5px'}} />
              Save
            </ResponseButton>
          </Container>
        </FlexContainer>
        {/* channel details render here-------------------------------------> */}
        <ChannelContainer>
          <ProfileImage src={profileImageUrl} alt={name} />
          <TextContainer>
            <Name lightTheme={lightTheme}>{name}</Name>
            <Title lightTheme={lightTheme}>{subscriberCount} Subscribers</Title>
            <Description lightTheme={lightTheme}>{description}</Description>
          </TextContainer>
        </ChannelContainer>
      </>
    )
  }

  getVideoDetailsView = lightTheme => {
    const {responseStatus} = this.state

    switch (responseStatus) {
      case responseConstants.success:
        return this.getSuccessView(lightTheme)

      default:
        return null
    }
  }

  render() {
    return (
      <AppContext.Consumer>
        {value => {
          const {lightTheme} = value

          return (
            <>
              <Header />
              <BgContainer>
                <LeftBar />
                <RightContainer lightTheme={lightTheme}>
                  {this.getVideoDetailsView(lightTheme)}
                </RightContainer>
              </BgContainer>
            </>
          )
        }}
      </AppContext.Consumer>
    )
  }
}

export default VideoItemDetails
