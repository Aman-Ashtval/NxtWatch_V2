import {Switch, Route, Redirect} from 'react-router-dom'
import {Component} from 'react'

import LoginRoute from './components/LoginRoute'
import HomeRoute from './components/HomeRoute'
import AppContext from './context/AppContext'
import VideoItemDetails from './components/VideoItemDetails'
import Trending from './components/Trending'
import SavedVideos from './components/SavedVideos'
import Gaming from './components/Gaming'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'

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
          <ProtectedRoute exact path="/" component={HomeRoute} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </AppContext.Provider>
    )
  }
}

export default App
