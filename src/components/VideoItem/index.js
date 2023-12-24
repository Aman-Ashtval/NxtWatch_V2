import {formatDistanceToNow} from 'date-fns'

import AppContext from '../../context/AppContext'

import {
  ListItem,
  CardBannerImg,
  VideoLink,
  Container,
  TextContainer,
  CardHeading,
  ParagraphEl,
  DotIcon,
} from './styledComponent'

const VideoItem = props => {
  const {videoDetails} = props
  const {
    id,
    publishedAt,
    title,
    thumbnailUrl,
    totalView,
    channel,
  } = videoDetails

  const {name, profileImageUrl} = channel

  return (
    <AppContext.Consumer>
      {value => {
        const {lightTheme} = value

        return (
          <VideoLink to={`/videos/${id}`}>
            <ListItem>
              <CardBannerImg
                src={thumbnailUrl}
                alt="video thumbnail"
                width="100%"
              />
              <Container>
                <CardBannerImg
                  src={profileImageUrl}
                  alt="channel logo"
                  width="30px"
                />
                <TextContainer>
                  <CardHeading as="p" lightTheme={lightTheme}>
                    {title}
                  </CardHeading>
                  <ParagraphEl>{name}</ParagraphEl>
                  <Container>
                    <ParagraphEl>{totalView} views</ParagraphEl>
                    <DotIcon />
                    <ParagraphEl>
                      {formatDistanceToNow(new Date(publishedAt))}
                    </ParagraphEl>
                  </Container>
                </TextContainer>
              </Container>
            </ListItem>
          </VideoLink>
        )
      }}
    </AppContext.Consumer>
  )
}

export default VideoItem
