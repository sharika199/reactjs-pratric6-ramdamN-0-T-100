// Write your code here
import {Component} from 'react'

import './index.css'

class randomNumberGenerator extends Component {
  state = {count: 0}

  randomN = () => Math.ceil(Math.random() * 100)

  onRandom = () => {
    const randomNumber = this.randomN()
    this.setState({count: randomNumber})
  }

  render() {
    const {count} = this.state

    return (
      <div className="bg1">
        <h1>Random Number</h1>
        <p>Generate a random number in the range of 0 to 100</p>
        <button className="btn" type="button" onClick={this.onRandom}>
          Generate
        </button>
        <p className="pp">{count}</p>
      </div>
    )
  }
}

export default randomNumberGenerator
