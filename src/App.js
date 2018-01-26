import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class App extends Component {
  
  onBlur(e) { 
    this.props.actions.changeFunction(e.target.value); 
  }

  render() {
    var func = this.props.functionToRender;
    
    var valuePoints = "";
    for (var x = 0; x <= 30; x+=5) {
      valuePoints += x + "," + eval("(function(x) { return " + func + ";})("+ x +")") + " ";
    }
    
    return (
      <div className="App">
        Função: <input type="text" onBlur={e=>this.onBlur(e)} placeholder="x*(x/50)" /><br/>
        
        <svg id="resizableSVG" viewBox="0 0 30 30" height="400" width="400">
          <g transform="translate(0,29) scale(1,-1)">
            <polyline points={valuePoints} fill="transparent" stroke="black" strokeWidth="0.1"></polyline>
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