import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

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

class Trending extends Component {
  state = {trendingList: [], responseStatus: statusConstant.initial}

  componentDidMount() {
    this.getTrendingData()
  }

  getFilterObject = fetchedData => {
    const filterData = fetchedData.map(each => ({
      id: each.id,
      publishedAt: each.published_at,
      thumbnailUrl: each.thumbnail_url,
      title: each.title,
      totalView: each.view_count,
      channel: {
        name: each.channel.name,
        profileImageUrl: each.channel.profile_image_url,
      },
    }))
    return filterData
  }

  // get trending list data
  getTrendingData = async () => {
    this.setState({responseStatus: statusConstant.inProgress})
    const api = 'https://apis.ccbp.in/videos/trending'
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(api, options)
    if (response.ok) {
      const data = await response.json()
      const trendingList = await this.getFilterObject(data.videos)
      this.setState({trendingList, responseStatus: statusConstant.success})
    }
  }

  // render success view
  getSuccessView = () => (
    <AppContext.Consumer>
      {value => {
        const {lightTheme} = value

        const {trendingList} = this.state
        return (
          <>
            <TrendingBg lightTheme={lightTheme}>
              <FireIcon theme={lightTheme ? 'true' : 'false'} />
              <Heading lightTheme={lightTheme}>Trending</Heading>
            </TrendingBg>
            <ListEl>
              {trendingList.map(each => (
                <TrendingItem key={each.id} itemDetails={each} />
              ))}
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
                alt="no videos"
              />
            ) : (
              <ImageEl
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png"
                alt="no videos"
              />
            )}
            <FailureHeading lightTheme={lightTheme}>
              Oops! Something Went Wrong
            </FailureHeading>
            <FailureDescription>
              We are having some trouble to complete your request. Please try
              again.
            </FailureDescription>
            <RetryButton type="button" onClick={this.getTrendingData}>
              Retry
            </RetryButton>
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

  renderTrendingView = () => {
    const {responseStatus} = this.state
    switch (responseStatus) {
      case statusConstant.success:
        return this.getSuccessView()
      case statusConstant.failure:
        return this.getFailureView
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
            <>
              <Header />
              <TrendingContainer lightTheme={lightTheme}>
                <LeftBar activePath={path} />
                <RightContainer>{this.renderTrendingView()}</RightContainer>
              </TrendingContainer>
            </>
          )
        }}
      </AppContext.Consumer>
    )
  }
}

export default Trending
