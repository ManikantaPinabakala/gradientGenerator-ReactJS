import styled from 'styled-components'

export const ListItem = styled.li`
  @media screen and (max-width: 768px) {
    width: 47%;
  }
`

export const DirectionButton = styled.button`
  width: 100%;
  background-color: #ffffff;
  border: none;
  border-radius: 5px;
  padding: 10px 30px;
  color: #334155;
  font-weight: bold;
  cursor: pointer;
  opacity: ${props => (props.active ? '1' : '0.5')};
`
