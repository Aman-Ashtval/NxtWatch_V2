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
  border: 1px solid black;
`
