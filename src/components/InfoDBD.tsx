import React, { } from 'react';
import Card from 'react-bootstrap/Card';
import { IWeatherData, ForecastDayKey } from '../model/WeatherData';

interface InfoDBDState {
}

class InfoDBD extends React.Component<{ condition: IWeatherData }> {

      state: InfoDBDState = {
      };

containerCardFunc(){
    let containerCard:any = [];

    for (let i: number = 1; i <= 4; i++) {
        const dayKey: ForecastDayKey = ("fcst_day_" + i as ForecastDayKey);
        containerCard.push(
            <Card className="card">
                <Card.Body>
                    <Card.Title><h3 className="Border-Custom">{this.props.condition[dayKey].day_short}</h3></Card.Title>
                    <h4>{this.props.condition[dayKey].tmin}° - {this.props.condition[dayKey].tmax}°</h4>
                    <img width="45px" alt="Icone des condition climatique actuelle" src={this.props.condition[dayKey].icon}></img>
                    <h4>{this.props.condition[dayKey].condition}</h4>
                </Card.Body>
            </Card>)
    }

    return containerCard;
}
    render(){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-10 offset-1 mt-5 d-flex justify-content-between">
                        {this.containerCardFunc()}
                    </div>
                </div>
            </div>
        );
    }
}

export default InfoDBD;