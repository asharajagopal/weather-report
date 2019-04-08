import React, { Component } from 'react';
import './App.css';
import Titles from './components/Titles';
import WeatherForms from './components/WeatherForms';
import Weather from './components/Weather';

const API_KEY = "922e61301dc91fce305e6405cc0b0917";

class App extends Component {
  state = {
    temperature : "",
    city : "",
    country : "",
    humidity : "",
    description : "",
   error : ""
    
  }
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.city.value;
    const country = e.target.country.value;
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`)
    const data = await api_call.json();
    if(city && country) {
     // console.log(data);
      this.setState({
        temperature : data.main.temp,
        city : data.name,
        country : data.sys.country,
        humidity : data.main.humidity,
        description : data.weather[0].description,
        error : ""
      })
    }else {
      this.setState({
        temperature : "",
        city : "",
        country : "",
        humidity : "",
        description : "",
        error : "Please enter the values"
      })
    }

  }
  render() {
    return (
      <div>
      <div className="wrapper">
        <div className="main">
          <div className="container">
            <div className="row">
            <div className="col-md-5 title-container">
              <Titles />
            </div>
            <div className="col-md-7 form-container">
            <WeatherForms getWeather = {this.getWeather}/>
            <Weather 
              temperature ={this.state.temperature}
              city  ={this.state.city}
              country  ={this.state.country}
              humidity  ={this.state.humidity}
              description  ={this.state.description}
              error  ={this.state.error}
            />
            </div>
            </div>
          </div>
        </div>
      </div>
      
        
        
      </div>
    );
  }
};

export default App;
