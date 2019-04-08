import React, { Component } from 'react'

export class Weather extends Component {
  render() {
    return (
      <div className="weather__info">
        {this.props.city && this.props.country && <p>Temprature : {this.props.temperature}</p>}
        {this.props.city && this.props.country &&  <p>City : {this.props.city}</p>}
        {this.props.city && this.props.country && <p>Country : {this.props.country}</p>}
        {this.props.city && this.props.country &&  <p>Humidity : {this.props.humidity}</p>}
        {this.props.city && this.props.country && <p>Desecription : {this.props.description}</p>}
         {this.props.error && <p className="weather__error"> {this.props.error}</p>} 
      </div>
    )
  }
}

export default Weather
