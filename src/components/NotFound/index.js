import AppContext from '../../context/AppContext'
import Header from '../Header'
import LeftBar from '../LeftBar'

import {
  NoteFoundContainer,
  RightContainer,
  ImageEl,
  Heading,
  Description,
} from './styledComponent'

const NotFound = () => (
  <AppContext.Consumer>
    {value => {
      const {lightTheme} = value

      return (
        <>
          <Header />
          <NoteFoundContainer lightTheme={lightTheme}>
            <LeftBar />
            <RightContainer>
              {lightTheme ? (
                <ImageEl
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png"
                  alt="not found"
                />
              ) : (
                <ImageEl
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png"
                  alt="not found"
                />
              )}
              <Heading lightTheme={lightTheme}>Page Not Found</Heading>
              <Description>
                we are sorry, the page you requested could not be found.
              </Description>
            </RightContainer>
          </NoteFoundContainer>
        </>
      )
    }}
  </AppContext.Consumer>
)

export default NotFound
