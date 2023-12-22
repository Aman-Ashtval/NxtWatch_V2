import AppContext from '../../context/AppContext'
import Header from '../Header'
import LeftBar from '../LeftBar'
import TrendingItem from '../TrendingItem'

import {
  TrendingContainer,
  RightContainer,
  TrendingBg,
  FireIcon,
  Heading,
  ListEl,
  ImageEl,
} from './styledComponent'

import {
  LoaderContainer,
  FailureHeading,
  FailureDescription,
} from '../VideoItemDetails/styledComponent'

const SavedVideos = props => {
  const {match} = props
  const {path} = match
  return (
    <AppContext.Consumer>
      {value => {
        const {lightTheme, savedVideosList} = value

        return (
          <>
            <Header activePath={path} />
            <TrendingContainer lightTheme={lightTheme}>
              <LeftBar activePath={path} />
              <RightContainer>
                {savedVideosList.length === 0 ? (
                  <LoaderContainer>
                    <ImageEl
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png "
                      alt="no saved videos"
                    />
                    <FailureHeading lightTheme={lightTheme}>
                      No saved videos found
                    </FailureHeading>
                    <FailureDescription>
                      You can save your videos while watching them
                    </FailureDescription>
                  </LoaderContainer>
                ) : (
                  <>
                    <TrendingBg lightTheme={lightTheme}>
                      <FireIcon theme={lightTheme ? 'true' : 'false'} />
                      <Heading lightTheme={lightTheme}>Saved Videos</Heading>
                    </TrendingBg>
                    <ListEl>
                      {savedVideosList.map(each => (
                        <TrendingItem key={each.id} itemDetails={each} />
                      ))}
                    </ListEl>
                  </>
                )}
              </RightContainer>
            </TrendingContainer>
          </>
        )
      }}
    </AppContext.Consumer>
  )
}

export default SavedVideos
