import styled from 'styled-components'

export const GradientContainer = styled.div`
  min-height: 100vh;
  background-image: linear-gradient(${props => props.activeGradientValue});
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-top: 80px;
`

export const Heading = styled.h1`
  text-align: center;
  color: #ffffff;
  font-size: ${props => (props.as === 'p' ? '16px' : '24px')};
  margin-top: ${props => (props.colorIndicator ? '0' : '16px')};
`

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: ${props => (props.colorContainer ? 'column' : 'row')};
  justify-content: center;
  align-items: center;
  margin: 10px;
  gap: 10px;
`

export const DirectionList = styled.ul`
  list-style: none;
  padding-left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 10px;
  gap: 10px;
`

export const ColorInputField = styled.input`
  border: 1px solid #1e293b;
  padding: 0;
  margin: 0;
  width: 100px;
  height: 40px;
`

export const GenerateButton = styled.button`
  border: none;
  border-radius: 5px;
  background-color: #00c9b7;
  color: #1e293b;
  font-weight: bold;
  padding: 10px 15px;
  cursor: pointer;
`
