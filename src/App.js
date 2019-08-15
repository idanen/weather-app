import React from 'react';
import Weather from './components/weather';
import Titles from './components/titles';
import Form from './components/form';
import './App.css';

const Apikey = 'http://api.openweathermap.org/data/2.5/box/city?bbox=12,32,15,37,10';

// app-component



class App extends React.Component {
  getWeather = async () => {
    const api_call = await fetch `http://api.openweathermap.org/data/2.5/box/city?bbox=12,32,15,37,10`;
    const response = await api_call.json();
    console.log(response);
    }
  render(){
    return (
      <div className="App">
        <Titles/>
        <Form loadWeather={this.getWeather}/>
        <Weather/>
      </div>
    );
  }
  
}

export default App;
