import styled from 'styled-components'

export const HeaderContainer = styled.div`
  padding: 16px 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => (props.lightTheme ? '#ffffff' : '#212121')};
  @media (max-width: 768px) {
    padding: 10px;
  }
`

export const HeaderLogo = styled.img`
  width: 150px;
  @media (max-width: 768px) {
    width: 120px;
  }
`

export const IconContainer = styled.div`
  padding: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const ImageEl = styled.img`
  width: 30px;
  height: 30px;
  margin: 0px;
  @media (max-width: 768px) {
    display: none;
  }
`

export const LogoutBtn = styled.button`
  background-color: transparent;
  border: ${props =>
    props.lightTheme ? '1px solid #3b82f6' : '1px solid #ffffff'};
  color: ${props => (props.lightTheme ? '#3b82f6' : '#ffffff')};
  font-size: 16px;
  font-weight: 500;
  padding: 5px 15px;
  border-radius: 7px;
  cursor: pointer;
  @media (max-width: 768px) {
    border: none;
    padding: 5px;
    color: ${props => (props.lightTheme ? '#1e293b' : '#ffffff')};
  }
`

export const SpanText = styled.span`
  @media (max-width: 768px) {
    display: none;
  }
`

// theme change button -------------------------------------------------------->
export const ThemeChangeButton = styled.button`
  border: none;
  background-color: transparent;
  padding: 5px;
  margin: 0px 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  @media (min-width: 768px) {
    margin: 0px;
  }
`

// popup container div
export const PopupContainer = styled.div`
  width: 300px;
  padding: 25px;
  background-color: ${props => (props.lightTheme ? '#ffffff' : ' #212121')};
  border-radius: 5px;
`

export const PopupMsg = styled.p`
  color: ${props => (props.lightTheme ? '#4f46e5' : '#f8fafc')};
  font-size: 16px;
  font-weight: 550;
  text-align: center;
  margin-top: 0px;
`

export const CustomButton = styled(LogoutBtn)`
  border: ${props => (props.fill ? 'none' : '1px solid #d7dfe9')};
  background-color: ${props => (props.fill ? '#3b82f6' : 'transparent')};
  color: ${props => (props.fill ? '#ffffff' : '#64748b')};
  font-size: 16px;
  margin: 10px;
  font-weight: 550;
  border-radius: 2px;
  padding: 6px 10px;
  cursor: pointer;
`

export const MenuButton = styled.button`
  margin: 0px 8px;
  border: none;
  padding: 5px;
  color: ${props => (props.lightTheme ? '#1e293b' : '#ffffff')};
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
`
