import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {BsDot} from 'react-icons/bs'

// Link element
export const VideoLink = styled(Link)`
  text-decoration: none;
  width: 32%;
  margin-bottom: 30px;
  @media (max-width: 700px) {
    width: 100%;
  }
  @media (min-width: 700px) and (max-width: 900px) {
    width: 48%;
  }
`

// videos list item li
export const ListItem = styled.li`
  width: 100%;
`

// card image
export const CardBannerImg = styled.img`
  width: ${props => props.width};
`

// card container
export const Container = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: flex-start;
`

// card text container
export const TextContainer = styled.div`
  flex-grow: 1;
  padding: 0px 10px;
`

// card heading
export const CardHeading = styled.h3`
  color: ${props => (props.lightTheme ? '#1e293b' : '#f1f1f1')};
  font-size: 14px;
  font-weight: 400;
  margin-top: 0px;
  font-family: 'Roboto';
  @media (min-width: 900px) and (max-width: 1100px) {
    font-size: 13px;
  }
`

// paragraph element
export const ParagraphEl = styled.p`
  color: #475569;
  font-size: 14px;
  font-weight: 400;
  margin: 0px;
  @media (min-width: 900px) and (max-width: 1100px) {
    font-size: 13px;
  }
`

// dot element
export const DotIcon = styled(BsDot)`
  color: #475569;
  font-size: 20px;
`
