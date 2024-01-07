import { Component } from 'react'

class Alert extends Component {
  constructor(props) {
    super(props)
    this.color = null
    this.bgColor = null
  }

  getStyle = () => {
    return {
      color: this.color,
      backgroundColor: this.bgColor,
      borderWidth: '2px',
      borderStyle: 'solid',
      fontWeight: 'bolder',
      borderRadius: '7px',
      borderColor: this.color,
      textAlign: 'left',
      fontSize: '12px',
      margin: '10px 0',
      padding: '10px 28px',
      display: 'inline'
    }
  }

  render() {
    return (
        <p style={this.getStyle()}>{this.props.text}</p>
    )
  }
}

class InfoAlert extends Alert {
  constructor(props) {
    super(props)
    this.color = 'blue'
    this.bgColor = 'lightblue'
  }
}

class ErrorAlert extends Alert {
  constructor(props) {
    super(props)
    this.color = 'red'
    this.bgColor = 'lightred'
  }
}
export { InfoAlert, ErrorAlert }
