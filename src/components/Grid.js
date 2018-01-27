import React from 'react';

const Grid = ({width, height, widthInterval, heightInterval}) => {
    let allLines = [];
    var color = "lightgray";
    for(var i = 0 ; i <= width; i += parseInt(widthInterval)) {
        let newLine = (<line x1="0" y1={i} x2={width} y2={i} stroke={color} strokeWidth="0.1"/>); 
        allLines.push(newLine); 
    }
    for(var i = 0 ; i <= height; i += parseInt(heightInterval)) {
        let newLine = (<line x1={i} y1="0" x2={i} y2={height} stroke={color} strokeWidth="0.1"/>); 
        allLines.push(newLine); 
    }
    return allLines;
}

export default Grid;
