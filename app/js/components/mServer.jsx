"use strict";

var React = require('react'),
    AppActionCreators = require('../actions/AppActionCreators');

var mServer = React.createClass({
  displayName: 'mServer',
  componentWillMount: function() {
    $('[data-toggle="tooltip"]').tooltip();     
  },
  getInitialState: function() {
    $('[data-toggle="tooltip"]').tooltip(); 
    return {};
  },
  componentDidMount: function() {
    $('[data-toggle="tooltip"]').tooltip();   
  },  
  render: function() {
    return (
      <svg title ={this.props.IP} data-container="#topo" data-toggle="tooltip" data-placement="right">
      <g transform={this.props.transform} className={this.props.id} onClick={this._onClick} style={{"cursor":"pointer"}}>
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
     style={{"display":"inline"}}
     transform="translate(0,-64)" />
  <g
     id="layer2"
     style={{"display":"inline"}}
     transform="matrix(0.54783591,0,0,0.54783591,9.7257156,-6.5103516)">
    <path
       d="m 11.816112,29.338746 0,95.177864 62.405743,0 0,-95.751224 -11.481446,-12.040572 -40.016921,0 -10.907376,12.613932 z"
       id="path3626"
       style={{"fill":"url(#linearGradient25335)","fillOpacity":"1","fillRule":"evenodd","stroke":"#5e5e5e","strokeWidth":"2.83662605px","strokeLinecap":"round","strokeLinejoin":"round","strokeOpacity":"1"}} />
    <path
       d="m 23.302446,18.143127 -10.068019,14.183131 59.56912,0 -10.90702,-13.76598 -38.594081,-0.417151 z"
       id="path5791"
       style={{"fill":"#ffffff","fillOpacity":"0.65536726","fillRule":"evenodd","stroke":"none"}} />
    <rect
       width="45.386024"
       height="11.346502"
       x="21.744299"
       y="37.9995"
       id="rect4553"
       style={{"opacity":"0.34857142","fill":"#ffffff","fillOpacity":"1","fillRule":"evenodd","stroke":"#ffffff","strokeWidth":"2.83662605","strokeLinecap":"butt","strokeLinejoin":"miter","strokeMiterlimit":"4","strokeOpacity":"1","strokeDasharray":"none","strokeDashoffset":"0","marker":"none","visibility":"visible","display":"inline","overflow:":"visible"}} />
    <path
       d="m 14.652735,31.07338 0,90.60658 56.732536,0 0,-91.12985 -10.506025,-10.988653 -36.245787,0 -9.980724,11.511923 z"
       id="path4394"
       style={{"fill":"none","stroke":"#ffffff","strokeWidth":"2.83662724","strokeLinecap":"butt","strokeLinejoin":"miter","strokeMiterlimit":"4","strokeOpacity":"1","strokeDasharray":"none"}} />
    <rect
       width="31.202894"
       height="11.346499"
       x="35.927433"
       y="74.875633"
       id="rect4408"
       style={{"opacity":"0.52571429","fill":"url(#linearGradient25327)","fillOpacity":"1","fillRule":"evenodd","stroke":"url(#linearGradient25329)","strokeWidth":"2.83662701","strokeLinecap":"butt","strokeLinejoin":"miter","strokeMiterlimit":"4","strokeOpacity":"1","strokeDasharray":"none","strokeDashoffset":"0","marker":"none","visibility":"visible","display":"inline","overflow:":"visible"}} />
    <rect
       width="31.202871"
       height="11.346502"
       x="34.509102"
       y="73.457321"
       id="rect4398"
       style={{"fill":"#c8c8c8","fillOpacity":"1","fillRule":"evenodd","stroke":"#acacac","strokeWidth":"2.83662534","strokeLinecap":"butt","strokeLinejoin":"miter","strokeMiterlimit":"4","strokeOpacity":"1","strokeDasharray":"none","strokeDashoffset":"0","marker":"none","visibility":"visible","display":"inline","overflow:":"visible"}} />
    <rect
       width="45.386024"
       height="11.346502"
       x="21.744314"
       y="55.019253"
       id="rect4551"
       style={{"opacity":"0.34857142","fill":"#ffffff","fillOpacity":"1","fillRule":"evenodd","stroke":"#ffffff","strokeWidth":"2.83662558","strokeLinecap":"butt","strokeLinejoin":"miter","strokeMiterlimit":"4","strokeOpacity":"1","strokeDasharray":"none","strokeDashoffset":"0","marker":"none","visibility":"visible","display":"inline","overflow:":"visible"}} />
    <rect
       width="45.386032"
       height="11.346502"
       x="20.325985"
       y="53.600941"
       id="rect4430"
       style={{"fill":"#c8c8c8","fillOpacity":"1","fillRule":"evenodd","stroke":"#acacac","strokeWidth":"2.83662653","strokeLinecap":"butt","strokeLinejoin":"miter","strokeMiterlimit":"4","strokeOpacity":"1","strokeDasharray":"none","strokeDashoffset":"0","marker":"none","visibility":"visible","display":"inline","overflow:":"visible"}} />
    <rect
       width="45.386032"
       height="11.346502"
       x="20.326008"
       y="36.581188"
       id="rect4436"
       style={{"fill":"#c8c8c8","fillOpacity":"1","fillRule":"evenodd","stroke":"#acacac","strokeWidth":"2.83662605","strokeLinecap":"butt","strokeLinejoin":"miter","strokeMiterlimit":"4","strokeOpacity":"1","strokeDasharray":"none","strokeDashoffset":"0","marker":"none","visibility":"visible","display":"inline","overflow:":"visible"}}  />
    <path
       d="m 28.836818,80.548442 a 4.2554144,4.2553847 0 0 1 -8.510828,0 4.2554144,4.2553847 0 1 1 8.510828,0 z"
       id="path4396"
       style={{"fill":"#d40000","fillOpacity":"1","fillRule":"evenodd","stroke":"#979797","strokeWidth":"1.44772947","strokeLinecap":"butt","strokeLinejoin":"miter","strokeMiterlimit":"4","strokeOpacity":"1","strokeDasharray":"none","strokeDashoffset":"0","marker":"none","visibility":"visible","display":"inline","overflow:":"visible"}} />
    <path
       d="m 24.453403,79.652435 a 1.279992,1.2799822 0 0 1 -2.559984,0 1.279992,1.2799822 0 1 1 2.559984,0 z"
       id="path4445"
       style={{"fill":"#f44800","fillOpacity":"1","fillRule":"evenodd","stroke":"none","strokeWidth":"1","marker":"none","visibility":"visible","display":"inline","overflow:":"visible"}} />
    <rect
       width="2.8366244"
       height="28.36627"
       x="30.254183"
       y="91.895432"
       id="rect4457"
       style={{"fill":"url(#linearGradient25317)","fillOpacity":"1","fillRule":"evenodd","stroke":"none","strokeWidth":"1","marker":"none","visibility":"visible","display":"inline","overflow:":"visible"}} />
    <rect
       width="2.8366244"
       height="28.36627"
       x="35.927406"
       y="91.895432"
       id="rect4461"
       style={{"fill":"url(#linearGradient25314)","fillOpacity":"1","fillRule":"evenodd","stroke":"none","strokeWidth":"1","marker":"none","visibility":"visible","display":"inline","overflow:":"visible"}} />
    <rect
       width="2.8366244"
       height="28.36627"
       x="41.600655"
       y="91.895432"
       id="rect4465"
       style={{"fill":"url(#linearGradient25311)","fillOpacity":"1","fillRule":"evenodd","stroke":"none","strokeWidth":"1","marker":"none","visibility":"visible","display":"inline","overflow:":"visible"}} />
    <rect
       width="2.8366244"
       height="28.36627"
       x="47.273903"
       y="91.895432"
       id="rect4469"
       style={{"fill":"url(#linearGradient25308)","fillOpacity":"1","fillRule":"evenodd","stroke":"none","strokeWidth":"1","marker":"none","visibility":"visible","display":"inline","overflow:":"visible"}} />
    <rect
       width="2.8366244"
       height="28.36627"
       x="52.947189"
       y="91.895432"
       id="rect4473"
       style={{"fill":"url(#linearGradient25305)","fillOpacity":"1","fillRule":"evenodd","stroke":"none","strokeWidth":"1","marker":"none","visibility":"visible","display":"inline","overflow:":"visible"}} />
    <rect
       width="2.8366244"
       height="28.36627"
       x="58.620438"
       y="91.895432"
       id="rect4477"
       style={{"opacity":"0.54285709","fill":"url(#linearGradient25302)","fillOpacity":"1","fillRule":"evenodd","stroke":"none","strokeWidth":"1","marker":"none","visibility":"visible","display":"inline","overflow:":"visible"}} />
    <rect
       width="2.8366244"
       height="28.36627"
       x="27.417519"
       y="91.895432"
       id="rect4481"
       style={{"opacity":"0.16000001","fill":"url(#linearGradient25299)","fillOpacity":"1","fillRule":"evenodd","stroke":"none","strokeWidth":"1","marker":"none","visibility":"visible","display":"inline","overflow:":"visible"}} />
    <rect
       width="2.8366244"
       height="28.36627"
       x="33.090809"
       y="91.895432"
       id="rect4483"
       style={{"opacity":"0.29142851","fill":"url(#linearGradient25296)","fillOpacity":"1","fillRule":"evenodd","stroke":"none","strokeWidth":"1","marker":"none","visibility":"visible","display":"inline","overflow:":"visible"}} />
    <rect
       width="2.8366244"
       height="28.36627"
       x="38.764061"
       y="91.895432"
       id="rect4485"
       style={{"opacity":"0.29142851","fill":"url(#linearGradient25293)","fillOpacity":"1","fillRule":"evenodd","stroke":"none","strokeWidth":"1","marker":"none","visibility":"visible","display":"inline","overflow:":"visible"}} />
    <rect
       width="2.8366244"
       height="28.36627"
       x="44.437313"
       y="91.895432"
       id="rect4487"
       style={{"opacity":"0.29142851","fill":"url(#linearGradient25290)","fillOpacity":"1","fillRule":"evenodd","stroke":"none","strokeWidth":"1","marker":"none","visibility":"visible","display":"inline","overflow:":"visible"}} />
    <rect
       width="2.8366244"
       height="28.36627"
       x="50.110527"
       y="91.895432"
       id="rect4489"
       style={{"opacity":"0.29142851","fill":"url(#linearGradient25287)","fillOpacity":"1","fillRule":"evenodd","stroke":"none","strokeWidth":"1","marker":"none","visibility":"visible","display":"inline","overflow:":"visible"}} />
    <rect
       width="2.8366244"
       height="28.36627"
       x="55.783775"
       y="91.895432"
       id="rect4491"
       style={{"opacity":"0.22857145","fill":"url(#linearGradient25284)","fillOpacity":"1","fillRule":"evenodd","stroke":"none","strokeWidth":"1","marker":"none","visibility":"visible","display":"inline","overflow":"visible"}} />
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
    var pathName = "server" + match;
    AppActionCreators.navigateTo(pathName, {nodeId: this.props.id});
  }
});

module.exports = mServer;