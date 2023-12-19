import {Component} from 'react'
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
} from './styledComponent'

import AppContext from '../../context/AppContext'
import Header from '../Header'
import LeftBar from '../LeftBar'

// state object
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
    const api = 'https://apis.ccbp.in/videos/all?search='
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
      console.log(data)
      const videosList = await this.getFilterObject(data.videos)
      this.setState({videosList, responseStatus: statusConstant.success})
    }
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  hideBanner = () => {
    this.setState({showBanner: false})
  }

  // Render Loading View method
  getLoadingView = () => {}

  renderResponseView = () => {
    const {responseStatus} = this.state
    switch (responseStatus) {
      case statusConstant.inProgress:
        return this.getLoadingView()

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
                    <SearchButton>
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
