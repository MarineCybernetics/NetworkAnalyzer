"use strict";

var React = require('react'),
    AppActionCreators = require('../actions/AppActionCreators');

var PLC = React.createClass({
  displayName: 'PLC',
  render: function() {
    return (
   <svg title ={this.props.IP} data-container="#topo" data-toggle="tooltip" data-placement="right">
      <g transform={this.props.transform} className={this.props.id} onClick={this._onClick} style={{"cursor":"pointer"}}>

<defs id="defs4">
    <linearGradient
       x1="12.378357"
       y1="4.433136"
       x2="44.0961"
       y2="47.620636"
       id="linearGradient2948"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(0.00764833,2.6063737,-2.6063737,0.00764833,127.7914,-3.5035661)">
      <stop
         id="stop4256"
         style={{"stopColor":"#ffffff","stopOpacity":"1"}}
         offset="0" />
      <stop
         id="stop4258"
         style={{"stopColor":"#ffffff","stopOpacity":"0"}}
         offset="1" />
    </linearGradient>

    <linearGradient
       x1="12.277412"
       y1="37.205811"
       x2="12.221823"
       y2="33.758667"
       id="linearGradient2957"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(0.00764833,2.6063737,-2.6063737,0.00764833,127.7914,-3.5035661)" >
      <stop
         id="stop4238"
         style={{"stopColor":"#eeeeee","stopOpacity":"1"}}
         offset="0" />
      <stop
         id="stop4240"
         style={{"stopColor":"#eeeeee","stopOpacity":"0"}}
         offset="1" />
     </linearGradient>    
    <linearGradient
       x1="7.0625"
       y1="35.28125"
       x2="24.6875"
       y2="35.28125"
       id="linearGradient2960"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(2.6063849,0,0,2.6063849,-1.0551914,-131.25673)">
      <stop
         id="stop4186"
         style={{"stopColor":"#838383","stopOpacity":"1"}}
         offset="0" />
      <stop
         id="stop4188"
         style={{"stopColor":"#bbbbbb","stopOpacity":"0"}}
         offset="1" />
    </linearGradient>      
    <radialGradient
       cx="15.571491"
       cy="2.958519"
       r="20.935818"
       fx="15.571491"
       fy="2.958519"
       id="radialGradient2963"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-2.0275595,3.358406,-3.0537259,-1.8436184,140.48432,-9.6771767)">
      <stop
         id="stop4246"
         style={{"stopColor":"#e4e4e4","stopOpacity":"1"}}
         offset="0" />
      <stop
         id="stop4248"
         style={{"stopColor":"#d3d3d3","stopOpacity":"1"}}
         offset="1" />
    </radialGradient>
    <linearGradient
       x1="7.6046205"
       y1="28.481176"
       x2="36.183067"
       y2="40.943935"
       id="linearGradient2966"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(0.00764833,2.6063737,-2.6063737,0.00764833,127.7914,-3.5035661)" >
      <stop
         id="stop4230"
         style={{"stopColor":"#bbbbbb","stopOpacity":"1"}}
         offset="0" />
      <stop
         id="stop4232"
         style={{"stopColor":"#9f9f9f","stopOpacity":"1"}}
         offset="1" />
    </linearGradient>      
    <linearGradient
       x1="302.85715"
       y1="366.64789"
       x2="302.85715"
       y2="609.50507"
       id="linearGradient2973"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(2.774389,0,0,1.969706,-1892.179,-872.8854)">
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
       id="radialGradient2975"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(2.774389,0,0,1.969706,-1891.633,-872.8854)">
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
       id="radialGradient2977"
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
  </defs>
  <path
     d="m 61.166333,14.81036 c -0.003,-0.853727 -0.400514,-1.40749 -1.15768,-1.746763 0,0 -23.388845,-8.7675447 -23.388845,-8.7675447 0,0 -0.918336,-0.338803 -2.434137,-0.3343572 0,0 -13.181561,0.03866 -13.181561,0.03866 -1.478819,0.00403 -2.217048,0.9050296 -2.213061,2.2689053 l 0.154577,52.6751686 c 0.0037,1.345218 0.9874,2.174177 2.524897,2.169596 l 13.181552,-0.03896 c 0,0 1.052802,0.141669 1.792457,-0.133312 l 23.464044,-9.246669 c 0.698506,-0.254092 1.347157,-0.873927 1.361463,-1.540674 L 61.166333,14.81032 Z"
     id="path4196"
     style={{"fill":"rgb(0,0,255)","stroke":"#535353","strokeWidth":"5.21276999","strokeLinecap":"round","strokeLinejoin":"round","strokeMiterlimit":"4","strokeOpacity":"1","strokeDasharray":"none"}} />
  <path
     d="m 35.134119,3.9423823 0.948605,1.0416433 0.06524,51.3739214 -0.41953,4.730785 -14.258713,0.04151 c -1.537478,0.009 -2.520353,-0.821715 -2.524313,-2.166994 L 18.790844,6.2603493 c -0.0038,-1.3638633 0.733765,-2.2721915 2.21258,-2.2765266 l 14.130652,-0.041454 z"
     id="path4170"
     style={{"fill":"url(#linearGradient2966)","fillOpacity":"1","fillRule":"evenodd","stroke":"none"}} />
  <path
     d="m 36.613754,4.3143624 c -2.003038,-0.9698227 -3.268565,0.00901 -3.264411,1.4243374 0,0 0.156335,53.2727422 0.156335,53.2727422 0.03708,1.528495 1.389614,2.516488 2.932782,1.942861 l 23.482374,-9.240511 c 0.698506,-0.254135 1.347075,-0.898322 1.361382,-1.565097 L 61.178581,14.828622 c -0.003,-0.853733 -0.418841,-1.41354 -1.175996,-1.75281 0,0 -23.388831,-8.7614496 -23.388831,-8.7614496 z"
     id="path3093"
     style={{"fill":"url(#radialGradient2963)","fillOpacity":"1","fillRule":"evenodd","stroke":"none"}} />
  <rect
     width="24.075312"
     height="7.5982351"
     x="10.307642"
     y="-29.41637"
     transform="matrix(0.00293446,0.99999569,-0.99999569,0.00293446,0,0)"
     id="rect4174"
     style={{"fill":"url(#linearGradient2960)","fillOpacity":"1","fillRule":"evenodd","stroke":"none","strokeWidth":"2.40899992","marker":"none","visibility":"visible","display":"inline","overflow":"visible"}} />
  <path
     d="m 21.84814,10.243575 c 0,0 5.479561,-0.01614 5.479561,-0.01614 -4.335358,2.520021 -5.446299,11.348827 -5.427699,17.688295 0,0 -0.05184,-17.672213 -0.05184,-17.672213 z"
     id="path4194"
     style={{"opacity":"0.81142853","fill":"url(#linearGradient2957)","fillOpacity":"1","fillRule":"evenodd","stroke":"none"}} />
  <path
     d="m 36.831051,11.297941 c -0.76682,0.0034 -1.390922,-0.833772 -1.393948,-1.867324 -0.004,-1.0335492 0.616131,-1.8732309 1.382965,-1.8754811 0.766831,-0.00343 1.390916,0.8337825 1.39395,1.8673322 0.003,1.0335529 -0.616138,1.8732239 -1.382967,1.8754729 z"
     id="path4224"
     style={{"fill":"#ffffff","fillOpacity":"0.45762706","fillRule":"evenodd","stroke":"none","strokeWidth":"2","marker":"none","visibility":"visible","display":"inline","overflow":"visible"}} />
  <path
     d="m 37.087584,57.574799 c -0.766835,0.004 -1.39092,-0.833846 -1.393953,-1.867393 -0.004,-1.033553 0.616143,-1.873232 1.382963,-1.875397 0.76683,-0.004 1.390932,0.833772 1.393956,1.867336 0.004,1.03355 -0.616132,1.873199 -1.382966,1.875454 z"
     id="path4226"
     style={{"fill":"#ffffff","fillOpacity":"0.45762706","fillRule":"evenodd","stroke":"none","strokeWidth":"2","marker":"none","visibility":"visible","display":"inline","overflow":"visible"}} />
  <path
     d="m 60.548841,15.29959 c -0.003,-0.821888 -0.385571,-1.355 -1.114488,-1.681621 0,-1e-6 -22.688135,-8.6962072 -22.688135,-8.6962072 0,0 -0.884079,-0.3261629 -2.343364,-0.3218787 0,0 -12.689966,0.037237 -12.689966,0.037237 -1.850537,0.00493 -2.220508,0.6130869 -2.215897,2.184537 L 19.648051,58.3008 c 0.0048,1.807339 0.438333,2.094582 2.516103,2.088487 l 12.689979,-0.03708 c 0,0 1.013543,0.136382 1.725613,-0.128353 L 59.509768,51.15052 c 0.672434,-0.24461 1.126421,-0.755472 1.140191,-1.397321 L 60.548867,15.299628 Z"
     id="path4252"
     style={{"fill":"none","stroke":"url(#linearGradient2948)","strokeWidth":"2.60638547","strokeLinecap":"round","strokeLinejoin":"round","strokeMiterlimit":"4","strokeOpacity":"1","strokeDasharray":"none"}} />
  <path
     d="m 29.228878,54.81025 -6.858443,0.02046"
     id="path4282"
     style={{"fill":"none","stroke":"#ffffff","strokeWidth":"2.60638618px","strokeLinecap":"square","strokeLinejoin":"miter","strokeOpacity":"0.42372885"}} />
  <path
     d="m 29.139212,52.078594 -6.858446,0.02037"
     id="path4284"
     style={{"fill":"none","stroke":"#ffffff","strokeWidth":"2.60638618px","strokeLinecap":"square","strokeLinejoin":"miter","strokeOpacity":"0.42372885"}} />
  <path
     d="m 29.131187,49.346594 -6.858439,0.02028"
     id="path4286"
     style={{"fill":"none","stroke":"#ffffff","strokeWidth":"2.60638618px","strokeLinecap":"square","strokeLinejoin":"miter","strokeOpacity":"0.42372885"}} />
  <path
     d="m 29.123167,46.614701 -6.858425,0.02011"
     id="path4288"
     style={{"fill":"none","stroke":"#ffffff","strokeWidth":"2.60638618px","strokeLinecap":"square","strokeLinejoin":"miter","strokeOpacity":"0.42372885"}} />
  <path
     d="m 29.115166,43.882741 -6.858445,0.01989"
     id="path4290"
     style={{"fill":"none","stroke":"#ffffff","strokeWidth":"2.60638618px","strokeLinecap":"square","strokeLinejoin":"miter","strokeOpacity":"0.42372885"}} />
  <path
     d="m 29.107137,41.150809 -6.858435,0.02002"
     id="path4292"
     style={{"fill":"none","stroke":"#ffffff","strokeWidth":"2.60638618px","strokeLinecap":"square","strokeLinejoin":"miter","strokeOpacity":"0.42372885"}} />
  <path
     d="m 29.156717,53.444491 -6.858444,0.0204"
     id="path4294"
     style={{"opacity":"0.09714284","fill":"none","stroke":"#000000","strokeWidth":"2.60638618px","strokeLinecap":"square","strokeLinejoin":"miter","strokeOpacity":"1"}} />
  <path
     d="m 29.067035,50.712767 -6.85844,0.02037"
     id="path4296"
     style={{"opacity":"0.09714284","fill":"none","stroke":"#000000","strokeWidth":"2.60638618px","strokeLinecap":"square","strokeLinejoin":"miter","strokeOpacity":"1"}} />
  <path
     d="M 29.059024,47.980853 22.20059,48.00076"
     id="path4298"
     style={{"opacity":"0.09714284","fill":"none","stroke":"#000000","strokeWidth":"2.60638618px","strokeLinecap":"square","strokeLinejoin":"miter","strokeOpacity":"1"}} />
  <path
     d="m 29.05101,45.248915 -6.858442,0.01989"
     id="path4300"
     style={{"opacity":"0.09714284","fill":"none","stroke":"#000000","strokeWidth":"2.60638618px","strokeLinecap":"square","strokeLinejoin":"miter","strokeOpacity":"1"}} />
  <path
     d="m 29.042986,42.516976 -6.85844,0.02002"
     id="path4302"
     style={{"opacity":"0.09714284","fill":"none","stroke":"#000000","strokeWidth":"2.60638618px","strokeLinecap":"square","strokeLinejoin":"miter","strokeOpacity":"1"}} />
  <path
     d="m 29.428209,10.244561 -7.555516,0.02218 0.05038,17.159981 0.420566,-16.691806 7.084584,-0.490347 z"
     id="path4572"
     style={{"opacity":"0.43999999","fill":"#ffffff","fillOpacity":"1","fillRule":"evenodd","stroke":"none"}} />
  <path
     d="m 57.669758,18.843237 c -0.766828,0.0033 -1.390911,-0.83378 -1.393951,-1.867326 -0.004,-1.033551 0.616143,-1.873231 1.382965,-1.875481 0.766829,-0.0034 1.390926,0.83378 1.393955,1.867332 0.004,1.033546 -0.616139,1.873229 -1.382969,1.875475 z"
     id="path4224-5"
     style={{"fill":"#ffffff","fillOpacity":"0.45762706","fillRule":"evenodd","stroke":"none","strokeWidth":"2","marker":"none","visibility":"visible","display":"inline","overflow":"visible"}} />
  <path
     d="m 58.049839,49.62934 c -0.766826,0.004 -1.390929,-0.83379 -1.393955,-1.867358 -0.004,-1.033547 0.616132,-1.873214 1.382974,-1.875479 0.766812,-0.004 1.390916,0.833789 1.393942,1.867334 0.003,1.033526 -0.616141,1.873217 -1.382961,1.875503 z"
     id="path4224-6"
     style={{"fill":"#ffffff","fillOpacity":"0.45762706","fillRule":"evenodd","stroke":"none","strokeWidth":"2","marker":"none","visibility":"visible","display":"inline","overflow":"visible"}} />
  <path
     d="m 27.993021,32.024472 a 1.1799058,1.1799058 0 1 1 0,-2.359805 1.1799058,1.1799058 0 0 1 0,2.359805 z"
     id="path22045"
     style={{"fill":"#4e9a06","fillOpacity":"1","fillRule":"nonzero","stroke":"#ffffff","strokeWidth":"0.40000001","strokeMiterlimit":"4","strokeOpacity":"1","strokeDasharray":"none"}} />
  <path
     d="m 25.39722,32.024472 a 1.1799058,1.1799058 0 1 1 0,-2.359805 1.1799058,1.1799058 0 0 1 0,2.359805 z"
     id="path22049"
     style={{"fill":"#a40000","fillOpacity":"1","fillRule":"nonzero","stroke":"#ffffff","strokeWidth":"0.40000001","strokeMiterlimit":"4","strokeOpacity":"1","strokeDasharray":"none","display":"inline"}} />
  <path
     d="m 22.722778,32.024472 a 1.1799058,1.1799058 0 1 1 0,-2.359805 1.1799058,1.1799058 0 0 1 0,2.359805 z"
     id="path22051"
     style={{"fill":"#4e9a06","fillOpacity":"1","fillRule":"nonzero","stroke":"#ffffff","strokeWidth":"0.40000001","strokeMiterlimit":"4","strokeOpacity":"1","strokeDasharray":"none","display":"inline"}} />
  <path
     d="m 27.993021,35.255113 a 1.179907,1.179907 0 1 1 0,-2.359811 1.179907,1.179907 0 0 1 0,2.359811 z"
     id="path22045-7"
     style={{"fill":"#4e9a06","fillOpacity":"1","fillRule":"nonzero","stroke":"#ffffff","strokeWidth":"0.40000001","strokeMiterlimit":"4","strokeOpacity":"1","strokeDasharray":"none"}} />
  <path
     d="m 25.39722,35.255113 a 1.179907,1.179907 0 1 1 0,-2.359811 1.179907,1.179907 0 0 1 0,2.359811 z"
     id="path22049-4"
     style={{"fill":"#4e9a06","fillOpacity":"1","fillRule":"nonzero","stroke":"#ffffff","strokeWidth":"0.40000001","strokeMiterlimit":"4","strokeOpacity":"1","strokeDasharray":"none","display":"inline"}} />
  <path
     d="m 22.722778,35.255113 a 1.179907,1.179907 0 1 1 0,-2.359811 1.179907,1.179907 0 0 1 0,2.359811 z"
     id="path22051-1"
     style={{"fill":"#4e9a06","fillOpacity":"1","fillRule":"nonzero","stroke":"#ffffff","strokeWidth":"0.40000001","strokeMiterlimit":"4","strokeOpacity":"1","strokeDasharray":"none","display":"inline"}} />  
  </g>
  </svg>);
  },
  _onClick: function() {
    var tapId = this.props.tapId;
    var resolutionRE = /TOPO-(\w+)/i;
    var match = "";
    if(tapId.match(resolutionRE) != null){
      match = tapId.match(resolutionRE)[1];
    }  
    var pathName = "plc" + match;
    AppActionCreators.navigateTo(pathName, {nodeId: this.props.id});
  }
});

module.exports = PLC;