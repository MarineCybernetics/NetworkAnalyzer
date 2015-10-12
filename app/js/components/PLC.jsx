"use strict";

var React = require('react'),
    AppActionCreators = require('../actions/AppActionCreators');

var PLC = React.createClass({
  displayName: 'PLC',
  render: function() {
    return (<g transform={this.props.transform} className={this.props.id} onClick={this._onClick} style={{"cursor":"pointer"}}>

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
     d="m 107.12413,25.97206 c -0.005,-1.628983 -0.7642,-2.685601 -2.20893,-3.332957 0,-3e-6 -44.627739,-16.729168 -44.627739,-16.729168 0,0 -1.752246,-0.6464571 -4.644515,-0.6379698 0,0 -25.151423,0.073806 -25.151423,0.073806 -2.821694,0.00828 -4.230331,1.7268634 -4.22269,4.329235 L 26.563772,110.18329 c 0.0075,2.56689 1.884035,4.14841 4.817691,4.1398 l 25.151423,-0.0738 c 0,0 2.008821,0.27029 3.420148,-0.25439 L 104.72425,96.351799 c 1.33281,-0.484857 2.57049,-1.66757 2.59778,-2.939819 l -0.1979,-67.43992 z"
     id="path4196"
     style={{"fill":"none","stroke":"#535353","strokeWidth":"5.21276999","strokeLinecap":"round","strokeLinejoin":"round","strokeMiterlimit":"4","strokeOpacity":"1","strokeDasharray":"none"}} />
  <path
     d="m 57.452657,5.2351172 1.810019,1.9875445 0.124753,98.0253883 -0.800516,9.02675 -27.206715,0.0798 c -2.933654,0.009 -4.809052,-1.56802 -4.816585,-4.13492 L 26.268518,9.6580393 c -0.0076,-2.6023721 1.400077,-4.3355216 4.221771,-4.3438018 l 26.962368,-0.07912 z"
     id="path4170"
     style={{"fill":"url(#linearGradient2966)","fillOpacity":"1","fillRule":"evenodd","stroke":"none"}} />
  <path
     d="m 60.275924,5.9448755 c -3.82194,-1.8504961 -6.236685,0.016697 -6.228759,2.7177599 0,0 0.298285,101.6485746 0.298285,101.6485746 0.07062,2.91647 2.651516,4.80164 5.596015,3.707 L 104.74762,96.386635 c 1.33281,-0.484854 2.57035,-1.714112 2.59765,-2.986361 L 107.1475,26.006899 c -0.005,-1.628983 -0.79914,-2.697136 -2.24387,-3.344493 0,0 -44.627706,-16.7175305 -44.627706,-16.7175305 z"
     id="path3093"
     style={{"fill":"url(#radialGradient2963)","fillOpacity":"1","fillRule":"evenodd","stroke":"none"}} />
  <rect
     width="45.937534"
     height="14.498016"
     x="17.352409"
     y="-46.54921"
     transform="matrix(0.00293446,0.99999569,-0.99999569,0.00293446,0,0)"
     id="rect4174"
     style={{"fill":"url(#linearGradient2960)","fillOpacity":"1","fillRule":"evenodd","stroke":"none","strokeWidth":"2.40899992","marker":"none","visibility":"visible","display":"inline","overflow":"visible"}} />
  <path
     d="m 32.101984,17.258279 c 0,0 10.455429,-0.03068 10.455429,-0.03068 -8.272212,4.808386 -10.391975,21.654435 -10.356479,33.750634 0,0 -0.09895,-33.719953 -0.09895,-33.719953 z"
     id="path4194"
     style={{"opacity":"0.81142853","fill":"url(#linearGradient2957)","fillOpacity":"1","fillRule":"evenodd","stroke":"none"}} />
  <path
     d="m 61.336077,113.44799 c -3.257413,0.17512 -6.03911,-1.06134 -6.1188,-3.428 0,0 -0.291542,-99.351623 -0.291544,-99.351623 -0.0099,-3.3602203 0.832648,-4.8705035 2.246538,-5.4384543 -2.46058,0.246386 -4.292391,2.1650032 -4.282768,5.4444293 3e-6,0 0.291545,99.351618 0.291545,99.351618 0.09442,2.80423 3.724944,4.55758 7.815886,3.50134 l 0.339143,-0.0793 z"
     id="path4201"
     style={{"fill":"#ffffff","fillOpacity":"1","fillRule":"evenodd","stroke":"none"}} />
  <path
     d="m 60.690538,19.270095 c -1.463163,0.0043 -2.653981,-1.59092 -2.659768,-3.563008 -0.0058,-1.972089 1.175648,-3.574264 2.638811,-3.578557 1.463164,-0.0043 2.653982,1.590919 2.659769,3.563008 0.0058,1.972089 -1.175648,3.574263 -2.638812,3.578557 z"
     id="path4224"
     style={{"fill":"#ffffff","fillOpacity":"0.45762706","fillRule":"evenodd","stroke":"none","strokeWidth":"2","marker":"none","visibility":"visible","display":"inline","overflow":"visible"}} />
  <path
     d="m 61.180028,107.56987 c -1.463163,0.004 -2.653981,-1.59092 -2.659768,-3.56301 -0.0058,-1.97209 1.175648,-3.57426 2.638811,-3.57855 1.463164,-0.004 2.653982,1.59092 2.659769,3.563 0.0058,1.97209 -1.175648,3.57427 -2.638812,3.57856 z"
     id="path4226"
     style={{"fill":"#ffffff","fillOpacity":"0.45762706","fillRule":"evenodd","stroke":"none","strokeWidth":"2","marker":"none","visibility":"visible","display":"inline","overflow":"visible"}} />
  <path
     d="m 105.94593,26.905545 c -0.005,-1.568234 -0.73571,-2.585448 -2.12656,-3.208661 0,-2e-6 -43.290686,-16.5930345 -43.290686,-16.5930345 0,0 -1.686901,-0.6223489 -4.471311,-0.6141781 0,0 -24.213462,0.071054 -24.213462,0.071054 -3.530958,0.010362 -4.23691,1.1698192 -4.228111,4.1682646 l 0.288242,98.22616 c 0.01012,3.44856 0.836383,3.99658 4.800925,3.98494 l 24.213462,-0.071 c 0,0 1.933904,0.2602 3.292601,-0.24489 l 43.75223,-17.31287 c 1.2831,-0.466773 2.1493,-1.441524 2.17558,-2.666328 l -0.19291,-65.739407 z"
     id="path4252"
     style={{"fill":"none","stroke":"url(#linearGradient2948)","strokeWidth":"2.60638547","strokeLinecap":"round","strokeLinejoin":"round","strokeMiterlimit":"4","strokeOpacity":"1","strokeDasharray":"none"}} />
  <path
     d="m 46.185006,102.29495 -13.086433,0.0384"
     id="path4282"
     style={{"fill":"none","stroke":"#ffffff","strokeWidth":"2.60638618px","strokeLinecap":"square","strokeLinejoin":"miter","strokeOpacity":"0.42372885"}} />
  <path
     d="m 46.013908,97.082659 -13.086433,0.0384"
     id="path4284"
     style={{"fill":"none","stroke":"#ffffff","strokeWidth":"2.60638618px","strokeLinecap":"square","strokeLinejoin":"miter","strokeOpacity":"0.42372885"}} />
  <path
     d="m 45.998611,91.869912 -13.086433,0.0384"
     id="path4286"
     style={{"fill":"none","stroke":"#ffffff","strokeWidth":"2.60638618px","strokeLinecap":"square","strokeLinejoin":"miter","strokeOpacity":"0.42372885"}} />
  <path
     d="m 45.983315,86.657164 -13.086433,0.0384"
     id="path4288"
     style={{"fill":"none","stroke":"#ffffff","strokeWidth":"2.60638618px","strokeLinecap":"square","strokeLinejoin":"miter","strokeOpacity":"0.42372885"}} />
  <path
     d="m 45.968018,81.444417 -13.086433,0.0384"
     id="path4290"
     style={{"fill":"none","stroke":"#ffffff","strokeWidth":"2.60638618px","strokeLinecap":"square","strokeLinejoin":"miter","strokeOpacity":"0.42372885"}} />
  <path
     d="m 45.952721,76.23167 -13.086433,0.0384"
     id="path4292"
     style={{"fill":"none","stroke":"#ffffff","strokeWidth":"2.60638618px","strokeLinecap":"square","strokeLinejoin":"miter","strokeOpacity":"0.42372885"}} />
  <path
     d="m 46.047302,99.688957 -13.086433,0.0384"
     id="path4294"
     style={{"opacity":"0.09714284","fill":"none","stroke":"#000000","strokeWidth":"2.60638618px","strokeLinecap":"square","strokeLinejoin":"miter","strokeOpacity":"1"}} />
  <path
     d="m 45.876204,94.476667 -13.086433,0.0384"
     id="path4296"
     style={{"opacity":"0.09714284","fill":"none","stroke":"#000000","strokeWidth":"2.60638618px","strokeLinecap":"square","strokeLinejoin":"miter","strokeOpacity":"1"}} />
  <path
     d="m 45.860907,89.26392 -13.086433,0.0384"
     id="path4298"
     style={{"opacity":"0.09714284","fill":"none","stroke":"#000000","strokeWidth":"2.60638618px","strokeLinecap":"square","strokeLinejoin":"miter","strokeOpacity":"1"}} />
  <path
     d="m 45.845611,84.051172 -13.086433,0.0384"
     id="path4300"
     style={{"opacity":"0.09714284","fill":"none","stroke":"#000000","strokeWidth":"2.60638618px","strokeLinecap":"square","strokeLinejoin":"miter","strokeOpacity":"1"}} />
  <path
     d="m 45.830314,78.838425 -13.086433,0.0384"
     id="path4302"
     style={{"opacity":"0.09714284","fill":"none","stroke":"#000000","strokeWidth":"2.60638618px","strokeLinecap":"square","strokeLinejoin":"miter","strokeOpacity":"1"}} />
  <path
     d="m 46.565351,17.260159 -14.416505,0.0423 0.09608,32.74257 0.802488,-31.849258 13.517935,-0.935617 z"
     id="path4572"
     style={{"opacity":"0.43999999","fill":"#ffffff","fillOpacity":"1","fillRule":"evenodd","stroke":"none"}} />
  <path
     d="m 100.4524,33.6671 c -1.463159,0.0043 -2.653977,-1.59092 -2.659764,-3.563008 -0.0058,-1.972089 1.175648,-3.574264 2.638814,-3.578557 1.46316,-0.0043 2.65398,1.590919 2.65977,3.563008 0.006,1.972089 -1.17565,3.574263 -2.63882,3.578557 z"
     id="path4224-5"
     style={{"fill":"#ffffff","fillOpacity":"0.45762706","fillRule":"evenodd","stroke":"none","strokeWidth":"2","marker":"none","visibility":"visible","display":"inline","overflow":"visible"}} />
  <path
     d="m 101.17761,92.409309 c -1.463158,0.0043 -2.653978,-1.59092 -2.659758,-3.563008 -0.006,-1.972089 1.17564,-3.574264 2.638808,-3.578557 1.46316,-0.0043 2.65398,1.590919 2.65977,3.563008 0.006,1.972089 -1.17565,3.574263 -2.63882,3.578557 z"
     id="path4224-6"
     style={{"fill":"#ffffff","fillOpacity":"0.45762706","fillRule":"evenodd","stroke":"none","strokeWidth":"2","marker":"none","visibility":"visible","display":"inline","overflow":"visible"}} />
  <path
     d="m 43.826879,58.81792 a 2.2513492,2.2513492 0 1 1 0,-4.502698 2.2513492,2.2513492 0 1 1 0,4.502698 z"
     id="path22045"
     style={{"fill":"#4e9a06","fillOpacity":"1","fillRule":"nonzero","stroke":"#ffffff","strokeWidth":"0.40000001","strokeMiterlimit":"4","strokeOpacity":"1","strokeDasharray":"none"}} />
  <path
     d="m 38.873911,58.81792 a 2.2513492,2.2513492 0 1 1 0,-4.502698 2.2513492,2.2513492 0 1 1 0,4.502698 z"
     id="path22049"
     style={{"fill":"#a40000","fillOpacity":"1","fillRule":"nonzero","stroke":"#ffffff","strokeWidth":"0.40000001","strokeMiterlimit":"4","strokeOpacity":"1","strokeDasharray":"none","display":"inline"}} />
  <path
     d="m 33.770854,58.81792 a 2.2513492,2.2513492 0 1 1 0,-4.502698 2.2513492,2.2513492 0 1 1 0,4.502698 z"
     id="path22051"
     style={{"fill":"#4e9a06","fillOpacity":"1","fillRule":"nonzero","stroke":"#ffffff","strokeWidth":"0.40000001","strokeMiterlimit":"4","strokeOpacity":"1","strokeDasharray":"none","display":"inline"}} />
  <path
     d="m 43.826879,64.982227 a 2.2513492,2.2513492 0 1 1 0,-4.502698 2.2513492,2.2513492 0 1 1 0,4.502698 z"
     id="path22045-7"
     style={{"fill":"#4e9a06","fillOpacity":"1","fillRule":"nonzero","stroke":"#ffffff","strokeWidth":"0.40000001","strokeMiterlimit":"4","strokeOpacity":"1","strokeDasharray":"none"}} />
  <path
     d="m 38.873911,64.982227 a 2.2513492,2.2513492 0 1 1 0,-4.502698 2.2513492,2.2513492 0 1 1 0,4.502698 z"
     id="path22049-4"
     style={{"fill":"#4e9a06","fillOpacity":"1","fillRule":"nonzero","stroke":"#ffffff","strokeWidth":"0.40000001","strokeMiterlimit":"4","strokeOpacity":"1","strokeDasharray":"none","display":"inline"}} />
  <path
     d="m 33.770854,64.982227 a 2.2513492,2.2513492 0 1 1 0,-4.502698 2.2513492,2.2513492 0 1 1 0,4.502698 z"
     id="path22051-1"
     style={{"fill":"#4e9a06","fillOpacity":"1","fillRule":"nonzero","stroke":"#ffffff","strokeWidth":"0.40000001","strokeMiterlimit":"4","strokeOpacity":"1","strokeDasharray":"none","display":"inline"}} />    
   
  </g>);
  },
  _onClick: function() {
    var tapId = this.props.tapId;
    var resolutionRE = /Topology(\w)/i;
    var match = tapId.match(resolutionRE)[1];
    var pathName = "plc" + match;
    AppActionCreators.navigateTo(pathName, {nodeId: this.props.id});
  }
});

module.exports = PLC;