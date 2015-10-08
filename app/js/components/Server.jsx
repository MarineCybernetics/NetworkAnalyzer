"use strict";

var React = require('react'),
    AppActionCreators = require('../actions/AppActionCreators');

var Server = React.createClass({
  displayName: 'Server',
  render: function() {
    return (<g transform={this.props.transform} className={this.props.id} onClick={this._onClick} style={{"cursor":"pointer"}}>

<defs id="defs4">
    <linearGradient
       x1="302.85715"
       y1="366.64789"
       x2="302.85715"
       y2="609.50507"
       id="linearGradient25151"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(2.774389,0,0,1.969706,-1892.179,-872.8854)" >
      <stop
         id="stop5050"
         style={{"stopColor":"#000000","stopOpacity":"0"}}
         offset="0" />
      <stop
         id="stop5056"
         style={{"stopColor":"#000000","stopOpacity":"1"}}
         offset="0.5" />
      <stop
         id="stop5052"
         style={{"stopColor":"#000000","stopOpacity":"0"}}
         offset="1" />
    </linearGradient>
    <radialGradient
       cx="605.71429"
       cy="486.64789"
       r="117.14286"
       fx="605.71429"
       fy="486.64789"
       id="radialGradient25153"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(2.774389,0,0,1.969706,-1891.633,-872.8854)" >
      <stop
         id="stop5062"
         style={{"stopColor":"#000000","stopOpacity":"1"}}
         offset="0" />
      <stop
         id="stop5064"
         style={{"stopColor":"#000000","stopOpacity":"0"}}
         offset="1" />
    </radialGradient>
    <radialGradient
       cx="605.71429"
       cy="486.64789"
       r="117.14286"
       fx="605.71429"
       fy="486.64789"
       id="radialGradient25155"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-2.774389,0,0,1.969706,112.7623,-872.8854)" >
      <stop
         id="stop5062"
         style={{"stopColor":"#000000","stopOpacity":"1"}}
         offset="0" />
      <stop
         id="stop5064"
         style={{"stopColor":"#000000","stopOpacity":"0"}}
         offset="1" />
    </radialGradient>
    <linearGradient
       x1="16.36447"
       y1="39.918777"
       x2="16.36447"
       y2="30.928421"
       id="linearGradient25284"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(2.8081147,0,0,2.8081175,28.084322,0.8636252)" >
      <stop
         id="stop4511"
         style={{"stopColor":"#000000","stopOpacity":"1"}}
         offset="0" />
      <stop
         id="stop4513"
         style={{"stopColor":"#000000","stopOpacity":"0"}}
         offset="1" />
    </linearGradient>     
    <linearGradient
       x1="16.36447"
       y1="39.918777"
       x2="16.36447"
       y2="30.928421"
       id="linearGradient25287"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(2.8081147,0,0,2.8081175,22.410835,0.8636252)" >
      <stop
         id="stop4511"
         style={{"stopColor":"#000000","stopOpacity":"1"}}
         offset="0" />
      <stop
         id="stop4513"
         style={{"stopColor":"#000000","stopOpacity":"0"}}
         offset="1" />
    </linearGradient> 
    <linearGradient
       x1="16.36447"
       y1="39.918777"
       x2="16.36447"
       y2="30.928421"
       id="linearGradient25290"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(2.8081147,0,0,2.8081175,16.737631,0.8636252)" >
      <stop
         id="stop4511"
         style={{"stopColor":"#000000","stopOpacity":"1"}}
         offset="0" />
      <stop
         id="stop4513"
         style={{"stopColor":"#000000","stopOpacity":"0"}}
         offset="1" />
    </linearGradient> 
    <linearGradient
       x1="16.36447"
       y1="39.918777"
       x2="16.36447"
       y2="30.928421"
       id="linearGradient25293"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(2.8081147,0,0,2.8081175,11.06438,0.8636252)" >
      <stop
         id="stop4511"
         style={{"stopColor":"#000000","stopOpacity":"1"}}
         offset="0" />
      <stop
         id="stop4513"
         style={{"stopColor":"#000000","stopOpacity":"0"}}
         offset="1" />
    </linearGradient>    
    <linearGradient
       x1="16.36447"
       y1="39.918777"
       x2="16.36447"
       y2="30.928421"
       id="linearGradient25296"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(2.8081147,0,0,2.8081175,5.3911289,0.8636252)" >
      <stop
         id="stop4511"
         style={{"stopColor":"#000000","stopOpacity":"1"}}
         offset="0" />
      <stop
         id="stop4513"
         style={{"stopColor":"#000000","stopOpacity":"0"}}
         offset="1" />
    </linearGradient> 
    <linearGradient
       x1="16.36447"
       y1="39.918777"
       x2="16.36447"
       y2="30.928421"
       id="linearGradient25299"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(2.8081147,0,0,2.8081175,-0.2821563,0.8636252)" >
      <stop
         id="stop4511"
         style={{"stopColor":"#000000","stopOpacity":"1"}}
         offset="0" />
      <stop
         id="stop4513"
         style={{"stopColor":"#000000","stopOpacity":"0"}}
         offset="1" />
    </linearGradient> 
    <linearGradient
       x1="16.36447"
       y1="39.918777"
       x2="16.36447"
       y2="30.928421"
       id="linearGradient25302"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(2.8081147,0,0,2.8081175,30.92086,0.8636252)" >
      <stop
         id="stop4451"
         style={{"stopColor":"#ffffff","stopOpacity":"1"}}
         offset="0" />
      <stop
         id="stop4453"
         style={{"stopColor":"#ffffff","stopOpacity":"0"}}
         offset="1" />
    </linearGradient>         
    <linearGradient
       x1="16.36447"
       y1="39.918777"
       x2="16.36447"
       y2="30.928421"
       id="linearGradient25305"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(2.8081147,0,0,2.8081175,25.247609,0.8636252)" >
      <stop
         id="stop4451"
         style={{"stopColor":"#ffffff","stopOpacity":"1"}}
         offset="0" />
      <stop
         id="stop4453"
         style={{"stopColor":"#ffffff","stopOpacity":"0"}}
         offset="1" />
    </linearGradient>         
    <linearGradient
       x1="16.36447"
       y1="39.918777"
       x2="16.36447"
       y2="30.928421"
       id="linearGradient25308"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(2.8081147,0,0,2.8081175,19.574225,0.8636252)" >
      <stop
         id="stop4451"
         style={{"stopColor":"#ffffff","stopOpacity":"1"}}
         offset="0" />
      <stop
         id="stop4453"
         style={{"stopColor":"#ffffff","stopOpacity":"0"}}
         offset="1" />
    </linearGradient>        
    <linearGradient
       x1="16.36447"
       y1="39.918777"
       x2="16.36447"
       y2="30.928421"
       id="linearGradient25311"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(2.8081147,0,0,2.8081175,13.900977,0.8636252)" >
      <stop
         id="stop4451"
         style={{"stopColor":"#ffffff","stopOpacity":"1"}}
         offset="0" />
      <stop
         id="stop4453"
         style={{"stopColor":"#ffffff","stopOpacity":"0"}}
         offset="1" />
    </linearGradient> 
    <linearGradient
       x1="16.36447"
       y1="39.918777"
       x2="16.36447"
       y2="30.928421"
       id="linearGradient25314"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(2.8081147,0,0,2.8081175,8.2277282,0.8636252)" >
      <stop
         id="stop4451"
         style={{"stopColor":"#ffffff","stopOpacity":"1"}}
         offset="0" />
      <stop
         id="stop4453"
         style={{"stopColor":"#ffffff","stopOpacity":"0"}}
         offset="1" />
    </linearGradient>
    <linearGradient
       x1="16.36447"
       y1="39.918777"
       x2="16.36447"
       y2="30.928421"
       id="linearGradient25317"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(2.8081147,0,0,2.8081175,2.5545053,0.8636252)" >
      <stop
         id="stop4451"
         style={{"stopColor":"#ffffff","stopOpacity":"1"}}
         offset="0" />
      <stop
         id="stop4453"
         style={{"stopColor":"#ffffff","stopOpacity":"0"}}
         offset="1" />
    </linearGradient>
    <linearGradient
       x1="27.324621"
       y1="26.887815"
       x2="22.311644"
       y2="26.7868"
       id="linearGradient25327"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(2.7372324,0,0,2.2504624,-5.011313,14.556065)" >
      <stop
         id="stop4422"
         style={{"stopColor":"#ffffff","stopOpacity":"1"}}
         offset="0" />
      <stop
         id="stop4424"
         style={{"stopColor":"#ffffff","stopOpacity":"0"}}
         offset="1" />
    </linearGradient>     
    <linearGradient
       x1="27.324621"
       y1="26.887815"
       x2="22.311644"
       y2="26.7868"
       id="linearGradient25329"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(2.7372324,0,0,2.2504624,-5.011313,14.556065)" >
      <stop
         id="stop4414"
         style={{"stopColor":"#ffffff","stopOpacity":"1"}}
         offset="0" />
      <stop
         id="stop4416"
         style={{"stopColor":"#ffffff","stopOpacity":"0"}}
         offset="1" />
    </linearGradient>    
    <linearGradient
       x1="24.349752"
       y1="34.463955"
       x2="23.233509"
       y2="10.018264"
       id="linearGradient25335"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(2.8415131,0,0,2.83799,-5.3545917,0.4858861)" >
      <stop
         id="stop4388"
         style={{"stopColor":"#d2d2d2","stopOpacity":"1"}}
         offset="0" />
      <stop
         id="stop4390"
         style={{"stopColor":"#dfdfdf","stopOpacity":"1"}}
         offset="1" />
    </linearGradient>     
  </defs>
  <g
     id="layer1"
     style={{"display":"inline"}} />
  <g
     id="layer2"
     style={{"display":"inline"}}>
    <path
       d="m 30.069752,22.03729 0,95.17786 62.405743,0 0,-95.75122 -11.481446,-12.040572 -40.016921,0 -10.907376,12.613932 z"
       id="path3626"
       style={{"fill":"url(#linearGradient25335)","fillOpacity":"1","fillRule":"evenodd","stroke":"#5e5e5e","strokeWidth":"2.83662605px","strokeLinecap":"round","strokeLinejoin":"round","strokeOpacity":"1"}} />
    <path
       d="m 41.556086,10.841671 -10.068019,14.183131 59.56912,0 -10.90702,-13.76598 -38.594081,-0.417151 z"
       id="path5791"
       style={{"fill":"#ffffff","fillOpacity":"0.65536726","fillRule":"evenodd","stroke":"none"}} />
    <rect
       width="45.386024"
       height="11.346502"
       x="39.997936"
       y="30.698046"
       id="rect4553"
       style={{"opacity":"0.34857142","fill":"#ffffff","fillOpacity":"1","fillRule":"evenodd","stroke":"#ffffff","strokeWidth":"2.83662605","strokeLinecap":"butt","strokeLinejoin":"miter","strokeMiterlimit":"4","strokeOpacity":"1","strokeDasharray":"none","strokeDashoffset":"0","marker":"none","visibility":"visible","display":"inline","overflow:":"visible"}} />
    <path
       d="m 32.906375,23.771924 0,90.606576 56.732536,0 0,-91.129846 -10.506025,-10.988653 -36.245787,0 -9.980724,11.511923 z"
       id="path4394"
       style={{"fill":"none","stroke":"#ffffff","strokeWidth":"2.83662724","strokeLinecap":"butt","strokeLinejoin":"miter","strokeMiterlimit":"4","strokeOpacity":"1","strokeDasharray":"none"}} />
    <rect
       width="31.202894"
       height="11.346499"
       x="54.181065"
       y="67.574181"
       id="rect4408"
       style={{"opacity":"0.52571429","fill":"url(#linearGradient25327)","fillOpacity":"1","fillRule":"evenodd","stroke":"url(#linearGradient25329)","strokeWidth":"2.83662701","strokeLinecap":"butt","strokeLinejoin":"miter","strokeMiterlimit":"4","strokeOpacity":"1","strokeDasharray":"none","strokeDashoffset":"0","marker":"none","visibility":"visible","display":"inline","overflow:":"visible"}} />
    <rect
       width="31.202871"
       height="11.346502"
       x="52.762733"
       y="66.155869"
       id="rect4398"
       style={{"fill":"#c8c8c8","fillOpacity":"1","fillRule":"evenodd","stroke":"#acacac","strokeWidth":"2.83662534","strokeLinecap":"butt","strokeLinejoin":"miter","strokeMiterlimit":"4","strokeOpacity":"1","strokeDasharray":"none","strokeDashoffset":"0","marker":"none","visibility":"visible","display":"inline","overflow:":"visible"}} />
    <rect
       width="45.386024"
       height="11.346502"
       x="39.997952"
       y="47.7178"
       id="rect4551"
       style={{"opacity":"0.34857142","fill":"#ffffff","fillOpacity":"1","fillRule":"evenodd","stroke":"#ffffff","strokeWidth":"2.83662558","strokeLinecap":"butt","strokeLinejoin":"miter","strokeMiterlimit":"4","strokeOpacity":"1","strokeDasharray":"none","strokeDashoffset":"0","marker":"none","visibility":"visible","display":"inline","overflow:":"visible"}} />
    <rect
       width="45.386032"
       height="11.346502"
       x="38.579624"
       y="46.299488"
       id="rect4430"
       style={{"fill":"#c8c8c8","fillOpacity":"1","fillRule":"evenodd","stroke":"#acacac","strokeWidth":"2.83662653","strokeLinecap":"butt","strokeLinejoin":"miter","strokeMiterlimit":"4","strokeOpacity":"1","strokeDasharray":"none","strokeDashoffset":"0","marker":"none","visibility":"visible","display":"inline","overflow:":"visible"}} />
    <rect
       width="45.386032"
       height="11.346502"
       x="38.579647"
       y="29.279736"
       id="rect4436"
       style={{"fill":"#c8c8c8","fillOpacity":"1","fillRule":"evenodd","stroke":"#acacac","strokeWidth":"2.83662605","strokeLinecap":"butt","strokeLinejoin":"miter","strokeMiterlimit":"4","strokeOpacity":"1","strokeDasharray":"none","strokeDashoffset":"0","marker":"none","visibility":"visible","display":"inline","overflow:":"visible"}} />
    <path
       d="m 68.185294,26.231213 a 2.171828,2.171828 0 1 1 -4.343656,0 2.171828,2.171828 0 1 1 4.343656,0 z"
       transform="matrix(1.9593699,0,0,1.9593562,-86.509754,21.850696)"
       id="path4396"
       style={{"fill":"#d40000","fillOpacity":"1","fillRule":"evenodd","stroke":"#979797","strokeWidth":"1.44772947","strokeLinecap":"butt","strokeLinejoin":"miter","strokeMiterlimit":"4","strokeOpacity":"1","strokeDasharray":"none","strokeDashoffset":"0","marker":"none","visibility":"visible","display":"inline","overflow:":"visible"}} />
    <path
       d="m 16.667518,25.574614 a 0.5050765,0.5050765 0 1 1 -1.010153,0 0.5050765,0.5050765 0 1 1 1.010153,0 z"
       transform="matrix(2.5342538,0,0,2.5342343,0.4673221,7.5389146)"
       id="path4445"
       style={{"fill":"#f44800","fillOpacity":"1","fillRule":"evenodd","stroke":"none","strokeWidth":"1","marker":"none","visibility":"visible","display":"inline","overflow:":"visible"}} />
    <rect
       width="2.8366244"
       height="28.36627"
       x="48.507816"
       y="84.593979"
       id="rect4457"
       style={{"fill":"url(#linearGradient25317)","fillOpacity":"1","fillRule":"evenodd","stroke":"none","strokeWidth":"1","marker":"none","visibility":"visible","display":"inline","overflow:":"visible"}} />
    <rect
       width="2.8366244"
       height="28.36627"
       x="54.181038"
       y="84.593979"
       id="rect4461"
       style={{"fill":"url(#linearGradient25314)","fillOpacity":"1","fillRule":"evenodd","stroke":"none","strokeWidth":"1","marker":"none","visibility":"visible","display":"inline","overflow:":"visible"}} />
    <rect
       width="2.8366244"
       height="28.36627"
       x="59.854286"
       y="84.593979"
       id="rect4465"
       style={{"fill":"url(#linearGradient25311)","fillOpacity":"1","fillRule":"evenodd","stroke":"none","strokeWidth":"1","marker":"none","visibility":"visible","display":"inline","overflow:":"visible"}} />
    <rect
       width="2.8366244"
       height="28.36627"
       x="65.527534"
       y="84.593979"
       id="rect4469"
       style={{"fill":"url(#linearGradient25308)","fillOpacity":"1","fillRule":"evenodd","stroke":"none","strokeWidth":"1","marker":"none","visibility":"visible","display":"inline","overflow:":"visible"}} />
    <rect
       width="2.8366244"
       height="28.36627"
       x="71.200821"
       y="84.593979"
       id="rect4473"
       style={{"fill":"url(#linearGradient25305)","fillOpacity":"1","fillRule":"evenodd","stroke":"none","strokeWidth":"1","marker":"none","visibility":"visible","display":"inline","overflow:":"visible"}} />
    <rect
       width="2.8366244"
       height="28.36627"
       x="76.874069"
       y="84.593979"
       id="rect4477"
       style={{"opacity":"0.54285709","fill":"url(#linearGradient25302)","fillOpacity":"1","fillRule":"evenodd","stroke":"none","strokeWidth":"1","marker":"none","visibility":"visible","display":"inline","overflow:":"visible"}} />
    <rect
       width="2.8366244"
       height="28.36627"
       x="45.671154"
       y="84.593979"
       id="rect4481"
       style={{"opacity":"0.16000001","fill":"url(#linearGradient25299)","fillOpacity":"1","fillRule":"evenodd","stroke":"none","strokeWidth":"1","marker":"none","visibility":"visible","display":"inline","overflow:":"visible"}} />
    <rect
       width="2.8366244"
       height="28.36627"
       x="51.34444"
       y="84.593979"
       id="rect4483"
       style={{"opacity":"0.29142851","fill":"url(#linearGradient25296)","fillOpacity":"1","fillRule":"evenodd","stroke":"none","strokeWidth":"1","marker":"none","visibility":"visible","display":"inline","overflow:":"visible"}} />
    <rect
       width="2.8366244"
       height="28.36627"
       x="57.017693"
       y="84.593979"
       id="rect4485"
       style={{"opacity":"0.29142851","fill":"url(#linearGradient25293)","fillOpacity":"1","fillRule":"evenodd","stroke":"none","strokeWidth":"1","marker":"none","visibility":"visible","display":"inline","overflow:":"visible"}} />
    <rect
       width="2.8366244"
       height="28.36627"
       x="62.690945"
       y="84.593979"
       id="rect4487"
       style={{"opacity":"0.29142851","fill":"url(#linearGradient25290)","fillOpacity":"1","fillRule":"evenodd","stroke":"none","strokeWidth":"1","marker":"none","visibility":"visible","display":"inline","overflow:":"visible"}} />
    <rect
       width="2.8366244"
       height="28.36627"
       x="68.364159"
       y="84.593979"
       id="rect4489"
       style={{"opacity":"0.29142851","fill":"url(#linearGradient25287)","fillOpacity":"1","fillRule":"evenodd","stroke":"none","strokeWidth":"1","marker":"none","visibility":"visible","display":"inline","overflow:":"visible"}} />
    <rect
       width="2.8366244"
       height="28.36627"
       x="74.037407"
       y="84.593979"
       id="rect4491"
       style={{"opacity":"0.22857145","fill":"url(#linearGradient25284)","fillOpacity":"1","fillRule":"evenodd","stroke":"none","strokeWidth":"1","marker":"none","visibility":"visible","display":"inline","overflow":"visible"}} />
  </g>

  </g>);
  },
  _onClick: function() {
    AppActionCreators.navigateTo('server', {nodeId: this.props.id});
  }
});

module.exports = Server;