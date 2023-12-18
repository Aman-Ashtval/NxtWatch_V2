import styled from 'styled-components'

export const HeaderContainer = styled.div`
  border: 1px solid black;
  padding: 10px 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const HeaderLogo = styled.img`
  width: 150px;
`

export const IconContainer = styled.div`
  border: 1px solid black;
  padding: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const ImageEl = styled.img`
  width: 30px;
  height: 30px;
  margin: 0px 20px;
`

export const LogoutBtn = styled.button`
  background-color: transparent;
  border: 1px solid #3b82f6;
  color: #3b82f6;
  font-size: 16px;
  font-weight: 500;
  padding: 5px 15px;
  border-radius: 7px;
  cursor: pointer;
`

// popup container div
export const PopupContainer = styled.div`
  width: 300px;
  padding: 25px;
  background-color: #ffffff;
  border-radius: 5px;
`

export const PopupMsg = styled.p`
  color: #4f46e5;
  font-size: 16px;
  font-weight: 550;
  text-align: center;
  margin-top: 0px;
`

export const CustomButton = styled(LogoutBtn)`
  border: ${props => (props.fill ? 'none' : '2px solid #d7dfe9')};
  background-color: ${props => (props.fill ? '#3b82f6' : 'transparent')};
  color: ${props => (props.fill ? '#ffffff' : '#64748b')};
  font-size: 16px;
  margin: 10px;
  font-weight: 550;
  border-radius: 2px;
  padding: 6px 10px;
  cursor: pointer;
`
