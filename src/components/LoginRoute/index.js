import {Redirect} from 'react-router-dom'
import {Component} from 'react'
import Cookies from 'js-cookie'

import {
  Container,
  LoginContainer,
  FormContainer,
  LogoImage,
  FormElement,
  LabelEl,
  InputEl,
  CheckBoxInput,
  LoginButton,
  ErrorMsg,
} from './styledComponent'

import AppContext from '../../context/AppContext'

class LoginRoute extends Component {
  state = {
    username: '',
    password: '',
    showErrorMsg: false,
    errorMsg: '',
    showPassword: false,
  }

  onSubmitSuccess = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    const {history} = this.props
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showErrorMsg: true, errorMsg})
  }

  submitFormDetails = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const apiUrl = 'https://apis.ccbp.in/login'
    const userDetails = {username, password}
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const data = await response.json()
      this.onSubmitSuccess(data.jwt_token)
    } else {
      const data = await response.json()
      this.onSubmitFailure(data.error_msg)
    }
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  toggleCheckbox = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  // render form element here
  getFormView = () => (
    <AppContext.Consumer>
      {value => {
        const {lightTheme} = value

        const {username, password, showPassword} = this.state
        const passwordType = showPassword ? 'text' : 'password'
        return (
          <FormElement onSubmit={this.submitFormDetails}>
            <LabelEl htmlFor="name" lightTheme={lightTheme}>
              USERNAME
            </LabelEl>
            <InputEl
              type="text"
              id="name"
              placeholder="Username"
              value={username}
              onChange={this.onChangeUsername}
            />
            <LabelEl htmlFor="password" lightTheme={lightTheme}>
              PASSWORD
            </LabelEl>
            <InputEl
              type={passwordType}
              id="password"
              placeholder="Password"
              value={password}
              show
              onChange={this.onChangePassword}
            />
            <Container>
              <CheckBoxInput
                type="checkbox"
                id="togglePassword"
                onChange={this.toggleCheckbox}
              />
              <LabelEl htmlFor="togglePassword" lightTheme={lightTheme}>
                Show Password
              </LabelEl>
            </Container>

            <LoginButton type="submit">Login</LoginButton>
          </FormElement>
        )
      }}
    </AppContext.Consumer>
  )

  render() {
    // define redirect login page logic if the user is authenticated
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      // accessing the value from AppContext using Consumer component
      <AppContext.Consumer>
        {value => {
          const {lightTheme} = value
          const appLogoUrl = lightTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'

          const {showErrorMsg, errorMsg} = this.state

          return (
            <>
              <LoginContainer lightTheme={lightTheme}>
                <FormContainer lightTheme={lightTheme}>
                  <LogoImage src={appLogoUrl} alt="website logo" />
                  {this.getFormView()}
                  {showErrorMsg && (
                    <ErrorMsg
                      lightTheme={lightTheme}
                    >{`*${errorMsg}`}</ErrorMsg>
                  )}
                </FormContainer>
              </LoginContainer>
            </>
          )
        }}
      </AppContext.Consumer>
    )
  }
}

export default LoginRoute
