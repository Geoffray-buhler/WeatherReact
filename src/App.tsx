import React, { Component  } from 'react';
import InfoATM from './components/InfoATM';
import SearchBar from './components/SearchBar';
import InfoDBD from './components/InfoDBD';
import Logocomp from './components/LogoComp';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { IWeatherData } from './model/WeatherData';
import Particles from 'react-particles-js';

interface AppState {
    CityOfName: string;
    weatherData: IWeatherData | null;
    cityName:string | null;
}

//methode avec une class
export default class App extends React.Component<{}, AppState> {

  constructor(props: any) {
    super(props);

    //@NOTE: Used only in debug mode !!
    this.fetchInfo();
  }

  state: AppState = {
    CityOfName: 'Toulon',
    weatherData: null,
    cityName: ''
  };

  handleSearch = (CityOfName: string) => {
      this.setState({CityOfName}, () => {
        this.fetchInfo();
      });
  }

  fetchInfo() {
      fetch(`https://www.prevision-meteo.ch/services/json/${this.state.CityOfName}`)
        .then(response => response.json())
        .then((data) => this.updateVariable(data))
  }

  updateVariable(data:any | string) {
      
      this.setState({ weatherData: data });//`${currentCondition} ${currentTmp} ${currentIcon} ${currentCity}`);
  }

  render() {
    if (this.state.weatherData == null) {
        return (          
        <div className="App">
          <div className="App-body">
            <Logocomp></Logocomp>
          </div>
        </div>);
    }

    return (
      <div className="App">
        <div className="App-body">
          <InfoATM condition={this.state.weatherData}></InfoATM>
          <SearchBar condition={this.state.weatherData} onSearch={this.handleSearch}></SearchBar>
          <InfoDBD condition={this.state.weatherData}></InfoDBD>
          <Logocomp></Logocomp>
          <Particles className="Particles"
            params={{
              "particles": {
                  "number": {
                      "value": 1500,
                      "density": {
                          "enable": false
                      }
                  },
                  "size": {
                      "value": 2,
                      "random": true,
                      "anim": {
                          "speed": 4,
                          "size_min": 0.3
                      }
                  },
                  "line_linked": {
                      "enable": false
                  },
                  "move": {
                      "random": true,
                      "speed": 1,
                      "direction": "top",
                      "out_mode": "out"
                  }
              },
              "interactivity": {
                  "events": {
                      "onhover": {
                          "enable": false,
                          "mode": "bubble"
                      },
                      "onclick": {
                          "enable": false,
                          "mode": "repulse"
                      }
                  },
                  "modes": {
                      "bubble": {
                          "distance": 2500,
                          "duration": 2,
                          "size": 0,
                          "opacity": 0
                      },
                      "repulse": {
                          "distance": 400,
                          "duration": 4
                      }
                  }
              }
          }} />
        </div>
      </div>
    )
  }
}