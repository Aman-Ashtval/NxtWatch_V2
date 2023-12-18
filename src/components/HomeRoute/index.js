import {Component} from 'react'

import {HomeContainer} from './styledComponent'
import Header from '../Header'

class HomeRoute extends Component {
  render() {
    return (
      <>
        <Header />
        <HomeContainer>
          <h1>Home</h1>
        </HomeContainer>
      </>
    )
  }
}

export default HomeRoute
