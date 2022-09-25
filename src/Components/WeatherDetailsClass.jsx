import React, { Component } from "react";

export default class WeatherDetailsClass extends Component {
    
  render() {
    return (
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{this.props?.name}</p>
          </div>
          {/* <div className="temp">
              {this.props?.main ? <h1>{this.props?.main.temp.toFixed()}°F</h1> : null}
            </div> */}
          <div className="temp">
            {this.props?.main ? (
              <h1>{this.props.calcCelcius(this.props?.main.temp.toFixed())}°C</h1>
            ) : null}
          </div>
          <div className="description">
            {this.props?.weather ? <p>{this.props?.weather[0].main}</p> : null}
          </div>
        </div>

        {this.props?.name !== undefined && (
          <div className="bottom">
            <div className="feels">
              {this.props?.main ? (
                <p className="bold">{this.props?.main.feels_like.toFixed()}°F</p>
              ) : null}
              <p>Feels Like</p>
            </div>
            <div className="humidity">
              {this.props?.main ? (
                <p className="bold">{this.props?.main.humidity}%</p>
              ) : null}
              <p>Humidity</p>
            </div>
            <div className="wind">
              {this.props?.wind ? (
                <p className="bold">{this.props?.wind.speed.toFixed()} MPH</p>
              ) : null}
              <p>Wind Speed</p>
            </div>
          </div>
        )}
      </div>
    );
  }
}
