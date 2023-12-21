import {formatDistanceToNow} from 'date-fns'

import AppContext from '../../context/AppContext'

import {
  LinkItem,
  ListItem,
  ContainerBg,
  ImageEl,
  TextContainer,
  Container,
  Heading,
  Name,
  ParagraphEl,
  ViewsBg,
  DotIcon,
} from './styledComponent'

const TrendingItem = props => {
  const {itemDetails} = props
  const {id, thumbnailUrl, publishedAt, title, totalView, channel} = itemDetails
  const {name, profileImageUrl} = channel

  return (
    <AppContext.Consumer>
      {value => {
        const {lightTheme} = value

        return (
          <LinkItem to={`/videos/${id}`}>
            <ListItem>
              <ContainerBg>
                <ImageEl src={thumbnailUrl} alt={title} width="100%" />
              </ContainerBg>

              <TextContainer>
                {/* small device profile image-------------------------------------------------> */}
                <ImageEl src={profileImageUrl} alt={name} width="40px" d="sm" />
                <Container>
                  <Heading lightTheme={lightTheme}>{title}</Heading>
                  <Name d="lg">{name}</Name>
                  <ViewsBg>
                    <ParagraphEl d="sm">{name}</ParagraphEl>
                    <DotIcon d="sm" />
                    <ParagraphEl>{totalView} views</ParagraphEl>
                    <DotIcon />
                    <ParagraphEl>
                      {formatDistanceToNow(new Date(publishedAt))}
                    </ParagraphEl>
                  </ViewsBg>
                </Container>
              </TextContainer>
            </ListItem>
          </LinkItem>
        )
      }}
    </AppContext.Consumer>
  )
}

export default TrendingItem
