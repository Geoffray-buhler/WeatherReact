import React, { ChangeEvent, FormEvent } from 'react';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import { IWeatherData } from '../model/WeatherData';

interface SearchState {
    CityOfName: string;
}

class SearchBar extends React.Component<{ onSearch: any, condition: IWeatherData }> {

  state: SearchState = {
      CityOfName: '',
  };

  handleInputChange(ev: FormEvent<HTMLInputElement>) {
    this.setState({ CityOfName: (ev.target as HTMLInputElement).value })
  }

  handleSearch = (ev: any) => {
    const cityName: string = this.state.CityOfName;

    this.props.onSearch(cityName);
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-6 offset-3 d-flex">
            <FormControl type="text" placeholder="Votre ville" value={this.state.CityOfName} onChange={(ev: any) => this.handleInputChange(ev)} className="mr-sm-2 bg-transparent" />
            <Button onClick={this.handleSearch} variant="outline-info">OK</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBar;