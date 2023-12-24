import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import AppContext from '../../context/AppContext'
import Header from '../Header'
import LeftBar from '../LeftBar'

import {
  BgContainer,
  GamingContainer,
  RightContainer,
  GamingBg,
  GameIcon,
  GameHeading,
  ListEl,
  LinkItem,
  ListItem,
  GameBanner,
  Title,
  Description,
} from './styledComponent'

import {
  LoaderContainer,
  ImageEl,
  FailureHeading,
  FailureDescription,
  RetryButton,
} from '../VideoItemDetails/styledComponent'

// status object
const statusConstant = {
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
  initial: 'INITIAL',
}

class Gaming extends Component {
  state = {gamesList: [], responseStatus: statusConstant.initial}

  componentDidMount() {
    this.getGamingData()
  }

  getFilterObject = fetchedData => {
    const filterData = fetchedData.map(each => ({
      id: each.id,
      thumbnailUrl: each.thumbnail_url,
      title: each.title,
      totalView: each.view_count,
    }))
    return filterData
  }

  getGamingData = async () => {
    this.setState({responseStatus: statusConstant.inProgress})
    const gamingApi = 'https://apis.ccbp.in/videos/gaming'
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(gamingApi, options)
    if (response.ok) {
      const data = await response.json()
      const gamesList = await this.getFilterObject(data.videos)
      this.setState({gamesList, responseStatus: statusConstant.success})
    } else {
      this.setState({responseStatus: statusConstant.failure})
    }
  }

  // render success view
  getSuccessView = () => (
    <AppContext.Consumer>
      {value => {
        const {lightTheme} = value

        const {gamesList} = this.state
        return (
          <>
            <GamingBg lightTheme={lightTheme} data-testid="banner">
              <GameIcon theme={lightTheme ? 'true' : 'false'} />
              <GameHeading lightTheme={lightTheme}>Gaming</GameHeading>
            </GamingBg>
            <ListEl>
              {gamesList.map(each => {
                const {id, title, thumbnailUrl, totalView} = each
                return (
                  <LinkItem to={`/videos/${id}`} key={id}>
                    <ListItem>
                      <GameBanner src={thumbnailUrl} alt="video thumbnail" />
                      <Title lightTheme={lightTheme}>{title}</Title>
                      <Description>
                        {`${totalView} Watching Worldwide`}{' '}
                      </Description>
                    </ListItem>
                  </LinkItem>
                )
              })}
            </ListEl>
          </>
        )
      }}
    </AppContext.Consumer>
  )

  // render failure view
  getFailureView = () => (
    <AppContext.Consumer>
      {value => {
        const {lightTheme} = value

        return (
          <LoaderContainer>
            {lightTheme ? (
              <ImageEl
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
                alt="failure view"
              />
            ) : (
              <ImageEl
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png"
                alt="failure view"
              />
            )}
            <FailureHeading lightTheme={lightTheme}>
              Oops! Something Went Wrong
            </FailureHeading>
            <FailureDescription>
              We are having some trouble to complete your request. Please try
              again.
            </FailureDescription>
            <RetryButton onClick={this.getGamingData}>Retry</RetryButton>
          </LoaderContainer>
        )
      }}
    </AppContext.Consumer>
  )

  // render Loader view
  getLoadingView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color=" #4f46e5" height="50" width="50" />
    </LoaderContainer>
  )

  // render view logic
  renderGamingView = () => {
    const {responseStatus} = this.state
    switch (responseStatus) {
      case statusConstant.success:
        return this.getSuccessView()
      case statusConstant.failure:
        return this.getFailureView()
      case statusConstant.inProgress:
        return this.getLoadingView()

      default:
        return null
    }
  }

  render() {
    const {match} = this.props
    const {path} = match
    return (
      <AppContext.Consumer>
        {value => {
          const {lightTheme} = value

          return (
            <BgContainer lightTheme={lightTheme} data-testid="gaming">
              <Header activePath={path} />
              <GamingContainer>
                <LeftBar activePath={path} />
                <RightContainer>{this.renderGamingView()}</RightContainer>
              </GamingContainer>
            </BgContainer>
          )
        }}
      </AppContext.Consumer>
    )
  }
}

export default Gaming
