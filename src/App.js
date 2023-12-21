import {Switch, Route} from 'react-router-dom'
import {Component} from 'react'

import LoginRoute from './components/LoginRoute'
import HomeRoute from './components/HomeRoute'
import AppContext from './context/AppContext'
import VideoItemDetails from './components/VideoItemDetails'
import Trending from './components/Trending'
import SavedVideos from './components/SavedVideos'

import './App.css'

// Replace your code here
class App extends Component {
  state = {lightTheme: true, savedVideosList: []}

  changeAppTheme = () => {
    this.setState(prevState => ({lightTheme: !prevState.lightTheme}))
  }

  saveVideo = video => {
    const {savedVideosList} = this.state
    this.setState(prevState => {
      const {id} = video
      const existVideo = savedVideosList.filter(each => each.id === id)
      if (existVideo.length === 0) {
        return {savedVideosList: [...prevState.savedVideosList, video]}
      }
      return {
        savedVideosList: prevState.savedVideosList.filter(
          each => each.id !== id,
        ),
      }
    })
  }

  render() {
    const {lightTheme, savedVideosList} = this.state
    return (
      <AppContext.Provider
        value={{
          lightTheme,
          savedVideosList,
          saveVideo: this.saveVideo,
          changeAppTheme: this.changeAppTheme,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginRoute} />
          <Route exact path="/" component={HomeRoute} />
          <Route exact path="/videos/:id" component={VideoItemDetails} />
          <Route exact path="/trending" component={Trending} />
          <Route exact path="/saved-videos" component={SavedVideos} />
        </Switch>
      </AppContext.Provider>
    )
  }
}

export default App
