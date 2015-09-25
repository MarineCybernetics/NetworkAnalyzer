"use strict";

var React = require('react'),
    InlineSVG = require('react-inlinesvg'),
    WeatherWidget= require('./WeatherWidget'),
    VesselActionCreators = require('../actions/VesselActionCreators'),
    AppActionCreators = require('../actions/AppActionCreators'),
    YammerEmbedded = require('./YammerEmbedded'),
    EventsList = require('./EventsList');

var Router = require('react-router');
var RouteHandler = Router.RouteHandler;


var Thruster = React.createClass({
  displayName: 'Thruster',
  render: function() {
    var propeller = <path d="M 46.826,15.001 C 45.577,10.102 40.592,7.139 35.688,8.385 31.977,9.329 25.199,13.482 22.667,17.57 22.563,17.535 22.461,17.506 22.355,17.474 22.351,12.666 18.817,5.588 16.178,2.83 12.681,-0.826 6.882,-0.958 3.225,2.54 -0.43,6.037 -0.559,11.835 2.936,15.491 c 2.47,2.583 8.676,6.11 13.397,6.735 0.016,0.477 0.098,0.938 0.242,1.371 -3.763,2.932 -7.326,9.197 -8.131,12.697 -1.133,4.933 1.945,9.846 6.878,10.979 4.932,1.133 9.847,-1.943 10.979,-6.876 0.805,-3.502 0.332,-10.694 -1.776,-14.976 0.223,-0.225 0.42,-0.475 0.595,-0.741 4.319,2.037 11.584,2.351 15.087,1.458 4.905,-1.245 7.865,-6.234 6.619,-11.137 z M 21.207,26.588 c -2.455,0 -4.453,-1.996 -4.453,-4.451 0,-2.457 1.998,-4.452 4.453,-4.452 2.457,0 4.455,1.996 4.455,4.452 0,2.455 -1.998,4.451 -4.455,4.451 z" />
    var shaft = <path className="shaft" d="m 21.207,20.334 c -0.991,0 -1.801,0.807 -1.801,1.803 0,0.992 0.81,1.802 1.801,1.802 0.994,0 1.803,-0.81 1.803,-1.802 -0.002,-0.996 -0.809,-1.803 -1.803,-1.803 z" />
    return (<g transform={this.props.transform} className={this.props.id} onClick={this._onClick}>
        <g>
          {propeller}
          {shaft}
        </g>
      </g>);
  },
  _onClick: function() {
    AppActionCreators.navigateTo('thruster', {thrusterId: this.props.id});
  }
});

var Vessel = React.createClass({
  displayName: 'Vessel',
  getInitialState: function() {
    console.log("getting initial state");
    return null;
  },
  componentDidMount: function() {
    
  },
  componentWillUnmount: function() {
    
  },
  render: function() {
    return (
      <div>
        <RouteHandler />
        <div className="row">
          <div className="col-lg-2 col-md-8 col-sm-10">
            <div className="row">
              <WeatherWidget />
            </div>
          </div>
          <div className="col-lg-8 col-md-12" style={{"textAlign": "center"}}>
            <svg version="1.1" id="Capa_1" x="0px" y="0px" width="90%" height="800px" viewBox="0 0 32 20" style={{"enableBackground":"new 0 0 32 20"}}>
              <defs>
                <pattern id="img0" x="0" y="0" patternUnits="userSpaceOnUse" height="10" width="10" 
                          dangerouslySetInnerHTML={{__html: "<image x='0' y='0' height='10' width='10' xlink:href='img/squared_metal.png'></image>"}}>         
                </pattern>
              </defs>
              <g transform="matrix(0.32, 0, 0,  -0.52, 1, 18)">
                <polygon fill= "url(#img0)"
                         points="-4.79826,11.2036 -4.74045,11.2629 -4.79826,8.71392 -3.29519,7.23196 -2.31241,4.32732 1.73431,3.67526 3.17957,-0.0592784 79.8939,-0.0592784 81.1079,0.118557 82.1485,0.35567 83.4204,0.652062 84.4031,0.948454 85.2703,1.30412 86.0218,1.71907 86.7734,2.13402 87.5249,2.66753 88.2186,3.26031 88.6811,4.03093 88.9123,4.74227 88.9123,5.39433 88.6811,5.69072 88.2764,6.22423 87.6405,6.46134 87.1202,6.63918 86.8312,6.5799 86.4265,6.5799 85.964,6.5799 85.3859,6.52062 84.8078,6.46134 84.4609,6.40206 84.4609,6.69845 84.5766,6.93557 84.8656,7.35052 85.2703,7.52835 85.675,7.82474 86.3109,8.00258 86.9468,8.23969 87.4671,8.4768 88.1608,8.71392 88.8545,9.06959 89.2014,9.78093 89.2014,10.433 89.2592,10.9665 89.6061,15.9459 88.9702,17.0129 80.183,20.2732 77.6393,22.4072 78.2752,24.3634 78.6799,24.4227 78.6799,24.6598 76.5987,25.1933 73.0723,25.2526 69.9505,27.8608 68.5631,27.9201 68.2162,28.6314 71.3958,28.6907 71.3958,28.9871 68.0428,28.8686 67.3491,30.1727 68.274,30.232 69.4881,30.3505 69.4881,30.5876 69.0834,30.5876 69.1412,30.884 69.7771,30.9433 69.7771,31.1211 67.8694,31.1211 67.8694,30.884 68.6787,30.8247 68.6787,30.6469 67.2913,30.6469 66.3663,32.1289 67.5803,32.0103 67.8116,32.3067 66.4819,32.7216 66.5975,32.8402 66.5975,33.8479 66.3663,34.0258 66.1351,34.1443 65.6148,34.1443 65.4413,34.0258 65.3257,33.7294 65.2679,33.2552 65.0945,33.6701 65.0367,34.1443 64.921,34.4407 65.4413,34.5593 65.3257,34.6778 64.921,34.6778 64.8632,34.9149 65.3835,35.0335 65.3835,35.1521 64.8632,35.2113 64.5742,35.4485 64.1695,35.5077 64.4008,35.1521 64.8632,32.8402 64.7476,32.7216 64.9789,32.4253 65.2101,31.3582 65.0367,31.2397 65.0367,31.0026 65.4413,30.7655 65.6148,30.4098 65.557,29.8763 64.2851,31.1211 64.0539,31.0619 63.8226,30.884 63.7648,30.7062 63.418,30.8247 62.9555,30.5284 65.3257,27.9794 65.3835,25.3119 61.6259,25.2526 62.6664,22.1701 63.2445,21.2809 61.2212,14.6418 60.9321,13.8711 60.9899,13.2784 60.7009,12.2113 60.4118,11.7964 12.8917,11.7964 11.0418,11.2629 -4.79826,11.2036  " 
                         onClick={this._onClick}/>
              </g>
              <Thruster id="thr1" transform="matrix(0.064,0,0,0.064,23.534739,14.734397)" />
              <Thruster id="thr2" transform="matrix(0.064,0,0,0.064,20.4569357,14.734397)" />
              <Thruster id="thr3" transform="matrix(0.064,0,0,0.064,15.699688,18.132291)" />
              <Thruster id="thr4" transform="matrix(0.064,0,0,0.064,3.335426,18.077309)" />
              <Thruster id="thr5" transform="matrix(0.064,0,0,0.064,0.036457,18.077309)" />
            </svg>
          </div>
          <div className="col-lg-2 col-md-8 col-sm-10">
              <YammerEmbedded />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <EventsList />
          </div>
        </div>
      </div>
    );
  },
  _onClick: function() {
    alert('Vessel info');
  }
});

module.exports = Vessel;