import {Switch, Route} from 'react-router-dom'
import {Component} from 'react'

import LoginRoute from './components/LoginRoute'
import HomeRoute from './components/HomeRoute'
import AppContext from './context/AppContext'

import './App.css'

// Replace your code here
class App extends Component {
  state = {lightTheme: true}

  changeAppTheme = () => {
    this.state(prevState => ({lightTheme: !prevState.lightTheme}))
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
        </Switch>
      </AppContext.Provider>
    )
  }
}

export default App
