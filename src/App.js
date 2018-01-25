import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    var y1 = eval("(function(x) { return " + this.props.functionToRender + ";})(0)");
    var y2 = eval("(function(x) { return " + this.props.functionToRender + ";})(10)");
    var y3 = eval("(function(x) { return " + this.props.functionToRender + ";})(20)");
    var y4 = eval("(function(x) { return " + this.props.functionToRender + ";})(30)");
    return (
      <div className="App">
        <input type="text"  />
        <svg id="resizableSVG" viewBox="0 -60 30 120" height="200" width="100%">
          <g transform="translate(0,30) scale(1,-1)">
              <path id="graphPath" d={"M0 "+y1+" L 10 "+y2+" L 20 "+y3+" L 30 "+y4+""} fill="transparent" stroke="black" strokeWidth="0.4"></path>
              <circle cy={y1} cx="0" r="1" fill="#333333"/>
              <circle cy={y2} cx="10" r="1" fill="#333333"/>
              <circle cy={y3} cx="20" r="1" fill="#333333"/>
              <circle cy={y4} cx="30" r="1" fill="#333333"/>
          </g>
        </svg>
      </div>
    );
  }
}

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
actions: bindActionCreators({ 
  changeFunction:(newFunction) => ({
    type: "CHANGE_FUNCTION",
    data: newFunction,
  }), 
}, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);