import React, { Component  } from 'react';
import InfoATM from './components/InfoATM';
import SearchBar from './components/SearchBar';
import InfoDBD from './components/InfoDBD';
import Logocomp from './components/LogoComp';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { IWeatherData } from './model/WeatherData';

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
      this.setState({CityOfName});
      this.fetchInfo();
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
        </div>
      </div>
    )
  }
}