import React, { Component } from 'react';
import './App.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Grid from './components/Grid'

class App extends Component {
  
    onBlur(e) { 
        this.props.actions.changeFunction(e.target.value); 
    }

    componentDidMount()
	  {
	      this.refs.functionInput.value = "x*(x/30)";
	  }

    render() {
        var func = this.props.functionToRender;
        var size = 30;
        var functionResolution = 5;
        var textHorizontalOffset = 1;

        var valuePoints = "";
        for (var x = 0; x <= size; x+=functionResolution) {
            try{
                var evalResult = eval("(function(x) { return " + func + ";})("+ x +")");
                valuePoints += x + "," + evalResult.toFixed(2) + " ";
            }catch(e){
                valuePoints += x + ",0 ";
            }
        }

        return (
            <div className="App">
                <p>Função: <input type="text" onBlur={e=>this.onBlur(e)} ref = "functionInput"></input></p>
                <svg id="resizableSVG" viewBox={"-"+textHorizontalOffset+" 0 "+(size+textHorizontalOffset)+" 30"} height="300" width="300">

                    <text x={"-"+textHorizontalOffset} y={size} font-family="Verdana" font-size="1" stroke="none" fill="white">0</text>
                    <text x={"-"+textHorizontalOffset} y={size-5} font-family="Verdana" stroke="none" fill="white"font-size="1">5</text>
                    <text x={"-"+textHorizontalOffset} y={size-10} font-family="Verdana" stroke="none" fill="white"font-size="1">10</text>
                    <text x={"-"+textHorizontalOffset} y={size-15} font-family="Verdana" stroke="none" fill="white"font-size="1">15</text>
                    <text x={"-"+textHorizontalOffset} y={size-20} font-family="Verdana" stroke="none" fill="white"font-size="1">20</text>
                    <text x={"-"+textHorizontalOffset} y={size-25} font-family="Verdana" stroke="none" fill="white"font-size="1">25</text>
                    <text x={"-"+textHorizontalOffset} y={size-30} font-family="Verdana" stroke="none" fill="white"font-size="1">30</text>

                    <g transform={"translate(0,"+size+") scale(1,-1)"}>
                        <Grid width={size} height={size} widthInterval="5" heightInterval="5" />
                        <polyline points={valuePoints} fill="transparent" stroke="white" strokeWidth="0.1"></polyline>
                    </g>
                </svg>

                <p>{'<polyline points=' + JSON.stringify(valuePoints) + ' fill="transparent"></polyline>'}</p>
                <p><small>*coordenadas invertidas</small></p>
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
