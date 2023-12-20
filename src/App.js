import {Switch, Route} from 'react-router-dom'
import {Component} from 'react'

import LoginRoute from './components/LoginRoute'
import HomeRoute from './components/HomeRoute'
import AppContext from './context/AppContext'
import VideoItemDetails from './components/VideoItemDetails'

import './App.css'

// Replace your code here
class App extends Component {
  state = {lightTheme: true}

  changeAppTheme = () => {
    this.setState(prevState => ({lightTheme: !prevState.lightTheme}))
    const {match} = this.props
    console.log(match)
  }

  render() {
    const {lightTheme} = this.state
    return (
      <AppContext.Provider
        value={{lightTheme, changeAppTheme: this.changeAppTheme}}
      >
        <Switch>
          <Route exact path="/login" component={LoginRoute} />
          <Route exact path="/" component={HomeRoute} />
          <Route exact path="/videos/:id" component={VideoItemDetails} />
        </Switch>
      </AppContext.Provider>
    )
  }
}

export default App
