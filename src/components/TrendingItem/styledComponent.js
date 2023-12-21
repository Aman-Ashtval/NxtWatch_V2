import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {BsDot} from 'react-icons/bs'

// link item
export const LinkItem = styled(Link)`
  text-decoration: none;
`

// list item li
export const ListItem = styled.li`
  margin-bottom: 50px;
  display: flex;
  align-items: flex-start;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

// image image container
export const ContainerBg = styled.div`
  width: 50%;
  @media (max-width: 768px) {
    width: 100%;
  }
`

// trending card image
export const ImageEl = styled.img`
  width: ${props => props.width};
  @media (min-width: 768px) {
    display: ${props => (props.d === 'sm' ? 'none' : null)};
  }
`

// trending card text container
export const TextContainer = styled.div`
  align-self: flex-start;
  width: 50%;
  display: flex;
  align-items: flex-start;
  @media (max-width: 768px) {
    width: 100%;
  }
`

// row container
export const Container = styled.div`
  margin-left: 16px;
`

// card heading
export const Heading = styled.h1`
  color: ${props => (props.lightTheme ? '#1e293b' : '#f1f1f1')};
  font-size: 22px;
  font-weight: 550;
  margin-top: 0px;
  @media (max-width: 768px) {
    font-size: 19px;
    margin-bottom: 0px;
  }
`

// view count ----------------------------------------------------------->

// dot element
export const DotIcon = styled(BsDot)`
  color: #475569;
  font-size: 25px;
  @media (min-width: 768px) {
    display: ${props => (props.d === 'sm' ? 'none' : null)};
  }
`

// channel name
export const Name = styled.p`
  color: #475569;
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 0px;
  @media (max-width: 768px) {
    display: ${props => (props.d === 'lg' ? 'none' : null)};
  }
`

// views count container
export const ViewsBg = styled.div`
  display: flex;
  align-items: center;
`

// paragraph element
export const ParagraphEl = styled.p`
  color: #475569;
  font-size: ${props => props.size};
  font-weight: 500;
  @media (min-width: 768px) {
    display: ${props => (props.d === 'sm' ? 'none' : null)};
  }
`
