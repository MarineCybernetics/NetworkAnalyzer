"use strict";

var React = require('react'),
    AppActionCreators = require('../actions/AppActionCreators');

var Chair = React.createClass({
  displayName: 'Chair',
  render: function() {
    return (<g transform={this.props.transform} className={this.props.id} onClick={this._onClick} style={{"cursor":"pointer"}}>

<defs id="defs2229">
    <radialGradient  id="radialGradient3359" cx="90.035286" cy="39.33321" fx="90.035286" fy="39.33321" r="4.0634923" gradientTransform="matrix(2.37511, 1.64375, -1.78813, 2.58372, -54.5371, -211.48)" gradientUnits="userSpaceOnUse">
      <stop id="stop3363" offset="0" style={{"stopColor":" rgb(255, 255, 255)","stopOpacity":" 1"}}/>
      <stop id="stop3365" offset="1" style={{"stopColor":" blue","stopOpacity":" 1"}}/>
    </radialGradient>    

    <radialGradient  id="radialGradient3371" gradientUnits="userSpaceOnUse" gradientTransform="matrix(2.37511, 1.64375, -1.78813, 2.58372, -54.5371, -211.48)" cx="90.035286" cy="39.33321" fx="90.035286" fy="39.33321" r="4.0634923">
      <stop style={{"stopColor":" rgb(255, 255, 255)","stopOpacity":" 1"}} offset="0" id="stop4874"/>
      <stop style={{"stopColor":" rgb(0, 153, 0)","stopOpacity":" 1"}} offset="1" id="stop4876"/>
    </radialGradient>

    <radialGradient  id="radialGradient3378" gradientUnits="userSpaceOnUse" gradientTransform="matrix(2.37511, 1.64375, -1.78813, 2.58372, -54.5371, -211.48)" cx="90.035286" cy="39.33321" fx="90.035286" fy="39.33321" r="4.0634923">
      <stop style={{"stopColor":" rgb(255, 255, 255)","stopOpacity":" 1"}} offset="0" id="stop4862"/>
      <stop style={{"stopColor":" yellow","stopOpacity":" 1"}} offset="1" id="stop4864"/>
    </radialGradient>

    <radialGradient   id="radialGradient3385" gradientUnits="userSpaceOnUse" gradientTransform="matrix(2.37511, 1.64375, -1.78813, 2.58372, -54.5371, -211.48)" cx="90.035286" cy="39.33321" fx="90.035286" fy="39.33321" r="4.0634923">
      <stop style={{"stopColor":" rgb(255, 255, 255)","stopOpacity":" 1"}} offset="0" id="stop4868"/>
      <stop style={{"stopColor":" red","stopOpacity":" 1"}} offset="1" id="stop4870"/>
    </radialGradient>

    <linearGradient   id="linearGradient3407" x1="61.744419" y1="40.639935" x2="92.175781" y2="93.348602" gradientUnits="userSpaceOnUse">
      <stop id="stop3411" offset="0" style={{"stopColor":" rgb(255, 255, 255)","stopOpacity":" 1"}}/>
      <stop id="stop3413" offset="1" style={{"stopColor":" rgb(226, 226, 226)","stopOpacity":" 1"}}/>
    </linearGradient>

    <radialGradient  id="radialGradient3439" cx="90.20562" cy="37.403847" fx="90.20562" fy="37.403847" r="6.6905818" gradientTransform="matrix(1.73781, -0.105719, 0.0970447, 1.59522, -70.1843, -12.9263)" gradientUnits="userSpaceOnUse">
      <stop style={{"stopColor":" rgb(0, 0, 0)","stopOpacity":" 1"}} offset="0" id="stop3435"/>
      <stop style={{"stopColor":" rgb(0, 0, 0)","stopOpacity":" 0"}} offset="1" id="stop3437"/>
    </radialGradient>

    <linearGradient  id="linearGradient3447" x1="90.20562" y1="37.204803" x2="99.978897" y2="46.956234" gradientUnits="userSpaceOnUse">
      <stop id="stop3429" offset="0" style={{"stopColor":" rgb(134, 134, 134)","stopOpacity":" 1"}}/>
      <stop id="stop3431" offset="1" style={{"stopColor":" rgb(255, 255, 255)","stopOpacity":" 0"}}/>
    </linearGradient>

    <linearGradient  id="linearGradient3477" gradientUnits="userSpaceOnUse" gradientTransform="translate(-130.032, -4.40212)" x1="87.703705" y1="109.68118" x2="66.370361" y2="58.210278">
      <stop style={{"stopColor":" rgb(134, 134, 134)","stopOpacity":" 0.378151"}} offset="0" id="stop3282"/>
      <stop style={{"stopColor":" rgb(255, 255, 255)","stopOpacity":" 0"}} offset="1" id="stop3284"/>
    </linearGradient>

    <radialGradient  id="radialGradient3479" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1, 0, 0, 1.11302, 0, -4.5926)" cx="92.515572" cy="38.295483" fx="92.515572" fy="38.295483" r="4.4941797">
      <stop style={{"stopColor":" rgb(255, 255, 255)","stopOpacity":" 1"}} offset="0" id="stop3239"/>
      <stop style={{"stopColor":" rgb(0, 177, 255)","stopOpacity":" 1"}} offset="1" id="stop3241"/>
    </radialGradient>

    <linearGradient  id="linearGradient3481" gradientUnits="userSpaceOnUse" x1="100.82831" y1="50.766823" x2="89.799942" y2="32.086132">
      <stop style={{"stopColor":" rgb(79, 79, 79)","stopOpacity":" 1"}} offset="0" id="stop3249"/>
      <stop style={{"stopColor":" rgb(79, 79, 79)","stopOpacity":" 0"}} offset="1" id="stop3251"/>
    </linearGradient>

    <radialGradient  id="radialGradient3483" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1, 0, 0, 1.11302, 0, -4.5926)" cx="92.515572" cy="38.295483" fx="92.515572" fy="38.295483" r="4.4941797">
      <stop id="stop3263" offset="0" style={{"stopColor":" rgb(255, 255, 255)","stopOpacity":" 1"}}/>
      <stop id="stop3265" offset="1" style={{"stopColor":" rgb(255, 5, 0)","stopOpacity":" 1"}}/>
    </radialGradient>

    <linearGradient  id="linearGradient3485" gradientUnits="userSpaceOnUse" x1="100.82831" y1="50.766823" x2="89.799942" y2="32.086132">
      <stop style={{"stopColor":" rgb(79, 79, 79)","stopOpacity":" 1"}} offset="0" id="stop3249"/>
      <stop style={{"stopColor":" rgb(79, 79, 79)","stopOpacity":" 0"}} offset="1" id="stop3251"/>
    </linearGradient>

    <radialGradient  id="radialGradient3487" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1, 0, 0, 1.11302, 0, -4.5926)" cx="92.515572" cy="38.295483" fx="92.515572" fy="38.295483" r="4.4941797">
      <stop style={{"stopColor":" rgb(255, 255, 255)","stopOpacity":" 1"}} offset="0" id="stop3275"/>
      <stop style={{"stopColor":" rgb(255, 232, 0)","stopOpacity":" 1"}} offset="1" id="stop3277"/>
    </radialGradient>

    <linearGradient  id="linearGradient3489" gradientUnits="userSpaceOnUse" x1="100.82831" y1="50.766823" x2="89.799942" y2="32.086132">
      <stop style={{"stopColor":" rgb(79, 79, 79)","stopOpacity":" 1"}} offset="0" id="stop3249"/>
      <stop style={{"stopColor":" rgb(79, 79, 79)","stopOpacity":" 0"}} offset="1" id="stop3251"/>
    </linearGradient>

    <radialGradient  id="radialGradient3491" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1, 0, 0, 1.11302, 0, -4.5926)" cx="92.515572" cy="38.295483" fx="92.515572" fy="38.295483" r="4.4941797">
      <stop id="stop3287" offset="0" style={{"stopColor":" rgb(255, 255, 255)","stopOpacity":" 1"}}/>
      <stop id="stop3289" offset="1" style={{"stopColor":" rgb(1, 255, 0)","stopOpacity":" 1"}}/>
    </radialGradient>

    <linearGradient  id="linearGradient3493" gradientUnits="userSpaceOnUse" x1="100.82831" y1="50.766823" x2="89.799942" y2="32.086132">
      <stop style={{"stopColor":" rgb(79, 79, 79)","stopOpacity":" 1"}} offset="0" id="stop3249"/>
      <stop style={{"stopColor":" rgb(79, 79, 79)","stopOpacity":" 0"}} offset="1" id="stop3251"/>
    </linearGradient>

    <radialGradient  id="radialGradient3495" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1, 1.42009e-07, -1.58609e-07, 1.16693, 1.39667e-05, -14.6403)" cx="32.846561" cy="87.703705" fx="32.846561" fy="87.703705" r="12.171351">
      <stop style={{"stopColor":" rgb(79, 79, 79)","stopOpacity":" 1"}} offset="0" id="stop3304"/>
      <stop style={{"stopColor":" rgb(79, 79, 79)","stopOpacity":" 0"}} offset="1" id="stop3306"/>
    </radialGradient>

    <linearGradient  id="linearGradient3497" gradientUnits="userSpaceOnUse" x1="39.916809" y1="115.46555" x2="45.017913" y2="87.703705">
      <stop style={{"stopColor":" rgb(79, 79, 79)","stopOpacity":" 1"}} offset="0" id="stop3304"/>
      <stop style={{"stopColor":" rgb(79, 79, 79)","stopOpacity":" 0"}} offset="1" id="stop3306"/>
    </linearGradient>

    <radialGradient  id="radialGradient3499" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1, 1.42009e-07, -1.58609e-07, 1.16693, 1.39667e-05, -14.6403)" cx="32.846561" cy="87.703705" fx="32.846561" fy="87.703705" r="12.171351">
      <stop style={{"stopColor":" rgb(157, 128, 255)","stopOpacity":" 1"}} offset="0" id="stop3296"/>
      <stop style={{"stopColor":" rgb(144, 63, 255)","stopOpacity":" 1"}} offset="1" id="stop3298"/>
    </radialGradient>

    <linearGradient  id="linearGradient3501" gradientUnits="userSpaceOnUse" x1="39.916809" y1="115.46555" x2="45.017913" y2="87.703705">
      <stop style={{"stopColor":" rgb(79, 79, 79)","stopOpacity":" 1"}} offset="0" id="stop3304"/>
      <stop style={{"stopColor":" rgb(79, 79, 79)","stopOpacity":" 0"}} offset="1" id="stop3306"/>
    </linearGradient>

    <linearGradient  id="linearGradient3505" gradientUnits="userSpaceOnUse" x1="90.20562" y1="37.204803" x2="99.978897" y2="46.956234">
      <stop id="stop3429" offset="0" style={{"stopColor":" rgb(134, 134, 134)","stopOpacity":" 1"}}/>
      <stop id="stop3431" offset="1" style={{"stopColor":" rgb(255, 255, 255)","stopOpacity":" 0"}}/>
    </linearGradient>

    <radialGradient   id="radialGradient3507" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1.73781, -0.105719, 0.0970447, 1.59522, -70.1843, -12.9263)" cx="90.20562" cy="37.403847" fx="90.20562" fy="37.403847" r="6.6905818">
      <stop style={{"stopColor":" rgb(0, 0, 0)","stopOpacity":" 1"}} offset="0" id="stop3435"/>
      <stop style={{"stopColor":" rgb(0, 0, 0)","stopOpacity":" 0"}} offset="1" id="stop3437"/>
    </radialGradient>

    <linearGradient  id="linearGradient3511" gradientUnits="userSpaceOnUse" x1="90.20562" y1="37.204803" x2="99.978897" y2="46.956234">
      <stop id="stop3429" offset="0" style={{"stopColor":" rgb(134, 134, 134)","stopOpacity":" 1"}}/>
      <stop id="stop3431" offset="1" style={{"stopColor":" rgb(255, 255, 255)","stopOpacity":" 0"}}/>
    </linearGradient>

    <radialGradient   id="radialGradient3513" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1.73781, -0.105719, 0.0970447, 1.59522, -70.1843, -12.9263)" cx="90.20562" cy="37.403847" fx="90.20562" fy="37.403847" r="6.6905818">
      <stop style={{"stopColor":" rgb(0, 0, 0)","stopOpacity":" 1"}} offset="0" id="stop3435"/>
      <stop style={{"stopColor":" rgb(0, 0, 0)","stopOpacity":" 0"}} offset="1" id="stop3437"/>
    </radialGradient>

    <linearGradient  id="linearGradient3517" gradientUnits="userSpaceOnUse" x1="90.20562" y1="37.204803" x2="99.978897" y2="46.956234">
      <stop id="stop3429" offset="0" style={{"stopColor":" rgb(134, 134, 134)","stopOpacity":" 1"}}/>
      <stop id="stop3431" offset="1" style={{"stopColor":" rgb(255, 255, 255)","stopOpacity":" 0"}}/>
    </linearGradient>

    <radialGradient   id="radialGradient3519" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1.73781, -0.105719, 0.0970447, 1.59522, -70.1843, -12.9263)" cx="90.20562" cy="37.403847" fx="90.20562" fy="37.403847" r="6.6905818">
      <stop style={{"stopColor":" rgb(0, 0, 0)","stopOpacity":" 1"}} offset="0" id="stop3435"/>
      <stop style={{"stopColor":" rgb(0, 0, 0)","stopOpacity":" 0"}} offset="1" id="stop3437"/>
    </radialGradient>

    <linearGradient   id="linearGradient3525" gradientUnits="userSpaceOnUse" x1="39.916809" y1="115.46555" x2="45.017913" y2="87.703705">
      <stop style={{"stopColor":" rgb(79, 79, 79)","stopOpacity":" 1"}} offset="0" id="stop3304"/>
      <stop style={{"stopColor":" rgb(79, 79, 79)","stopOpacity":" 0"}} offset="1" id="stop3306"/>
    </linearGradient>


    <linearGradient   id="linearGradient3656" gradientUnits="userSpaceOnUse" x1="90.20562" y1="37.204803" x2="99.978897" y2="46.956234">
      <stop id="stop3429" offset="0" style={{"stopColor":" rgb(134, 134, 134)","stopOpacity":" 1"}}/>
      <stop id="stop3431" offset="1" style={{"stopColor":" rgb(255, 255, 255)","stopOpacity":" 0"}}/>
    </linearGradient>

    <radialGradient   id="radialGradient3658" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1.73781, -0.105719, 0.0970447, 1.59522, -70.1843, -12.9263)" cx="90.20562" cy="37.403847" fx="90.20562" fy="37.403847" r="6.6905818">
      <stop style={{"stopColor":" rgb(0, 0, 0)","stopOpacity":" 1"}} offset="0" id="stop3435"/>
      <stop style={{"stopColor":" rgb(0, 0, 0)","stopOpacity":" 0"}} offset="1" id="stop3437"/>
    </radialGradient>

    <linearGradient   id="linearGradient3660" gradientUnits="userSpaceOnUse" x1="88.938957" y1="33.670578" x2="89.690857" y2="36.18634">
      <stop style={{"stopColor":" rgb(0, 0, 0)","stopOpacity":" 1"}} offset="0" id="stop3601"/>
      <stop style={{"stopColor":" rgb(0, 0, 0)","stopOpacity":" 0"}} offset="1" id="stop3603"/>
    </linearGradient>

    <linearGradient   id="linearGradient3662" gradientUnits="userSpaceOnUse" x1="89.4543" y1="36.079742" x2="95.942055" y2="45.317894">
      <stop style={{"stopColor":" rgb(0, 0, 0)","stopOpacity":" 1"}} offset="0" id="stop3593"/>
      <stop style={{"stopColor":" rgb(0, 0, 0)","stopOpacity":" 0"}} offset="1" id="stop3595"/>
    </linearGradient>

    <linearGradient   id="linearGradient3664" gradientUnits="userSpaceOnUse" x1="39.916809" y1="115.46555" x2="45.017913" y2="87.703705">
      <stop style={{"stopColor":" rgb(79, 79, 79)","stopOpacity":" 1"}} offset="0" id="stop3304"/>
      <stop style={{"stopColor":" rgb(79, 79, 79)","stopOpacity":" 0"}} offset="1" id="stop3306"/>
    </linearGradient>

    <radialGradient   id="radialGradient3666" gradientUnits="userSpaceOnUse" gradientTransform="matrix(2.52457, 1.49305, -1.09715, 2.61596, 17.1946, -187.094)" cx="41.676304" cy="84.284256" fx="41.676304" fy="84.284256" r="12.171351">
      <stop style={{"stopColor":" rgb(255, 255, 255)","stopOpacity":" 0.647059"}} offset="0" id="stop3550"/>
      <stop style={{"stopColor":" rgb(255, 255, 255)","stopOpacity":" 0"}} offset="1" id="stop3552"/>
    </radialGradient>

    <linearGradient   id="linearGradient3694" gradientUnits="userSpaceOnUse" x1="90.20562" y1="37.204803" x2="99.978897" y2="46.956234">
      <stop id="stop3429" offset="0" style={{"stopColor":" rgb(134, 134, 134)","stopOpacity":" 1"}}/>
      <stop id="stop3431" offset="1" style={{"stopColor":" rgb(255, 255, 255)","stopOpacity":" 0"}}/>
    </linearGradient>

    <radialGradient   id="radialGradient3696" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1.73781, -0.105719, 0.0970447, 1.59522, -70.1843, -12.9263)" cx="90.20562" cy="37.403847" fx="90.20562" fy="37.403847" r="6.6905818">
      <stop style={{"stopColor":" rgb(0, 0, 0)","stopOpacity":" 1"}} offset="0" id="stop3435"/>
      <stop style={{"stopColor":" rgb(0, 0, 0)","stopOpacity":" 0"}} offset="1" id="stop3437"/>
    </radialGradient>

    <linearGradient   id="linearGradient3698" gradientUnits="userSpaceOnUse" x1="88.938957" y1="33.670578" x2="89.690857" y2="36.18634">
      <stop style={{"stopColor":" rgb(0, 0, 0)","stopOpacity":" 1"}} offset="0" id="stop3601"/>
      <stop style={{"stopColor":" rgb(0, 0, 0)","stopOpacity":" 0"}} offset="1" id="stop3603"/>
    </linearGradient>

    <linearGradient   id="linearGradient3700" gradientUnits="userSpaceOnUse" x1="89.4543" y1="36.079742" x2="95.942055" y2="45.317894">
      <stop style={{"stopColor":" rgb(0, 0, 0)","stopOpacity":" 1"}} offset="0" id="stop3593"/>
      <stop style={{"stopColor":" rgb(0, 0, 0)","stopOpacity":" 0"}} offset="1" id="stop3595"/>
    </linearGradient>

    <linearGradient   id="linearGradient3702" gradientUnits="userSpaceOnUse" x1="39.916809" y1="115.46555" x2="45.017913" y2="87.703705">
      <stop style={{"stopColor":" rgb(79, 79, 79)","stopOpacity":" 1"}} offset="0" id="stop3304"/>
      <stop style={{"stopColor":" rgb(79, 79, 79)","stopOpacity":" 0"}} offset="1" id="stop3306"/>
    </linearGradient>

    <radialGradient   id="radialGradient3704" gradientUnits="userSpaceOnUse" gradientTransform="matrix(2.52457, 1.49305, -1.09715, 2.61596, 17.1946, -187.094)" cx="41.676304" cy="84.284256" fx="41.676304" fy="84.284256" r="12.171351">
      <stop style={{"stopColor":" rgb(255, 255, 255)","stopOpacity":" 0.647059"}} offset="0" id="stop3550"/>
      <stop style={{"stopColor":" rgb(255, 255, 255)","stopOpacity":" 0"}} offset="1" id="stop3552"/>
    </radialGradient>

    <linearGradient   id="linearGradient3706" gradientUnits="userSpaceOnUse" x1="90.20562" y1="37.204803" x2="99.978897" y2="46.956234">
      <stop id="stop3429" offset="0" style={{"stopColor":" rgb(134, 134, 134)","stopOpacity":" 1"}}/>
      <stop id="stop3431" offset="1" style={{"stopColor":" rgb(255, 255, 255)","stopOpacity":" 0"}}/>
    </linearGradient>

    <radialGradient   id="radialGradient3708" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1.73781, -0.105719, 0.0970447, 1.59522, -70.1843, -12.9263)" cx="90.20562" cy="37.403847" fx="90.20562" fy="37.403847" r="6.6905818">
      <stop style={{"stopColor":" rgb(0, 0, 0)","stopOpacity":" 1"}} offset="0" id="stop3435"/>
      <stop style={{"stopColor":" rgb(0, 0, 0)","stopOpacity":" 0"}} offset="1" id="stop3437"/>
    </radialGradient>

    <linearGradient   id="linearGradient3710" gradientUnits="userSpaceOnUse" x1="88.938957" y1="33.670578" x2="89.690857" y2="36.18634">
      <stop style={{"stopColor":" rgb(0, 0, 0)","stopOpacity":" 1"}} offset="0" id="stop3601"/>
      <stop style={{"stopColor":" rgb(0, 0, 0)","stopOpacity":" 0"}} offset="1" id="stop3603"/>
    </linearGradient>

    <linearGradient   id="linearGradient3712" gradientUnits="userSpaceOnUse" x1="89.4543" y1="36.079742" x2="95.942055" y2="45.317894">
      <stop style={{"stopColor":" rgb(0, 0, 0)","stopOpacity":" 1"}} offset="0" id="stop3593"/>
      <stop style={{"stopColor":" rgb(0, 0, 0)","stopOpacity":" 0"}} offset="1" id="stop3595"/>
    </linearGradient>

    <linearGradient   id="linearGradient3714" gradientUnits="userSpaceOnUse" x1="39.916809" y1="115.46555" x2="45.017913" y2="87.703705">
      <stop style={{"stopColor":" rgb(79, 79, 79)","stopOpacity":" 1"}} offset="0" id="stop3304"/>
      <stop style={{"stopColor":" rgb(79, 79, 79)","stopOpacity":" 0"}} offset="1" id="stop3306"/>
    </linearGradient>

    <radialGradient   id="radialGradient3716" gradientUnits="userSpaceOnUse" gradientTransform="matrix(2.52457, 1.49305, -1.09715, 2.61596, 17.1946, -187.094)" cx="41.676304" cy="84.284256" fx="41.676304" fy="84.284256" r="12.171351">
      <stop style={{"stopColor":" rgb(255, 255, 255)","stopOpacity":" 0.647059"}} offset="0" id="stop3550"/>
      <stop style={{"stopColor":" rgb(255, 255, 255)","stopOpacity":" 0"}} offset="1" id="stop3552"/>
    </radialGradient>

    <linearGradient   id="linearGradient3732" gradientUnits="userSpaceOnUse" x1="90.20562" y1="37.204803" x2="99.978897" y2="46.956234">
      <stop id="stop3429" offset="0" style={{"stopColor":" rgb(134, 134, 134)","stopOpacity":" 1"}}/>
      <stop id="stop3431" offset="1" style={{"stopColor":" rgb(255, 255, 255)","stopOpacity":" 0"}}/>
    </linearGradient>

    <radialGradient   id="radialGradient3734" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1.73781, -0.105719, 0.0970447, 1.59522, -70.1843, -12.9263)" cx="90.20562" cy="37.403847" fx="90.20562" fy="37.403847" r="6.6905818">
      <stop style={{"stopColor":" rgb(0, 0, 0)","stopOpacity":" 1"}} offset="0" id="stop3435"/>
      <stop style={{"stopColor":" rgb(0, 0, 0)","stopOpacity":" 0"}} offset="1" id="stop3437"/>
    </radialGradient>

    <linearGradient   id="linearGradient3736" gradientUnits="userSpaceOnUse" x1="88.938957" y1="33.670578" x2="89.690857" y2="36.18634">
      <stop style={{"stopColor":" rgb(0, 0, 0)","stopOpacity":" 1"}} offset="0" id="stop3601"/>
      <stop style={{"stopColor":" rgb(0, 0, 0)","stopOpacity":" 0"}} offset="1" id="stop3603"/>
    </linearGradient>

    <linearGradient   id="linearGradient3738" gradientUnits="userSpaceOnUse" x1="89.4543" y1="36.079742" x2="95.942055" y2="45.317894">
      <stop style={{"stopColor":" rgb(0, 0, 0)","stopOpacity":" 1"}} offset="0" id="stop3593"/>
      <stop style={{"stopColor":" rgb(0, 0, 0)","stopOpacity":" 0"}} offset="1" id="stop3595"/>
    </linearGradient>

    <linearGradient   id="linearGradient3740" gradientUnits="userSpaceOnUse" x1="39.916809" y1="115.46555" x2="45.017913" y2="87.703705">
      <stop style={{"stopColor":" rgb(79, 79, 79)","stopOpacity":" 1"}} offset="0" id="stop3304"/>
      <stop style={{"stopColor":" rgb(79, 79, 79)","stopOpacity":" 0"}} offset="1" id="stop3306"/>
    </linearGradient>

    <radialGradient   id="radialGradient3742" gradientUnits="userSpaceOnUse" gradientTransform="matrix(2.52457, 1.49305, -1.09715, 2.61596, 17.1946, -187.094)" cx="41.676304" cy="84.284256" fx="41.676304" fy="84.284256" r="12.171351">
      <stop style={{"stopColor":" rgb(255, 255, 255)","stopOpacity":" 0.647059"}} offset="0" id="stop3550"/>
      <stop style={{"stopColor":" rgb(255, 255, 255)","stopOpacity":" 0"}} offset="1" id="stop3552"/>
    </radialGradient>    

    <radialGradient   id="radialGradient3758" cx="3.666055" cy="88.579697" fx="3.666055" fy="88.579697" r="4.764512" gradientTransform="matrix(2, 2.94503e-06, -8.54603e-06, 5.73878, -3.6653, -419.76)" gradientUnits="userSpaceOnUse">
      <stop style={{"stopColor":" rgb(255, 255, 255)","stopOpacity":" 1"}} offset="0" id="stop3754"/>
      <stop style={{"stopColor":" rgb(255, 255, 255)","stopOpacity":" 0"}} offset="1" id="stop3756"/>
    </radialGradient>

    <linearGradient   id="linearGradient3768" x1="127.73199" y1="112.91841" x2="87.753883" y2="23.566708" gradientUnits="userSpaceOnUse">
      <stop id="stop3772" offset="0" style={{"stopColor":" rgb(168, 168, 168)","stopOpacity":" 0.302521"}}/>
      <stop id="stop3774" offset="1" style={{"stopColor":" rgb(87, 82, 136)","stopOpacity":" 0"}}/>
    </linearGradient>

    <linearGradient   id="linearGradient5777" x1="36.007706" y1="13.461119" x2="52.067524" y2="42.380581" gradientUnits="userSpaceOnUse" spreadMethod="reflect">
      <stop style={{"stopColor":" rgb(255, 255, 255)","stopOpacity":" 0.647059"}} offset="0" id="stop3550"/>
      <stop style={{"stopColor":" rgb(255, 255, 255)","stopOpacity":" 0"}} offset="1" id="stop3552"/>
    </linearGradient> 

    <linearGradient   id="linearGradient8450" x1="35.059143" y1="14.036435" x2="51.300686" y2="42.463749" gradientUnits="userSpaceOnUse" spreadMethod="reflect">
      <stop style={{"stopColor":" rgb(255, 255, 255)","stopOpacity":" 0.647059"}} offset="0" id="stop3550"/>
      <stop style={{"stopColor":" rgb(255, 255, 255)","stopOpacity":" 0"}} offset="1" id="stop3552"/>
    </linearGradient>
  </defs>

  <path style={{"fill":" url(#linearGradient3407) rgb(0, 0, 0)", "fillRule":" evenodd","stroke":" none", "strokeWidth":" 4.2","strokeLinecap":" butt","strokeLinejoin":" miter","strokeOpacity":" 1","strokeMiterlimit":" 4","strokeDasharray":" none", "fillOpacity":" 1"}} d="M 19.301587,63.322751 L 74.835979,39.280423 L 74.835979,39.280423 C 86.604995,13.737669 115.26876,22.626106 122.24339,44.021164 C 125.51843,57.180769 121.78311,68.801405 110.73016,76.529101 C 106.32804,79.238095 57.227513,98.539683 54.518519,102.9418 C 24.696755,145.80109 -16.905049,83.065348 19.301587,63.322751 z " id="path2235" />
  <path  style={{"overflow":" visible", "marker":" none", "opacity":" 0.339623", "color":" rgb(0, 0, 0)", "fill":" url(#linearGradient3517) rgb(0, 0, 0)", "fillOpacity":" 1","fillRule":" evenodd","stroke":" url(#radialGradient3519) rgb(0, 0, 0)", "strokeWidth":" 1.74831","strokeLinecap":" round","strokeLinejoin":" round","strokeMiterlimit":" 4","strokeDasharray":" none","strokeDashoffset":" 10","strokeOpacity":" 1","visibility":" visible", "display":" inline"}} id="path3515"     d="M 99.638885 41.921432 A 6.1905818 6.4853716 0 1 1  87.257721,41.921432 A 6.1905818 6.4853716 0 1 1  99.638885 41.921432 z" transform="matrix(1.04258, 0, 0, 1.02137, 4.30756, 15.5322)"/>
  <path style={{"fill":" rgb(178, 203, 203)", "fillOpacity":" 1","fillRule":" evenodd","stroke":" none", "strokeWidth":" 1px","strokeLinecap":" butt","strokeLinejoin":" miter","strokeOpacity":"1"}} d="M 121.5625,48.78125 C 121.13746,55.211686 121.85873,59.964195 116.875,63.5 C 103.14425,74.333308 84.992191,77.280593 69.53125,85.25 C 59.479031,89.280525 51.211277,96.097216 43.5625,103.5625 C 34.839801,111.23074 20.843126,111.77038 12.375,103.4375 C 15.147597,108.00011 15.121832,116.63899 22.023037,116.1863 C 28.128781,116.95172 34.508363,120.36722 40.107208,116.14486 C 45.545075,114.40619 50.624621,112.23184 52.931231,106.58541 C 57.477485,100.01369 66.759796,99.153622 73.396852,95.103393 C 88.139841,88.063391 103.87684,82.798272 116.67875,72.333186 C 122.96338,69.326183 121.37005,60.752787 124.00589,55.158656 C 125.10706,53.410785 124.24962,48.567638 121.5625,48.78125 z " id="path3278" />
  <path style={{"fill":" rgb(79, 79, 79)", "fillOpacity":" 1","fillRule":" evenodd","stroke":" none", "strokeWidth":" 4.2","strokeLinecap":" butt","strokeLinejoin":" miter","strokeMiterlimit":" 4","strokeDasharray":" none","strokeOpacity":"1"}} d="M 96.75,22.375 C 87.802888,22.244434 78.781277,27.234987 73.3125,38.40625 L 18.4375,62.1875 L 18.34375,62.21875 L 18.25,62.25 C 8.6395288,67.490356 3.9991405,75.875371 3.21875,84.46875 C 2.4383595,93.062129 5.3395581,101.86365 10.4375,108.65625 C 15.535442,115.44885 22.924188,120.31987 31.25,120.5 C 39.575812,120.68013 48.464136,116.00613 56.1875,104.90625 L 56.25,104.875 L 56.28125,104.8125 C 56.05737,105.17631 57.036643,104.15424 58.5625,103.25 C 60.088357,102.34576 62.220689,101.22157 64.71875,100 C 69.714872,97.556868 76.211696,94.664236 82.78125,91.8125 C 89.350804,88.960764 95.976551,86.138078 101.25,83.875 C 103.88672,82.743461 106.17776,81.742942 107.96875,80.9375 C 109.75974,80.132058 110.96297,79.597307 111.78125,79.09375 L 111.84375,79.0625 L 111.90625,79.03125 C 123.58736,70.864375 127.68538,58.085139 124.25,44.28125 L 124.21875,44.21875 L 124.1875,44.15625 C 120.464,32.734214 111.00407,24.603952 100.65625,22.75 C 99.362772,22.518256 98.059679,22.394112 96.75,22.375 z M 96.65625,25.0625 C 97.742412,25.091893 98.853754,25.212082 99.9375,25.40625 C 108.56857,26.952623 116.87418,33.910572 120.15625,43.8125 C 123.2614,56.289476 119.9435,66.745603 109.59375,74.03125 C 109.56194,74.053641 109.53194,74.071419 109.5,74.09375 C 109.16736,74.289495 107.94476,74.862831 106.25,75.625 C 104.50263,76.410827 102.22158,77.403529 99.59375,78.53125 C 94.338097,80.786691 87.719469,83.574949 81.125,86.4375 C 74.530531,89.300051 67.984698,92.220079 62.875,94.71875 C 60.320151,95.968086 58.101292,97.120503 56.40625,98.125 C 54.752207,99.1052 53.640524,99.645868 52.75,101.03125 C 52.727926,101.06559 52.709296,101.08958 52.6875,101.125 C 45.521707,111.37643 38.052007,114.92638 31.34375,114.78125 C 24.61331,114.63564 18.28565,110.62675 13.78125,104.625 C 9.2768502,98.623248 6.7045434,90.726577 7.375,83.34375 C 8.0443718,75.972869 11.786326,69.099456 20.25,64.46875 C 20.263717,64.461245 20.267508,64.444993 20.28125,64.4375 L 75.625,40.46875 L 76.375,40.15625 L 76.71875,39.4375 C 81.596534,28.85106 89.053119,24.856752 96.65625,25.0625 z " id="path3415" />
  <path  style={{"overflow":" visible", "marker":" none", "opacity":" 0.339623", "color":" rgb(0, 0, 0)", "fill":" url(#linearGradient3447) rgb(0, 0, 0)", "fillOpacity":" 1","fillRule":" evenodd","stroke":" url(#radialGradient3439) rgb(0, 0, 0)", "strokeWidth":" 1.74831","strokeLinecap":" round","strokeLinejoin":" round","strokeMiterlimit":" 4","strokeDasharray":" none","strokeDashoffset":" 10","strokeOpacity":" 1","visibility":" visible", "display":" inline"}} id="path3417"     d="M 99.638885 41.921432 A 6.1905818 6.4853716 0 1 1  87.257721,41.921432 A 6.1905818 6.4853716 0 1 1  99.638885 41.921432 z" transform="matrix(1.04258, 0, 0, 1.02137, -3.66549, -0.918151)"/>
  <path  style={{"overflow":" visible", "marker":" none", "opacity":" 1", "color":" rgb(0, 0, 0)", "fill":" rgb(11, 46, 135)", "fillOpacity":" 1","fillRule":" evenodd","stroke":" none", "strokeWidth":" 37.496","strokeLinecap":" round","strokeLinejoin":" miter","strokeMiterlimit":" 4","strokeDasharray":" 449.952, 449.952","strokeDashoffset":" 374.96","strokeOpacity":" 1","visibility":" visible", "display":" inline"}} id="path3339"     d="M 97.862435 41.48148 A 4.0634923 4.2328043 0 1 1  89.73545,41.48148 A 4.0634923 4.2328043 0 1 1  97.862435 41.48148 z" transform="translate(0.181929, 0.266303)"/>
  <path  style={{"overflow":" visible", "marker":" none", "opacity":" 1", "color":" rgb(0, 0, 0)", "fill":" url(#radialGradient3359) rgb(0, 0, 0)", "fillOpacity":" 1","fillRule":" evenodd","stroke":" none", "strokeWidth":" 37.496","strokeLinecap":" round","strokeLinejoin":" miter","strokeMiterlimit":" 4","strokeDasharray":" 449.952, 449.952","strokeDashoffset":" 374.96","strokeOpacity":" 1","visibility":" visible", "display":" inline"}} id="path3349"     d="M 97.862435 41.48148 A 4.0634923 4.2328043 0 1 1  89.73545,41.48148 A 4.0634923 4.2328043 0 1 1  97.862435 41.48148 z" transform="matrix(0.909314, 0.176847, -0.183206, 0.877752, 16.0545, -11.564)"/>
  <path  style={{"overflow":" visible", "marker":" none", "opacity":" 0.339623", "color":" rgb(0, 0, 0)", "fill":" url(#linearGradient3511) rgb(0, 0, 0)", "fillOpacity":" 1","fillRule":" evenodd","stroke":" url(#radialGradient3513) rgb(0, 0, 0)", "strokeWidth":" 1.74831","strokeLinecap":" round","strokeLinejoin":" round","strokeMiterlimit":" 4","strokeDasharray":" none","strokeDashoffset":" 10","strokeOpacity":" 1","visibility":" visible", "display":" inline"}} id="path3509"     d="M 99.638885 41.921432 A 6.1905818 6.4853716 0 1 1  87.257721,41.921432 A 6.1905818 6.4853716 0 1 1  99.638885 41.921432 z" transform="matrix(1.04258, 0, 0, 1.02137, 12.024, 1.31775)"/>
  <path  style={{"overflow":" visible", "marker":" none", "opacity":" 1", "color":" rgb(0, 0, 0)", "fill":" rgb(18, 135, 11)", "fillOpacity":" 1","fillRule":" evenodd","stroke":" none", "strokeWidth":" 37.496","strokeLinecap":" round","strokeLinejoin":" miter","strokeMiterlimit":" 4","strokeDasharray":" 449.952, 449.952","strokeDashoffset":" 374.96","strokeOpacity":" 1","visibility":" visible", "display":" inline"}} id="path3367"     d="M 97.862435 41.48148 A 4.0634923 4.2328043 0 1 1  89.73545,41.48148 A 4.0634923 4.2328043 0 1 1  97.862435 41.48148 z" transform="translate(15.6572, 2.50348)"/>
  <path  style={{"overflow":" visible", "marker":" none", "opacity":" 1", "color":" rgb(0, 0, 0)", "fill":" url(#radialGradient3371) rgb(0, 0, 0)", "fillOpacity":" 1","fillRule":" evenodd","stroke":" none", "strokeWidth":" 37.496","strokeLinecap":" round","strokeLinejoin":" miter","strokeMiterlimit":" 4","strokeDasharray":" 449.952, 449.952","strokeDashoffset":" 374.96","strokeOpacity":" 1","visibility":" visible", "display":" inline"}} id="path3369"     d="M 97.862435 41.48148 A 4.0634923 4.2328043 0 1 1  89.73545,41.48148 A 4.0634923 4.2328043 0 1 1  97.862435 41.48148 z" transform="matrix(0.909314, 0.176847, -0.183206, 0.877752, 31.5298, -9.24264)"/>
  <path  style={{"overflow":" visible", "marker":" none", "opacity":" 1", "color":" rgb(0, 0, 0)", "fill":" rgb(135, 131, 11)", "fillOpacity":" 1","fillRule":" evenodd","stroke":" none", "strokeWidth":" 37.496","strokeLinecap":" round","strokeLinejoin":" miter","strokeMiterlimit":" 4","strokeDasharray":" 449.952, 449.952","strokeDashoffset":" 374.96","strokeOpacity":" 1","visibility":" visible", "display":" inline"}} id="path3374"     d="M 97.862435 41.48148 A 4.0634923 4.2328043 0 1 1  89.73545,41.48148 A 4.0634923 4.2328043 0 1 1  97.862435 41.48148 z" transform="translate(7.92911, 16.6534)"/>
  <path  style={{"overflow":" visible", "marker":" none", "opacity":" 1", "color":" rgb(0, 0, 0)", "fill":" url(#radialGradient3378) rgb(0, 0, 0)", "fillOpacity":" 1","fillRule":" evenodd","stroke":" none", "strokeWidth":" 37.496","strokeLinecap":" round","strokeLinejoin":" miter","strokeMiterlimit":" 4","strokeDasharray":" 449.952, 449.952","strokeDashoffset":" 374.96","strokeOpacity":" 1","visibility":" visible", "display":" inline"}} id="path3376"     d="M 97.862435 41.48148 A 4.0634923 4.2328043 0 1 1  89.73545,41.48148 A 4.0634923 4.2328043 0 1 1  97.862435 41.48148 z" transform="matrix(0.909314, 0.176847, -0.183206, 0.877752, 23.7599, 4.90726)"/>
  <path  style={{"overflow":" visible", "marker":" none", "opacity":" 0.339623", "color":" rgb(0, 0, 0)", "fill":" url(#linearGradient3505) rgb(0, 0, 0)", "fillOpacity":" 1","fillRule":" evenodd","stroke":" url(#radialGradient3507) rgb(0, 0, 0)", "strokeWidth":" 1.74831","strokeLinecap":" round","strokeLinejoin":" round","strokeMiterlimit":" 4","strokeDasharray":" none","strokeDashoffset":" 10","strokeOpacity":" 1","visibility":" visible", "display":" inline"}} id="path3503"     d="M 99.638885 41.921432 A 6.1905818 6.4853716 0 1 1  87.257721,41.921432 A 6.1905818 6.4853716 0 1 1  99.638885 41.921432 z" transform="matrix(1.04258, 0, 0, 1.02137, -11.1771, 12.4328)"/>
  <path  style={{"overflow":" visible", "marker":" none", "opacity":" 1", "color":" rgb(0, 0, 0)", "fill":" rgb(135, 11, 12)", "fillOpacity":" 1","fillRule":" evenodd","stroke":" none", "strokeWidth":" 37.496","strokeLinecap":" round","strokeLinejoin":" miter","strokeMiterlimit":" 4","strokeDasharray":" 449.952, 449.952","strokeDashoffset":" 374.96","strokeOpacity":" 1","visibility":" visible", "display":" inline"}} id="path3381"     d="M 97.862435 41.48148 A 4.0634923 4.2328043 0 1 1  89.73545,41.48148 A 4.0634923 4.2328043 0 1 1  97.862435 41.48148 z" transform="translate(-7.42559, 13.4107)"/>
  <path  style={{"overflow":" visible", "marker":" none", "opacity":" 1", "color":" rgb(0, 0, 0)", "fill":" url(#radialGradient3385) rgb(0, 0, 0)", "fillOpacity":" 1","fillRule":" evenodd","stroke":" none", "strokeWidth":" 37.496","strokeLinecap":" round","strokeLinejoin":" miter","strokeMiterlimit":" 4","strokeDasharray":" 449.952, 449.952","strokeDashoffset":" 374.96","strokeOpacity":" 1","visibility":" visible", "display":" inline"}} id="path3383"     d="M 97.862435 41.48148 A 4.0634923 4.2328043 0 1 1  89.73545,41.48148 A 4.0634923 4.2328043 0 1 1  97.862435 41.48148 z" transform="matrix(0.909314, 0.176847, -0.183206, 0.877752, 8.51053, 1.58043)" />
  <g id="g3718" transform="matrix(1.04274, 0, 0, 0.980908, -1.55335, 1.27517)">
    <g transform="matrix(0.911376, 0, 0, 1, 52.2132, -14)" id="g3720">
      <path  style={{"overflow":" visible", "marker":" none", "opacity":" 0.339623", "color":" rgb(0, 0, 0)", "fill":" url(#linearGradient3732) rgb(0, 0, 0)", "fillOpacity":" 1","fillRule":" evenodd","stroke":" url(#radialGradient3734) rgb(0, 0, 0)", "strokeWidth":" 1.74831","strokeLinecap":" round","strokeLinejoin":" round","strokeMiterlimit":" 4","strokeDasharray":" none","strokeDashoffset":" 10","strokeOpacity":" 1","visibility":" visible", "display":" inline"}} id="path3722"     d="M 99.638885 41.921432 A 6.1905818 6.4853716 0 1 1  87.257721,41.921432 A 6.1905818 6.4853716 0 1 1  99.638885 41.921432 z" transform="matrix(2.2374, 0, 0, 2.19188, -234.373, 9.14492)"/>
      <path  style={{"overflow":" visible", "marker":" none", "opacity":" 0.433962", "color":" rgb(0, 0, 0)", "fill":" url(#linearGradient3736) rgb(0, 0, 0)", "fillOpacity":" 1","fillRule":" evenodd","stroke":" url(#linearGradient3738) rgb(0, 0, 0)", "strokeWidth":" 0.619547","strokeLinecap":" round","strokeLinejoin":" round","strokeMiterlimit":" 4","strokeDasharray":" none","strokeDashoffset":" 10","strokeOpacity":" 1","visibility":" visible", "display":" inline"}} id="path3724"     d="M 99.638885 41.921432 A 6.1905818 6.4853716 0 1 1  87.257721,41.921432 A 6.1905818 6.4853716 0 1 1  99.638885 41.921432 z" transform="matrix(2.60503, 0, 0, 2.55203, -269.239, -5.49438)"/>
    </g>
    <path transform="matrix(0.977208, -0.349317, 0.359487, 0.949563, -34.3353, 15.728)" d="M 44.698413 87.703705 A 11.851851 13.883598 0 1 1  20.99471,87.703705 A 11.851851 13.883598 0 1 1  44.698413 87.703705 z"     id="path3726" style={{"overflow":" visible", "marker":" none", "opacity":" 1", "color":" rgb(0, 0, 0)", "fill":" rgb(90, 55, 146)", "fillOpacity":" 1","fillRule":" evenodd","stroke":" url(#linearGradient3740) rgb(0, 0, 0)", "strokeWidth":" 0.639","strokeLinecap":" butt","strokeLinejoin":" miter","strokeMiterlimit":" 4","strokeDasharray":" none","strokeDashoffset":" 0pt","strokeOpacity":" 1","visibility":" visible", "display":" inline"}} />
    <path transform="matrix(0.945745, -0.33392, 0.347912, 0.90771, -32.1335, 18.543)" d="M 44.698413 87.703705 A 11.851851 13.883598 0 1 1  20.99471,87.703705 A 11.851851 13.883598 0 1 1  44.698413 87.703705 z"     id="path3728" style={{"overflow":" visible", "marker":" none", "opacity":" 0.553459", "color":" rgb(0, 0, 0)", "fill":" url(#radialGradient3742) rgb(0, 0, 0)", "fillOpacity":" 1","fillRule":" evenodd","stroke":" none", "strokeWidth":" 0.639","strokeLinecap":" butt","strokeLinejoin":" miter","strokeMiterlimit":" 4","strokeDasharray":" none","strokeDashoffset":" 0pt","strokeOpacity":" 1","visibility":" visible", "display":" inline"}} />
    <path id="path3730" d="M 24.759432,78.023698 L 24.67355,84.378981 C 24.673549,84.378982 27.697257,82.118317 28.738641,82.031534 C 29.780026,81.944751 29.883737,81.945652 29.883737,81.945652 L 24.759432,78.023698 z M 32.345693,82.804474 C 32.345693,82.804473 34.627219,85.828857 34.721768,86.869565 C 34.816318,87.910271 34.80765,88.014661 34.80765,88.014661 L 38.700976,82.861729 L 32.345693,82.804474 z M 23.757473,86.869565 L 19.892774,92.022497 L 26.21943,92.051124 C 26.219429,92.051123 23.937905,89.055369 23.843355,88.014661 C 23.748806,86.973952 23.757473,86.869565 23.757473,86.869565 z M 34.406866,90.476617 C 34.406866,90.476615 31.38316,92.737282 30.341775,92.824064 C 29.300392,92.910845 29.196679,92.909947 29.196679,92.909947 L 34.320984,96.8319 L 34.406866,90.476617 z " style={{"opacity":" 0.320755", "fill":" rgb(255, 255, 255)", "fillOpacity":" 1","fillRule":" evenodd","stroke":" none", "strokeWidth":" 1px","strokeLinecap":" butt","strokeLinejoin":" miter","strokeOpacity":"1"}}/>
  </g>
  <path style={{"fill":" url(#radialGradient3758) rgb(0, 0, 0)", "fillRule":" evenodd","stroke":" none", "strokeWidth":" 1px","strokeLinecap":" butt","strokeLinejoin":" miter","strokeOpacity":" 1","fillOpacity":" 1","opacity":" 0.27673"}} d="M 11.875571,72.910545 C 11.875571,72.910545 5.2780316,81.487346 8.9066784,92.373286 C 12.535325,103.25923 13.195079,111.17627 13.195079,111.17627 C 13.195079,111.17627 4.6182777,98.311072 3.9585237,92.373286 C 3.2987698,86.435501 3.6286468,79.508084 6.2676626,74.889807 C 8.9066784,70.271529 11.875571,65.983128 11.875571,65.983128 L 11.875571,72.910545 z " id="path3750"/>
  <path id="path7555" d="M 36.875,3.125 C 35.740185,3.2000286 34.813802,4.0611729 34.65625,5.1875 C 33.335795,13.902488 33.248448,20.899709 35.6875,27.15625 C 38.126552,33.412791 43.037965,38.63428 50.90625,43.96875 C 52.010819,44.710883 53.507867,44.41707 54.25,43.3125 C 54.992133,42.207931 54.69832,40.710883 53.59375,39.96875 C 35.071499,29.758247 37.277057,18.328234 38.812464,3.9041756 C 38.319386,3.3623978 37.605886,3.0754551 36.875,3.125 L 36.875,3.125 z " style={{"fill":" url(#linearGradient8450) rgb(0, 0, 0)", "fillOpacity":" 1","fillRule":" evenodd","stroke":" none", "strokeWidth":" 4.8","strokeLinecap":" round","strokeLinejoin":" miter","strokeMiterlimit":" 4","strokeDasharray":" none","strokeOpacity":"1"}} />

  </g>);
  },
  _onClick: function() {
    var tapId = this.props.tapId;
    var resolutionRE = /TOPO-(\w+)/i;
    var match = "";
    if(tapId.match(resolutionRE) != null){
      match = tapId.match(resolutionRE)[1];
    } 
    var pathName = "chair" + match;
    AppActionCreators.navigateTo(pathName, {nodeId: this.props.id});
  }
});

module.exports = Chair;