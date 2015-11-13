"use strict";

var React = require('react'),
    AppActionCreators = require('../actions/AppActionCreators');

var Switches = React.createClass({
  displayName: 'Switches',
  render: function() {
    return (<svg title ={this.props.IP} data-container="#topo" data-toggle="tooltip" data-placement="right">
      <g transform={this.props.transform} className={this.props.id} onClick={this._onClick} style={{"cursor":"pointer"}}>
<defs id="defs3">

    <linearGradient
       x1="12.378357"
       y1="4.433136"
       x2="44.0961"
       y2="47.620636"
       id="linearGradient18985"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(2.5646484,0,0,1.8284958,3.0046676,26.372688)">
       <stop
         id="stop4256"
         style={{"stopColor":"#616161","stopOpacity":"1"}}
         offset="0" />
       <stop
         id="stop4258"
         style={{"stopColor":"#a0a0a0","stopOpacity":"1"}}
         offset="1" />
       </linearGradient>  
    <radialGradient
       cx="15.571491"
       cy="2.958519"
       r="20.935818"
       fx="15.571491"s
       fy="2.958519"
       id="radialGradient19000"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(3.1758355,1.2018439,-1.7549782,1.798161,-0.646306,22.849447)">
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
       id="linearGradient19003"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(2.5551094,0,0,2.0216842,3.2352686,19.024775)">
      <stop
         id="stop4230"
         style={{"stopColor":"#bbbbbb","stopOpacity":"1"}}
         offset="0" />
      <stop
         id="stop4232"
         style={{"stopColor":"#9f9f9f","stopOpacity":"1"}}
         offset="1" />
    </linearGradient>
  </defs>
  <g
     id="layer2"
     style={{"display":"inline"}} >
    <path
       d="m 11.599653,73.603805 1.953642,-1.39944 96.096875,0.126356 8.84682,0.641477 0,21.103415 c 0,2.275545 -1.55099,3.726634 -4.0674,3.726634 l -98.583754,0 c -2.551187,0 -4.246183,-1.095855 -4.246183,-3.284558 l 0,-20.913884 z"
       id="path4170"
       style={{"fill":"url(#linearGradient19003)","fillOpacity":"1","fillRule":"evenodd","stroke":"none" }}/>
    <path
       d="m 31.848533,40.136783 c -1.607726,0 -2.652747,0.5431 -3.295834,1.579165 -2e-6,0 -16.639968,32.01098 -16.639968,32.01098 0,0 -0.643091,1.256888 -0.643091,3.333784 0,0 0,18.060858 0,18.060858 0,2.026216 1.692063,3.04135 4.260475,3.041347 l 99.196705,0 c 2.53341,0 4.0997,-1.344146 4.0997,-3.450759 l 0,-18.060858 c 0,0 0.27258,-1.441922 -0.24116,-2.456472 L 101.30231,42.008387 c -0.47467,-0.958083 -1.638354,-1.849321 -2.893911,-1.871604 l -66.559866,0 z"
       id="path4196"
       style={{"fill":"none","stroke":"#535353","strokeWidth":"4.38836098","strokeLinecap":"round","strokeLinejoin":"round","strokeMiterlimit":"4","strokeOpacity":"1","strokeDasharray":"none" }}/>
    <path
       d="m 13.929746,70.190357 c -1.763629,2.251306 -0.0015,3.678965 2.557261,3.678965 0,0 96.294153,0 96.294153,0 2.76301,-0.03661 4.55603,-1.555781 3.52725,-3.294598 L 99.73029,44.113647 c -0.4556,-0.787045 -1.616653,-1.519181 -2.8218,-1.537485 l -63.843371,0 c -1.543177,0 -2.557263,0.466738 -3.174531,1.317844 0,0 -15.960842,26.296351 -15.960842,26.296351 z"
       id="path3093"
       style={{"fill":"url(#radialGradient19000)","fillOpacity":"1","fillRule":"evenodd","stroke":"none" }}/>
    <path
       d="m 32.863624,41.760801 c -1.543128,0 -2.54616,0.510806 -3.163406,1.485264 -3e-6,0 -16.452257,30.336065 -16.452257,30.336065 0,0 -0.617252,1.182149 -0.617252,3.135546 0,0 0,16.986901 0,16.986901 0,2.477136 1.138848,2.974778 4.089291,2.974778 l 96.65365,0 c 3.39336,0 3.93499,-0.578531 3.93499,-3.359846 l 0,-16.986901 c 0,0 0.26161,-1.356179 -0.23147,-2.310402 L 100.16795,43.292552 c -0.455592,-0.901113 -1.412229,-1.510794 -2.61734,-1.531751 l -64.686986,0 z"
       id="path4252"
       style={{"fill":"none","stroke":"url(#linearGradient18985)","strokeWidth":"2.16551399","strokeLinecap":"round","strokeLinejoin":"round","strokeMiterlimit":"4","strokeOpacity":"1","strokeDasharray":"none" }}/>
    <path
       d="m 106.7172,76.544153 0,12.829038"
       id="path4282"
       style={{"fill":"none","stroke":"#ffffff","strokeWidth":"2.55511069px","strokeLinecap":"square","strokeLinejoin":"miter","strokeOpacity":"0.42372885" }}/>
    <path
       d="m 101.60698,76.696889 0,12.829039"
       id="path4284"
       style={{"fill":"none","stroke":"#ffffff","strokeWidth":"2.55511069px","strokeLinecap":"square","strokeLinejoin":"miter","strokeOpacity":"0.42372885" }}/>
    <path
       d="m 96.496762,76.696889 0,12.829039"
       id="path4286"
       style={{"fill":"none","stroke":"#ffffff","strokeWidth":"2.55511069px","strokeLinecap":"square","strokeLinejoin":"miter","strokeOpacity":"0.42372885" }}/>
    <path
       d="m 91.386543,76.696889 0,12.829039"
       id="path4288"
       style={{"fill":"none","stroke":"#ffffff","strokeWidth":"2.55511069px","strokeLinecap":"square","strokeLinejoin":"miter","strokeOpacity":"0.42372885" }}/>
    <path
       d="m 86.276324,76.696889 0,12.829039"
       id="path4290"
       style={{"fill":"none","stroke":"#ffffff","strokeWidth":"2.55511069px","strokeLinecap":"square","strokeLinejoin":"miter","strokeOpacity":"0.42372885" }}/>
    <path
       d="m 81.166105,76.696889 0,12.829039"
       id="path4292"
       style={{"fill":"none","stroke":"#ffffff","strokeWidth":"2.55511069px","strokeLinecap":"square","strokeLinejoin":"miter","strokeOpacity":"0.42372885" }}/>
    <path
       d="m 104.16209,76.67165 0,12.829038"
       id="path4294"
       style={{"opacity":"0.09714284","fill":"none","stroke":"#000000","strokeWidth":"2.55511069px","strokeLinecap":"square","strokeLinejoin":"miter","strokeOpacity":"1" }}/>
    <path
       d="m 99.051871,76.824387 0,12.829038"
       id="path4296"
       style={{"opacity":"0.09714284","fill":"none","stroke":"#000000","strokeWidth":"2.55511069px","strokeLinecap":"square","strokeLinejoin":"miter","strokeOpacity":"1" }}/>
    <path
       d="m 93.941652,76.824387 0,12.829038"
       id="path4298"
       style={{"opacity":"0.09714284","fill":"none","stroke":"#000000","strokeWidth":"2.55511069px","strokeLinecap":"square","strokeLinejoin":"miter","strokeOpacity":"1" }}/>
    <path
       d="m 88.831434,76.824387 0,12.829038"
       id="path4300"
       style={{"opacity":"0.09714284","fill":"none","stroke":"#000000","strokeWidth":"2.55511069px","strokeLinecap":"square","strokeLinejoin":"miter","strokeOpacity":"1" }}/>
    <path
       d="m 83.721215,76.824387 0,12.829038"
       id="path4302"
       style={{"opacity":"0.09714284","fill":"none","stroke":"#000000","strokeWidth":"2.55511069px","strokeLinecap":"square","strokeLinejoin":"miter","strokeOpacity":"1" }}/>
    <g
       transform="translate(25.215111,8.0673369)"
       id="g21981">
      <rect
         width="5.0423279"
         height="3.5414283"
         x="-4.6224236"
         y="69.945557"
         id="rect19010"
         style={{"fill":"#2e3436","fillOpacity":"1","fillRule":"nonzero","stroke":"#363333","strokeWidth":"3.76234961","strokeMiterlimit":"4","strokeOpacity":"1","strokeDasharray":"none" }}/>
      <rect
         width="5.0423279"
         height="3.5414283"
         x="-4.6224236"
         y="69.945557"
         id="rect19981"
         style={{"fill":"#2e3436","fillOpacity":"1","fillRule":"nonzero","stroke":"#363333","strokeWidth":"3.76234961","strokeMiterlimit":"4","strokeOpacity":"1","strokeDasharray":"none" }}/>
      <rect
         width="7.1828671"
         height="5.6819677"
         x="-5.6926928"
         y="68.87529"
         id="rect20028"
         style={{"fill":"#2e3436","fillOpacity":"1","fillRule":"nonzero","stroke":"#ffffff","strokeWidth":"0.42145053","strokeMiterlimit":"4","strokeOpacity":"1","strokeDasharray":"none" }}/>
      <rect
         width="5.0423279"
         height="3.5414283"
         x="-4.6224232"
         y="78.200493"
         id="rect21975"
         style={{"fill":"#2e3436","fillOpacity":"1","fillRule":"nonzero","stroke":"#363333","strokeWidth":"3.76234961","strokeMiterlimit":"4","strokeOpacity":"1","strokeDasharray":"none","display":"inline" }}/>
      <rect
         width="5.0423279"
         height="3.5414283"
         x="-4.6224232"
         y="78.200493"
         id="rect21977"
         style={{"fill":"#2e3436","fillOpacity":"1","fillRule":"nonzero","stroke":"#363333","strokeWidth":"3.76234961","strokeMiterlimit":"4","strokeOpacity":"1","strokeDasharray":"none","display":"inline" }}/>
      <rect
         width="7.1828671"
         height="5.6819677"
         x="-5.6926923"
         y="77.130234"
         id="rect21979"
         style={{"fill":"#2e3436","fillOpacity":"1","fillRule":"nonzero","stroke":"#ffffff","strokeWidth":"0.42145053","strokeMiterlimit":"4","strokeOpacity":"1","strokeDasharray":"none","display":"inline" }}/>
    </g>
    <g
       transform="translate(36.021588,8.0673369)"
       id="g21989"
       style={{"display":"inline"}}>
      <rect
         width="5.0423279"
         height="3.5414283"
         x="-4.6224236"
         y="69.945557"
         id="rect21991"
         style={{"fill":"#2e3436","fillOpacity":"1","fillRule":"nonzero","stroke":"#363333","strokeWidth":"3.76234961","strokeMiterlimit":"4","strokeOpacity":"1","strokeDasharray":"none" }}/>
      <rect
         width="5.0423279"
         height="3.5414283"
         x="-4.6224236"
         y="69.945557"
         id="rect21993"
         style={{"fill":"#2e3436","fillOpacity":"1","fillRule":"nonzero","stroke":"#363333","strokeWidth":"3.76234961","strokeMiterlimit":"4","strokeOpacity":"1","strokeDasharray":"none" }}/>
      <rect
         width="7.1828671"
         height="5.6819677"
         x="-5.6926928"
         y="68.87529"
         id="rect21995"
         style={{"fill":"#2e3436","fillOpacity":"1","fillRule":"nonzero","stroke":"#ffffff","strokeWidth":"0.42145053","strokeMiterlimit":"4","strokeOpacity":"1","strokeDasharray":"none" }}/>
      <rect
         width="5.0423279"
         height="3.5414283"
         x="-4.6224232"
         y="78.200493"
         id="rect21997"
         style={{"fill":"#2e3436","fillOpacity":"1","fillRule":"nonzero","stroke":"#363333","strokeWidth":"3.76234961","strokeMiterlimit":"4","strokeOpacity":"1","strokeDasharray":"none","display":"inline" }}/>
      <rect
         width="5.0423279"
         height="3.5414283"
         x="-4.6224232"
         y="78.200493"
         id="rect21999"
         style={{"fill":"#2e3436","fillOpacity":"1","fillRule":"nonzero","stroke":"#363333","strokeWidth":"3.76234961","strokeMiterlimit":"4","strokeOpacity":"1","strokeDasharray":"none","display":"inline" }}/>
      <rect
         width="7.1828671"
         height="5.6819677"
         x="-5.6926923"
         y="77.130234"
         id="rect22001"
         style={{"fill":"#2e3436","fillOpacity":"1","fillRule":"nonzero","stroke":"#ffffff","strokeWidth":"0.42145053","strokeMiterlimit":"4","strokeOpacity":"1","strokeDasharray":"none","display":"inline" }}/>
    </g>
    <g
       transform="translate(46.828063,8.0673369)"
       id="g22003"
       style={{"display":"inline"}}>
      <rect
         width="5.0423279"
         height="3.5414283"
         x="-4.6224236"
         y="69.945557"
         id="rect22005"
         style={{"fill":"#2e3436","fillOpacity":"1","fillRule":"nonzero","stroke":"#363333","strokeWidth":"3.76234961","strokeMiterlimit":"4","strokeOpacity":"1","strokeDasharray":"none" }}/>
      <rect
         width="5.0423279"
         height="3.5414283"
         x="-4.6224236"
         y="69.945557"
         id="rect22007"
         style={{"fill":"#2e3436","fillOpacity":"1","fillRule":"nonzero","stroke":"#363333","strokeWidth":"3.76234961","strokeMiterlimit":"4","strokeOpacity":"1","strokeDasharray":"none" }}/>
      <rect
         width="7.1828671"
         height="5.6819677"
         x="-5.6926928"
         y="68.87529"
         id="rect22009"
         style={{"fill":"#2e3436","fillOpacity":"1","fillRule":"nonzero","stroke":"#ffffff","strokeWidth":"0.42145053","strokeMiterlimit":"4","strokeOpacity":"1","strokeDasharray":"none" }}/>
      <rect
         width="5.0423279"
         height="3.5414283"
         x="-4.6224232"
         y="78.200493"
         id="rect22011"
         style={{"fill":"#2e3436","fillOpacity":"1","fillRule":"nonzero","stroke":"#363333","strokeWidth":"3.76234961","strokeMiterlimit":"4","strokeOpacity":"1","strokeDasharray":"none","display":"inline" }}/>
      <rect
         width="5.0423279"
         height="3.5414283"
         x="-4.6224232"
         y="78.200493"
         id="rect22013"
         style={{"fill":"#2e3436","fillOpacity":"1","fillRule":"nonzero","stroke":"#363333","strokeWidth":"3.76234961","strokeMiterlimit":"4","strokeOpacity":"1","strokeDasharray":"none","display":"inline" }}/>
      <rect
         width="7.1828671"
         height="5.6819677"
         x="-5.6926923"
         y="77.130234"
         id="rect22015"
         style={{"fill":"#2e3436","fillOpacity":"1","fillRule":"nonzero","stroke":"#ffffff","strokeWidth":"0.42145053","strokeMiterlimit":"4","strokeOpacity":"1","strokeDasharray":"none","display":"inline" }}/>
    </g>
    <g
       transform="translate(57.33436,8.0673369)"
       id="g22017"
       style={{"display":"inline"}}>
      <rect
         width="5.0423279"
         height="3.5414283"
         x="-4.6224236"
         y="69.945557"
         id="rect22019"
         style={{"fill":"#2e3436","fillOpacity":"1","fillRule":"nonzero","stroke":"#363333","strokeWidth":"3.76234961","strokeMiterlimit":"4","strokeOpacity":"1","strokeDasharray":"none" }}/>
      <rect
         width="5.0423279"
         height="3.5414283"
         x="-4.6224236"
         y="69.945557"
         id="rect22021"
         style={{"fill":"#2e3436","fillOpacity":"1","fillRule":"nonzero","stroke":"#363333","strokeWidth":"3.76234961","strokeMiterlimit":"4","strokeOpacity":"1","strokeDasharray":"none" }}/>
      <rect
         width="7.1828671"
         height="5.6819677"
         x="-5.6926928"
         y="68.87529"
         id="rect22023"
         style={{"fill":"#2e3436","fillOpacity":"1","fillRule":"nonzero","stroke":"#ffffff","strokeWidth":"0.42145053","strokeMiterlimit":"4","strokeOpacity":"1","strokeDasharray":"none" }}/>
      <rect
         width="5.0423279"
         height="3.5414283"
         x="-4.6224232"
         y="78.200493"
         id="rect22025"
         style={{"fill":"#2e3436","fillOpacity":"1","fillRule":"nonzero","stroke":"#363333","strokeWidth":"3.76234961","strokeMiterlimit":"4","strokeOpacity":"1","strokeDasharray":"none","display":"inline" }}/>
      <rect
         width="5.0423279"
         height="3.5414283"
         x="-4.6224232"
         y="78.200493"
         id="rect22027"
         style={{"fill":"#2e3436","fillOpacity":"1","fillRule":"nonzero","stroke":"#363333","strokeWidth":"3.76234961","strokeMiterlimit":"4","strokeOpacity":"1","strokeDasharray":"none","display":"inline" }}/>
      <rect
         width="7.1828671"
         height="5.6819677"
         x="-5.6926923"
         y="77.130234"
         id="rect22029"
         style={{"fill":"#2e3436","fillOpacity":"1","fillRule":"nonzero","stroke":"#ffffff","strokeWidth":"0.42145053","strokeMiterlimit":"4","strokeOpacity":"1","strokeDasharray":"none","display":"inline" }}/>
    </g>
    <g
       transform="translate(67.840656,8.0673369)"
       id="g22031"
       style={{"display":"inline"}}>
      <rect
         width="5.0423279"
         height="3.5414283"
         x="-4.6224236"
         y="69.945557"
         id="rect22033"
         style={{"fill":"#2e3436","fillOpacity":"1","fillRule":"nonzero","stroke":"#363333","strokeWidth":"3.76234961","strokeMiterlimit":"4","strokeOpacity":"1","strokeDasharray":"none" }}/>
      <rect
         width="5.0423279"
         height="3.5414283"
         x="-4.6224236"
         y="69.945557"
         id="rect22035"
         style={{"fill":"#2e3436","fillOpacity":"1","fillRule":"nonzero","stroke":"#363333","strokeWidth":"3.76234961","strokeMiterlimit":"4","strokeOpacity":"1","strokeDasharray":"none" }}/>
      <rect
         width="7.1828671"
         height="5.6819677"
         x="-5.6926928"
         y="68.87529"
         id="rect22037"
         style={{"fill":"#2e3436","fillOpacity":"1","fillRule":"nonzero","stroke":"#ffffff","strokeWidth":"0.42145053","strokeMiterlimit":"4","strokeOpacity":"1","strokeDasharray":"none" }}/>
      <rect
         width="5.0423279"
         height="3.5414283"
         x="-4.6224232"
         y="78.200493"
         id="rect22039"
         style={{"fill":"#2e3436","fillOpacity":"1","fillRule":"nonzero","stroke":"#363333","strokeWidth":"3.76234961","strokeMiterlimit":"4","strokeOpacity":"1","strokeDasharray":"none","display":"inline" }}/>
      <rect
         width="5.0423279"
         height="3.5414283"
         x="-4.6224232"
         y="78.200493"
         id="rect22041"
         style={{"fill":"#2e3436","fillOpacity":"1","fillRule":"nonzero","stroke":"#363333","strokeWidth":"3.76234961","strokeMiterlimit":"4","strokeOpacity":"1","strokeDasharray":"none","display":"inline" }}/>
      <rect
         width="7.1828671"
         height="5.6819677"
         x="-5.6926923"
         y="77.130234"
         id="rect22043"
         style={{"fill":"#2e3436","fillOpacity":"1","fillRule":"nonzero","stroke":"#ffffff","strokeWidth":"0.42145053","strokeMiterlimit":"4","strokeOpacity":"1","strokeDasharray":"none","display":"inline" }}/>
    </g>
    <path
       d="m -25.215112,86.725266 a 2.2513492,2.2513492 0 1 1 -4.502698,0 2.2513492,2.2513492 0 1 1 4.502698,0 z"
       transform="translate(102.88665,-8.405037)"
       id="path22045"
       style={{"fill":"#4e9a06","fillOpacity":"1","fillRule":"nonzero","stroke":"#ffffff","strokeWidth":"0.40000001","strokeMiterlimit":"4","strokeOpacity":"1","strokeDasharray":"none" }}/>
    <path
       d="m -25.215112,86.725266 a 2.2513492,2.2513492 0 1 1 -4.502698,0 2.2513492,2.2513492 0 1 1 4.502698,0 z"
       transform="translate(102.88665,-3.4520692)"
       id="path22049"
       style={{"fill":"#a40000","fillOpacity":"1","fillRule":"nonzero","stroke":"#ffffff","strokeWidth":"0.40000001","strokeMiterlimit":"4","strokeOpacity":"1","strokeDasharray":"none","display":"inline" }}/>
    <path
       d="m -25.215112,86.725266 a 2.2513492,2.2513492 0 1 1 -4.502698,0 2.2513492,2.2513492 0 1 1 4.502698,0 z"
       transform="translate(102.88665,1.6509881)"
       id="path22051"
       style={{"fill":"#4e9a06","fillOpacity":"1","fillRule":"nonzero","stroke":"#ffffff","strokeWidth":"0.40000001","strokeMiterlimit":"4","strokeOpacity":"1","strokeDasharray":"none","display":"inline" }}/>
  </g>

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
    var pathName = "switches" + match;
    AppActionCreators.navigateTo(pathName, {nodeId: this.props.id});
  }
});

module.exports = Switches;