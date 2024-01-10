/*
Goals: Chart should change x and y axis labels and data based on which variable's identity is sought.

3 variables in a 2d chart means only 2 variables can be graphed.  Therefore, the selected variable to solve will be the x axis.  
Actually, Make all views possible.

Start with easiest view, first.
*/

import React, { useState } from 'react'
import CanvasJSReact from '@canvasjs/react-charts'

// var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;



function Chart() {

    const calculateOverall = (individualRate, numOfEvents) => {
        const q = 1 - individualRate;
        const result = 1 - (q) ** numOfEvents;
        return result
    }

    const calculateIndivid = (overallProbability, numOfEvents) => {
        const Q = 1 - overallProbability; //opposite of overall rate
        const q = Math.pow(Q, 1 / numOfEvents);

        return 1 - q;
    }

    const calculateNumEvents = (individualRate, overallProbability) => {
        const q = 1 - individualRate; //opposite of individual rate
        const Q = 1 - overallProbability; //opposite of overall rate

        const logA = Math.log(Q);
        const logB = Math.log(q);

        const x = logA / logB;

        return x;
    }

    const [individualRate, updateIndividualRate] = useState([0.3, 0.4])
    const [numOfEvents, updateNumOfEvents] = useState([0, 9])
    const [overallProbability, updateOverallProbability] = useState([calculateOverall(individualRate[0], numOfEvents[0]), calculateOverall(individualRate[1], numOfEvents[1])])

    //Possible choices are integers: [0,2]; and respectively represent: individual rate, number of events, and overall probability.
    const [xAxis, updateXAxis] = useState(1)

    console.log("x-Axis Variable", xAxis)

    const dataPoints = []

    const [xMin, updateXMin] = useState(numOfEvents[0])
    const [xMax, updateXMax] = useState(numOfEvents[1])

    for (let i = xMin; i < xMax; i++) {
        const overall = calculateOverall(individualRate[0], i);

        dataPoints.push({ label: i, y: overall })
    }

    console.log("dataPoints", dataPoints)


    const options = {
        title: {
            text: individualRate[0] + ' Individual Rate'
        },
        data: [{
            type: "line",
            dataPoints: dataPoints
        }],
        axisX: {
            title: "Number of Events"
        },
        axisY: {
            title: '"At Least One" Probability'
        }
    }


    return (
        <div>
            <table id='calculator'>
                <caption>
                    <h2>Proc Success Rate Calculator</h2>
                    <h2>"At Least One" Probability</h2>
                </caption>
                <thead>
                    <tr>
                        <th>Variable</th>
                        <th>Minimum / Constant</th>
                        <th>Maximum</th>
                        <th>X Axis</th>
                        <th>Y Axis</th>
                    </tr>
                </thead>
                <tbody>
                    <tr id=''>
                        <td>
                            <label htmlFor='iesrt'>
                                Individual Event Probability (Decimal)
                            </label>
                        </td>
                        <td>
                            <input type='text' id='iesrt' value={individualRate[0]} onChange={(e) => updateIndividualRate([e.target.value, individualRate[1]])} size={10} />
                        </td>
                        <td>
                            <input type='text' id='iesrMax' value={individualRate[1]} onChange={(e) => updateIndividualRate([individualRate[0], e.target.value])} size={10} />
                        </td>
                        <td>
                            <input type='radio' name='xAxis' value={0} onChange={(e) => updateXAxis(e.target.value)} />
                        </td>
                        {/* <td>
                            <input type='button' value={"Solve for Individual Rate"} onClick={() => updateIndividualRateMin(calculateIndivid())} />
                        </td> */}
                    </tr>
                    <tr id='noe'>
                        <td>
                            <label htmlFor='noet'>
                                Number of Events
                            </label>
                        </td>
                        <td>
                            <input type='text' id='noet' value={numOfEvents[0]} onChange={(e) => updateNumOfEvents([e.target.value, numOfEvents[1]])} size={10} />
                        </td>
                        <td>
                            <input type='text' id='noeMax' value={numOfEvents[1]} onChange={(e) => updateNumOfEvents([numOfEvents[0], e.target.value])} size={10} />
                        </td>
                        <td>
                            <input type='radio' name='xAxis' value={1} onChange={(e) => updateXAxis(e.target.value)} defaultChecked />
                        </td>
                        {/* <td>
                            <input type='button' value={"Solve for Number of Events"} onClick={() => updateNumOfEvents(calculateNumEvents())} />
                        </td> */}
                    </tr>
                    <tr id='overall'>
                        <td>
                            <label htmlFor='overallt'>
                                "At Least One" Probability (Decimal)
                            </label>
                        </td>
                        <td>
                            <input type='text' id='overallt' value={overallProbability[0]} onChange={(e) => updateOverallProbability([e.target.value, overallProbability[1]])} size={10} />
                        </td>
                        <td>
                            <input type='text' id='overallMax' value={overallProbability[1]} onChange={(e) => updateOverallProbability([overallProbability[0], e.target.value])} size={10} />
                        </td>
                        <td>
                            <input type='radio' name='xAxis' value={2} onChange={(e) => updateXAxis(e.target.value)} />
                        </td>
                        <td>
                            <input type='button' value={"Solve for Overall Probability"} onClick={() => updateOverallProbability(calculateOverall())} />
                        </td>
                    </tr>
                </tbody>

            </table>
            <CanvasJSChart options={options} />
        </div>
    )
}

export default Chart


// dataPoints: [
//     { label: "1", y: 0.4119 },
//     { label: "2", y: 0.654 },
//     { label: "3", y: 0.7967 },
//     { label: "4", y: 0.8804 },
//     { label: "5", y: 0.9297 },
//     { label: "6", y: 0.9586 },
//     { label: "7", y: 0.9756 },
//     { label: "20", y: 0.9999755911947942 }
// ]