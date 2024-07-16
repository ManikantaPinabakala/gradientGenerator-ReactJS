import {ListItem, DirectionButton} from './styledComponents'

const GradientDirectionItem = props => {
  const {gradientDirectionItem, isActive, changeDirection} = props
  const {value, displayText} = gradientDirectionItem

  const onClickDirectionItem = () => {
    changeDirection(value)
  }

  return (
    <ListItem>
      <DirectionButton
        type="button"
        active={isActive}
        onClick={onClickDirectionItem}
      >
        {displayText}
      </DirectionButton>
    </ListItem>
  )
}

export default GradientDirectionItem
