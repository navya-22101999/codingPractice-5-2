// Write your code here
import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {
    isDark: true,
  }

  button = () => {
    this.setState(prevState => ({
      isDark: !prevState.isDark,
    }))
  }

  render() {
    const {isDark} = this.state
    const containerClassName = isDark ? 'bgDark' : 'bgLight'
    return (
      <div className="cont">
        <div className={containerClassName}>
          <h1>Click To Change Mode</h1>
          <br />
          <button type="button" onClick={this.button}>
            {isDark ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      </div>
    )
  }
}
export default LightDarkMode
