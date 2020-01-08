import React, { } from 'react';
import { IWeatherData } from '../model/WeatherData';



class InfoATM extends React.Component<{ condition: IWeatherData }> {

    render() {
        return (
            <div className="container Border-Custom mb-3">
                <div className="row">
                    <div className="col-6 offset-3 Border-Custom mb-2">
                        <h1>{this.props.condition.city_info.name}</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6 offset-3">
                        <h1>{this.props.condition.current_condition.date}</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6 offset-3">
                        <h1>{this.props.condition.current_condition.tmp}°</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6 offset-3">
                        <img className="iconBig" alt="Icone des condition climatique actuelle" src={this.props.condition.current_condition.icon_big}></img>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6 offset-3 mb-3">
                        <h1>{this.props.condition.current_condition.condition}</h1>
                    </div>
                </div>
            </div>
        )
    }
}

export default InfoATM;