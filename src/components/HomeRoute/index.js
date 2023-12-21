import {Component} from 'react'
import Loader from 'react-loader-spinner'

import Cookies from 'js-cookie'
import {BiSearch} from 'react-icons/bi'

import {
  HomeContainer,
  RightContainer,
  BannerContainer,
  BannerLogo,
  BannerDescription,
  GetItButton,
  CrossIcon,
  InputContainer,
  InputEl,
  SearchButton,
  LoaderContainer,
  ListContainer,
  ImageEl,
  Heading,
  ParagraphEl,
  RetryButton,
} from './styledComponent'

import AppContext from '../../context/AppContext'
import Header from '../Header'
import LeftBar from '../LeftBar'
import VideoItem from '../VideoItem'

// status object
const statusConstant = {
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
  initial: 'INITIAL',
}

class HomeRoute extends Component {
  state = {
    showBanner: true,
    searchInput: '',
    videosList: [],
    responseStatus: statusConstant.initial,
  }

  componentDidMount() {
    this.getVideoData()
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

  getVideoData = async () => {
    this.setState({responseStatus: statusConstant.inProgress})
    const {searchInput} = this.state
    const api = `https://apis.ccbp.in/videos/all?search=${searchInput}`
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
      const videosList = await this.getFilterObject(data.videos)
      this.setState({videosList, responseStatus: statusConstant.success})
    } else {
      this.setState({responseStatus: statusConstant.failure})
    }
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  hideBanner = () => {
    this.setState({showBanner: false})
  }

  retrySearchItem = () => {
    this.setState({searchInput: ''}, this.getVideoData)
  }

  // empty List view
  getNoSearchView = () => (
    <AppContext.Consumer>
      {value => {
        const {lightTheme} = value

        return (
          <LoaderContainer>
            <ImageEl
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="no videos"
            />
            <Heading lightTheme={lightTheme}>No Search results found</Heading>
            <ParagraphEl>
              Try different key words or remove search filter
            </ParagraphEl>
            <RetryButton type="button" onClick={this.retrySearchItem}>
              Retry
            </RetryButton>
          </LoaderContainer>
        )
      }}
    </AppContext.Consumer>
  )

  // get videos list view
  getVideosListView = () => (
    <AppContext.Consumer>
      {value => {
        const {lightTheme} = value

        const {videosList} = this.state

        if (videosList.length === 0) {
          return this.getNoSearchView(lightTheme)
        }
        return (
          <ListContainer>
            {videosList.map(each => (
              <VideoItem key={each.id} videoDetails={each} />
            ))}
          </ListContainer>
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
            <Heading lightTheme={lightTheme}>No Search results found</Heading>
            <ParagraphEl>
              Try different key words or remove search filter
            </ParagraphEl>
            <RetryButton type="button" onClick={this.retrySearchItem}>
              Retry
            </RetryButton>
          </LoaderContainer>
        )
      }}
    </AppContext.Consumer>
  )

  // Render Loading View method
  getLoadingView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color=" #4f46e5" height="50" width="50" />
    </LoaderContainer>
  )

  renderResponseView = () => {
    const {responseStatus} = this.state
    switch (responseStatus) {
      case statusConstant.inProgress:
        return this.getLoadingView()
      case statusConstant.success:
        return this.getVideosListView()
      case statusConstant.failure:
        return this.getFailureView()

      default:
        return null
    }
  }

  getBannerView = () => {
    const {showBanner} = this.state
    return (
      <BannerContainer showBanner={showBanner}>
        <CrossIcon onClick={this.hideBanner} />
        <BannerLogo
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
          alt=""
        />
        <BannerDescription>
          Buy Nxt Watch Premium prepaid plans with UPI
        </BannerDescription>
        <GetItButton type="button">GET IT NOW</GetItButton>
      </BannerContainer>
    )
  }

  render() {
    const {searchInput} = this.state
    const {match} = this.props
    const {path} = match
    return (
      <AppContext.Consumer>
        {value => {
          const {lightTheme} = value

          return (
            <>
              <Header />
              <HomeContainer data-testid="home" lightTheme={lightTheme}>
                <LeftBar activePath={path} />
                <RightContainer>
                  {this.getBannerView()}

                  {/* search for video container-----------------------------------------------------------------> */}

                  <InputContainer>
                    <InputEl
                      type="text"
                      value={searchInput}
                      onChange={this.onChangeSearchInput}
                      placeholder="Search"
                      lightTheme={lightTheme}
                    />
                    <SearchButton type="search" onClick={this.getVideoData}>
                      <BiSearch />
                    </SearchButton>
                  </InputContainer>

                  {/* render the response View by method calling-------------------------------------------------> */}
                  {this.renderResponseView()}
                </RightContainer>
              </HomeContainer>
            </>
          )
        }}
      </AppContext.Consumer>
    )
  }
}

export default HomeRoute
