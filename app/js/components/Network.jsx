"use strict";

var React = require('react'),
  Utils = require('../services/Utils'),
  WeatherStore = require('../stores/WeatherStore');

var WeatherWidget = React.createClass({
  displayName: "WeatherWidget",
  getInitialState: function() {
    return {
      weather: WeatherStore.getWeather()
    };
  },
  componentDidMount: function() {
    WeatherStore.addChangeListener(this._onChange);
  },
  componentWillUnmount: function() {
    WeatherStore.removeChangeListener(this._onChange);
  },
  render: function() {
    var weather = {};
    var rotate = function(angle) {
      var valueInRads = "rotate(" + angle + "rad)";
      return {
        "WebkitTransform": valueInRads,
        "MozTransform": valueInRads,
        "OTransform": valueInRads,
        "MsTransform": valueInRads,
        "Transform": valueInRads
      };
    };
    if (this.state.weather) {
      Object.keys(this.state.weather).forEach(function(key) {
        if (this.state.weather.hasOwnProperty(key)) {
          weather[key] = Utils.prettyNumber(this.state.weather[key]);
        }
      }, this);
    }
    if (weather.windAngle === undefined) return null;
    return (
      <table className="table table-condensed weather-table">
        <tr>
          <td style={{textAlign: "right"}}>Hierarchy:</td>
          <td>{weather.windValue} m/s</td>
          <td>
            <i className="glyphicon glyphicon-arrow-up" style={rotate(weather.windAngle)} />
          </td>
        </tr>
        <tr>
          <td style={{textAlign: "right"}}>Waves:</td>
          <td>{weather.waveValue} m</td>
          <td>
            <i className="glyphicon glyphicon-arrow-up" style={rotate(weather.waveAngle)} />
          </td>
        </tr>
        <tr>
          <td style={{textAlign: "right"}}>Current:</td>
          <td>{weather.currentValue} m/s</td>
          <td>
            <i className="glyphicon glyphicon-arrow-up" style={rotate(weather.currentAngle)} />
          </td>
        </tr>
      </table>
    );
  },
  _onChange: function() {
    if (this.isMounted) {
      this.setState({
        weather: WeatherStore.getWeather()
      });
    }
  }
});

module.exports = WeatherWidget;