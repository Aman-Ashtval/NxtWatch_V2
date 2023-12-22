import styled from 'styled-components'

export const NoteFoundContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: ${props => (props.lightTheme ? ' #f8fafc' : ' #181818')};
`
// Right Container div
export const RightContainer = styled.div`
  height: 100vh;
  flex-grow: 1;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

// not found image
export const ImageEl = styled.img`
  width: 45%;
  margin-bottom: 22px;
  @media (max-width: 768px) {
    width: 80%;
  }
`

// not found heading
export const Heading = styled.h1`
  color: ${props => (props.lightTheme ? '#1e293b' : '#ffffff')};
  font-size: 32px;
  font-weight: 550;
  @media (max-width: 768px) {
    margin-top: 16px;
    font-size: 28px;
  }
`

// not found paragraph element
export const Description = styled.p`
  color: #475569;
  font-size: 18px;
  font-weight: 450;
  margin: 0px;
  text-align: center;
`
