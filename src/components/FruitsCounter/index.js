// Write your code here
import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {mangoes: 0, bananas: 0}
  onIncreaseMango = () => {
    this.setState(prevState => ({mangoes: prevState.mangoes + 1}))
  }
  onIncreaseBananas = () => {
    this.setState(prevState => ({bananas: prevState.mangoes + 1}))
  }
  render() {
    const {mangoes, bananas} = this.state
    return (
      <div className="fruits-container">
        <div className="fruit-card">
          <h1 className="heading">
            Bob ate <span className="special">{mangoes}</span> mangoes{' '}
            <span className="special">{bananas}</span> bananas
          </h1>
          <div className="card">
            <div className="inner-card">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png "
                className="image"
                alt="mango"
              />
              <button className="fruit-btn" onClick={this.onIncreaseMango}>
                Eat Mango
              </button>
            </div>
            <div className="inner-card">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png "
                className="image"
                alt="banana"
              />
              <button className="fruit-btn" onClick={this.onIncreaseBananas}>
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
