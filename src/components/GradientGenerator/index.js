import {Component} from 'react'

import {
  GradientContainer,
  Heading,
  FlexContainer,
  DirectionList,
  ColorInputField,
  GenerateButton,
} from './styledComponents'

import GradientDirectionItem from '../GradientDirectionItem'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]

class GradientGenerator extends Component {
  state = {
    activeDirectionValue: gradientDirectionsList[0].value,
    activeColor1: '#8ae323',
    activeColor2: '#014f7b',
    activeGradientValue: `to ${gradientDirectionsList[0].value}, #8ae323, #014f7b`,
  }

  onChangeActiveColor1 = event => {
    this.setState({activeColor1: event.target.value})
  }

  onChangeActiveColor2 = event => {
    this.setState({activeColor2: event.target.value})
  }

  onChangeDirection = value => {
    this.setState({activeDirectionValue: value})
  }

  onGenerate = () => {
    const {activeDirectionValue, activeColor1, activeColor2} = this.state

    this.setState({
      activeGradientValue: `to ${activeDirectionValue}, ${activeColor1}, ${activeColor2}`,
    })
  }

  render() {
    const {
      activeDirectionValue,
      activeColor1,
      activeColor2,
      activeGradientValue,
    } = this.state

    return (
      <GradientContainer
        activeGradientValue={activeGradientValue}
        data-testid="gradientGenerator"
      >
        <Heading>Generate a CSS Color Gradient</Heading>
        <Heading as="p">Choose Direction</Heading>
        <DirectionList>
          {gradientDirectionsList.map(eachGradientDirectionItem => (
            <GradientDirectionItem
              isActive={
                eachGradientDirectionItem.value === activeDirectionValue
              }
              key={eachGradientDirectionItem.directionId}
              gradientDirectionItem={eachGradientDirectionItem}
              changeDirection={this.onChangeDirection}
            />
          ))}
        </DirectionList>
        <Heading as="p">Pick the Colors</Heading>
        <FlexContainer>
          <FlexContainer colorContainer>
            <Heading as="p" colorIndicator>
              {activeColor1}
            </Heading>
            <ColorInputField
              type="color"
              value={activeColor1}
              onChange={this.onChangeActiveColor1}
            />
          </FlexContainer>
          <FlexContainer colorContainer>
            <Heading as="p" colorIndicator>
              {activeColor2}
            </Heading>
            <ColorInputField
              type="color"
              value={activeColor2}
              onChange={this.onChangeActiveColor2}
            />
          </FlexContainer>
        </FlexContainer>
        <GenerateButton onClick={this.onGenerate}>Generate</GenerateButton>
      </GradientContainer>
    )
  }
}

export default GradientGenerator
