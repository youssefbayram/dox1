import React, { FC } from 'react'
//Import from canvas library
import CanvasJSReact from './canvasjs.react'
var CanvasJS = CanvasJSReact.CanvasJS
var CanvasJSChart = CanvasJSReact.CanvasJSChart

export const Bargraph: FC =() =>{
    //Inserting and editing features of chart
    const options = {
        animationEnabled: true,
        exportEnabled: true,
        theme: "light2", 
        title:{
            text: "EV Battery Health with Years for Nissan Leaf"
        },
        axisY: {
            title: '% Health'
        },
        axisX:{
            title:'Years'
        },
        data: [{
            type: "bar", //change type to bar, line, area, pie, etc
            //insert data into chart here
            dataPoints: [
                { x: 0, y: 100 },
                { x: 1, y: 95 },
                { x: 2, y: 90 },
                { x: 3, y: 83 },
                { x: 4, y: 73 },
                { x: 5, y: 60 }
            ]
        }]
    }
    
    //Using canvas chart library component to display data
    return (
    <div>
        <CanvasJSChart options = {options} />
    </div>
    )
  }
