import styled from 'styled-components'

export const Container = styled.div`
  margin: 22px 0px;
  padding: 0px;
`
// Background Container div
export const LoginContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px;
  background-color: ${props => (props.lightTheme ? '#ffffff' : '#181818')};
`

// Form container div
export const FormContainer = styled.div`
  padding: 50px;
  width: 40%;
  display: flex;
  flex-direction: column;
  box-shadow: ${props => (props.lightTheme ? '0px 0px 25px 4px #e2e8f0' : '')};
  border-radius: 5px;
  background-color: ${props => (props.lightTheme ? '#ffffff' : '#0f0f0f')};
  @media (max-width: 550px) {
    width: 100%;
    padding: 50px 25px;
  }

  @media (min-width: 550px) and (max-width: 768px) {
    margin: 50px;
    width: 80%;
  }

  @media (min-width: 768px) and (max-width: 900px) {
    width: 50%;
  }
`

// App logo image
export const LogoImage = styled.img`
  width: 150px;
  align-self: center;
  margin-bottom: 22px;
`

// Form Element
export const FormElement = styled.form`
  align-self: stretch;
  display: flex;
  flex-direction: column;
`

// Label element
export const LabelEl = styled.label`
  font-size: 14px;
  color: ${props => (props.lightTheme ? '#475569' : '#ffffff')};
  font-weight: bold;
  margin: 22px 0px 5px 0px;
`

// Input Element
export const InputEl = styled.input`
  outline: none;
  border: 1px solid #94a3b8;
  border-radius: 3px;
  padding: 10px;
  color: #94a3b8;
  font-size: 16px;
  font-weight: 550;
  background-color: transparent;
`
// Checkbox Input
export const CheckBoxInput = styled(InputEl)`
  font-size: 50px;
  margin-right: 5px;
  cursor: pointer;
`

// Login Button
export const LoginButton = styled.button`
  border: none;
  background-color: #3b82f6;
  color: #ffffff;
  font-size: 16px;
  font-weight: 580;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
`

// Error massage paragraph element
export const ErrorMsg = styled.p`
  color: ${props => (props.lightTheme ? '#ff0b37' : ' #ff0000')};
  font-size: 14px;
  font-weight: 500;
`
