"use strict";

var React = require('react'),
    AppActionCreators = require('../actions/AppActionCreators');

var Chair = React.createClass({
  displayName: 'Chair',
  render: function() {
    return (<svg
   id="svg2">
<g transform={this.props.transform} className={this.props.id} onClick={this._onClick} style={{"cursor":"pointer"}}>   
  <defs
     id="defs66" />
  <g
     id="layer1"
     transform="translate(-277.96,-475.50001)">
    <g
       id="g8247"
       transform="matrix(0.65593933,0,0,0.65593933,94.920824,191.92635)">
      <rect
         id="rect3001"
         style={{"fill":"#c9c9c9"}}
         rx="7.3214002"
         ry="7.3214002"
         height="138.57001"
         width="192.14"
         y="463.42999"
         x="279.45999" />
      <g
         id="g8162">
        <path
           id="rect3003"
           style={{"fill":"#515151"}}
           d="m 316.43,485.4 118.48,0 c 0,0 6,17.197 6,47.946 0,30.75 -6,47.946 -6,47.946 l -118.48,0 c 0,0 -6,-15.054 -6,-47.946 0,-32.893 6,-47.946 6,-47.946 z" />
        <g
           id="g8123">
          <rect
             id="rect3006"
             style={{"fill":"#a8a7a5"}}
             height="80.536003"
             width="109.11"
             y="493.07999"
             x="321.12" />
          <g
             id="g8086">
            <g
               id="g3014"
               transform="translate(-1.3304,1.7768)">
              <rect
                 id="rect3008"
                 style={{"fill":"#0000ff","stroke":"#000080"}}
                 height="9.9106998"
                 width="13.08"
                 y="561.41998"
                 x="322.95001" />
              <text
                 id="text3010"
                 style={{"font-size":"5.03060007px","line-height":"125%","font-family":"'Agency FB'","text-align":"center","letter-spacing":"0px","word-spacing":"0px","text-anchor":"middle","fill":"#cccccc"}}
                 y="568.30212"
                 x="329.48785"><tspan
                   id="tspan3012"
                   y="568.30212"
                   x="329.48785">MENU</tspan></text>
            </g>
            <g
               id="g3810"
               transform="translate(1.6964,1.7768)">
              <rect
                 id="rect3021"
                 style={{"fill":"#0000ff","stroke":"#000080"}}
                 height="9.9106998"
                 width="13.08"
                 y="561.41998"
                 x="414.95001" />
              <text
                 id="text3023"
                 style={{"font-size":"4.5px","line-height":"125%","font-family":"'Agency FB'","text-align":"center","letter-spacing":"0px","word-spacing":"0px","text-anchor":"middle","fill":"#cccccc"}}
                 y="568.10376"
                 x="421.55035"><tspan
                   id="tspan3025"
                   x="421.55035"
                   y="568.10376">ALARMS</tspan></text>
            </g>
            <g
               id="g3819"
               transform="translate(7.7802,0)">
              <rect
                 id="rect3037"
                 style={{"fill":"#008000","stroke":"#333333","stroke-width":"1.03939998"}}
                 height="11.082"
                 width="87.078003"
                 y="496.01001"
                 x="324.35001" />
              <text
                 id="text3815"
                 style={{"font-size":"10.07499981px","line-height":"125%","font-family":"'Agency FB'","text-align":"center","letter-spacing":"0px","word-spacing":"0px","text-anchor":"middle","fill":"#ffffff"}}
                 y="505.38654"
                 x="367.73691"><tspan
                   id="tspan3817"
                   y="505.38654"
                   x="367.73691">OVERVIEW</tspan></text>
            </g>
            <g
               id="g7699"
               transform="translate(-35.134,-1.5357)">
              <rect
                 id="rect3824"
                 style={{"fill":"#babdb6","stroke":"#cc0000"}}
                 rx="17.129999"
                 ry="17.129999"
                 height="46.964001"
                 width="46.964001"
                 y="515.40002"
                 x="387.32001" />
              <g
                 id="g7677">
                <g
                   id="g7644">
                  <g
                     id="g3835">
                    <path
                       id="path3828"
                       style={{"fill":"none","stroke":"#008000"}}
                       d="m 412.73,561.6 c -2.569,-2.569 -4.158,-6.1182 -4.158,-10.038 0,-7.8405 6.356,-14.196 14.196,-14.196 7.8405,0 14.196,6.356 14.196,14.196"
                       transform="matrix(1.3038,0,0,1.3038,-140.39,-180.22)" />
                    <path
                       id="path3831"
                       style={{"fill":"none","stroke":"#ffff00"}}
                       d="m 432.81,541.52 c 2.569,2.569 4.158,6.1182 4.158,10.038"
                       transform="matrix(1.3038,0,0,1.3038,-140.39,-180.22)" />
                    <path
                       id="path3833"
                       style={{"fill":"none","stroke":"#ff0000"}}
                       d="m 435.85,546.03 c 0.71838,1.6984 1.1156,3.5658 1.1156,5.5259 0,3.9202 -1.589,7.4693 -4.158,10.038"
                       transform="matrix(1.3038,0,0,1.3038,-140.39,-180.22)" />
                  </g>
                  <path
                     id="path7642"
                     style={{"fill":"none","stroke":"#ff0000","stroke-width":"1px","stroke-linecap":"square"}}
                     d="m 421.39,548.98 2.8946,2.7603" />
                  <path
                     id="path7640"
                     style={{"fill":"none","stroke":"#ff0000","stroke-width":"1px","stroke-linecap":"square"}}
                     d="m 424.35,543.46 3.719,1.4721" />
                  <path
                     id="path7638"
                     style={{"fill":"none","stroke":"#ff0000","stroke-width":"1px","stroke-linecap":"square"}}
                     d="m 425.17,537.37 3.9886,-0.29703" />
                  <path
                     id="path7636"
                     style={{"fill":"none","stroke":"#ffff00","stroke-width":"1px","stroke-linecap":"square"}}
                     d="m 423.38,531.47 3.4653,-1.9974" />
                  <path
                     id="path7634"
                     style={{"fill":"none","stroke":"#008000","stroke-width":"1px","stroke-linecap":"square"}}
                     d="m 419.25,526.93 2.3203,-3.258" />
                  <path
                     id="path7632"
                     style={{"fill":"none","stroke":"#008000","stroke-width":"1px","stroke-linecap":"square"}}
                     d="m 413.73,524.53 0.70724,-3.9367" />
                  <path
                     id="path7630"
                     style={{"fill":"none","stroke":"#008000","stroke-width":"1px","stroke-linecap":"square"}}
                     d="m 407.34,524.64 -0.90177,-3.8967" />
                  <path
                     id="path7628"
                     style={{"fill":"none","stroke":"#008000","stroke-width":"1px","stroke-linecap":"square"}}
                     d="m 401.84,527.29 -2.4751,-3.1419" />
                  <path
                     id="path7626"
                     style={{"fill":"none","stroke":"#008000","stroke-width":"1px","stroke-linecap":"square"}}
                     d="m 397.89,531.98 -3.5614,-1.8205" />
                  <path
                     id="path7624"
                     style={{"fill":"none","stroke":"#008000","stroke-width":"1px","stroke-linecap":"square"}}
                     d="m 396.2,537.88 -3.9984,-0.10099" />
                  <path
                     id="path7622"
                     style={{"fill":"none","stroke":"#008000","stroke-width":"1px","stroke-linecap":"square"}}
                     d="m 397.31,544.12 -3.719,1.4721" />
                  <path
                     id="path8778"
                     style={{"fill":"none","stroke":"#008000","stroke-width":"1px","stroke-linecap":"square"}}
                     d="m 400.5,549.24 -2.8946,2.7603" />
                </g>
                <g
                   id="g7673"
                   transform="matrix(-0.17365,-0.98481,0.98481,-0.17365,-48.749,1037.2)">
                  <path
                     id="path7670"
                     d="m 412.99,539.01 -2.0478,-18 -2.326,18 z"
                     style={{"fill":"#999999","stroke":"#000000","stroke-width":"0.5","stroke-linecap":"square"}}/>
                  <circle
                     id="path7664"
                     style={{"fill":"#1a1a1a","stroke":"#1a1a1a","stroke-width":"0.49105","stroke-linecap":"square"}}
                     transform="matrix(1.0182,0,0,1.0182,-8.6607,-12.023)"
                     cx="411.95282"
                     cy="541.16187"
                     r="2.2097087" />
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
      <rect
         id="rect2996"
         style={{"fill":"none","stroke":"#000000","stroke-width":"3"}}
         rx="7.3214002"
         ry="7.3214002"
         height="138.57001"
         width="192.14"
         y="463.42999"
         x="279.45999" />
    </g>
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
    var pathName = "chair" + match;
    AppActionCreators.navigateTo(pathName, {nodeId: this.props.id});
  }
});

module.exports = Chair;