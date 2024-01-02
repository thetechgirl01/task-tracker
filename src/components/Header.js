import Proptypes from 'prop-types'
import Button from './Button'
i

const Header = () => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button color="green" text="Add" />
      
    </header>

  )

}

Header.defaultProps = {
    title: 'Task Tracker'
}

//CSS in JS
const headingStyles = {
    textAlign: 'center',
    color: 'blue'

  }
export default Header