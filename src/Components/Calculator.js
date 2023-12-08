import React, { useState } from 'react'
import '../CSS/Calculator.css'


function Calculator() {

    const calculateIndivid = () => {
        const Q = 1 - overallProbability; //opposite of overall rate
        const q = Math.pow(Q, 1 / numOfEvents);

        return 1 - q;
    }

    const calculateNumEvents = () => {
        const q = 1 - individualRate; //opposite of individual rate
        const Q = 1 - overallProbability; //opposite of overall rate

        const logA = Math.log(Q);
        const logB = Math.log(q);

        const x = logA / logB;

        return x;
    }

    const calculateOverall = () => {
        const q = 1 - individualRate;
        const result = 1 - (q) ** numOfEvents;
        return result
    }

    const [individualRate, updateIndividualRate] = useState(0.30)
    const [numOfEvents, updateNumOfEvents] = useState(3);
    const [overallProbability, updateOverallProbability] = useState(calculateOverall());

    return (
        <table id='calculator'>
            <caption>
                <h2>Proc Success Rate Calculator</h2>
            </caption>
            <tbody>
                <tr id='iesr'>
                    <td>
                        <label htmlFor='iesrt'>
                            Individual Event Success Rate (Decimal)
                        </label>
                    </td>
                    <td>
                        <input type='text' id='iesrt' value={individualRate} onChange={(e) => updateIndividualRate(e.target.value)} size={10} />
                    </td>
                    <td>
                        <input type='button' value={"Solve for Individual Rate"} onClick={() => updateIndividualRate(calculateIndivid())} />
                    </td>
                </tr>
                <tr id='noe'>
                    <td>
                        <label htmlFor='noet'>
                            Number of Events
                        </label>
                    </td>
                    <td>
                        <input type='text' id='noet' value={numOfEvents} onChange={(e) => updateNumOfEvents(e.target.value)} size={10} />
                    </td>
                    <td>
                        <input type='button' value={"Solve for Number of Events"} onClick={() => updateNumOfEvents(calculateNumEvents())} />
                    </td>
                </tr>
                <tr id='overall'>
                    <td>
                        <label htmlFor='overallt'>
                            Overall Probability at least one event succeeds (Decimal)
                        </label>
                    </td>
                    <td>
                        <input type='text' id='overallt' value={overallProbability} onChange={(e) => updateOverallProbability(e.target.value)} size={10} />
                    </td>
                    <td>
                        <input type='button' value={"Solve for Overall Probability"} onClick={() => updateOverallProbability(calculateOverall())} />
                    </td>
                </tr>
            </tbody>

        </table>
    )
}

export default Calculator