import React from 'react'

import '../CSS/Explanation.css'

function Explanation() {
    return (
        <div id='explanation'>

            {/* <h1>Explanation</h1> */}
            <div id='meaning'>
                <h2>
                    "Proc" Meaning
                </h2>
                <p>
                    "Proc" -- short for "procedure" -- is an often used term in video games to indicate when an extra bonus is achieved.  This reward is often determined by a random "dice roll" set to a particular probability per event, or attempt.
                </p>
            </div>
            <div id='calcDifficulty'>
                <h2>
                    Calculation Difficulty
                </h2>
                <p>
                    While it is simple to understand the probability of a single event's success or failure, difficulty arises when multiple events attempts are considered.  First, many initially assume that multiple events means a geometric increase of probability, but it is in fact exponential.  Second, with multiple events comes new combinations of possible desired outcomes, which requires more than a single exponential calculation.</p>
            </div>
            <div id='example'>
                <h2>Example</h2>
                <p>
                    Three identically weighted coins each have the probability to result in heads 30% of the time.  The probability that at least one will result in heads is not the geometric increase of 30% * 3 = 90%, nor is it just the exponential calculation of 30% ^ 3 = 2.7%.  Instead it is the sum of <b>all</b> the exponential calcutations of <b>every desired outcome</b>: &#123;(T,T,T), (T,T,F), (T,F,T), (T,F,F), (F,T,T), (F,T,F), (F,F,T)&#125;.
                    {/* The real logic is that three boolean attempts at a given outcome with probability p is the opposite of three attempts at not the given outcome with probability p. */}
                </p>
            </div>
            <div id='truthTbl'>
                <h2>Truth Table</h2>
                <table id='truth'>
                    <caption>Probabilities of All Possible Outcomes</caption>
                    <thead>
                        <tr>
                            <th>Coin 1</th>
                            <th>Coin 2</th>
                            <th>Coin 3</th>
                            <th>Calculation</th>
                            <th>Probability</th>
                            <th>Category Sum</th>
                            <th>Total Sum</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='desiredOutcome'>
                            <td>T</td>
                            <td>T</td>
                            <td>T</td>
                            <td>0.3 * 0.3 * 0.3</td>
                            <td>{0.3 * 0.3 * 0.3 * 100}%</td>
                            <td rowSpan={7}>65.7%</td>
                            <td rowSpan={8} id='totalSum'>100%</td>
                        </tr>
                        <tr className='desiredOutcome'>
                            <td>T</td>
                            <td>T</td>
                            <td>F</td>
                            <td>0.3 * 0.3 * 0.7</td>
                            <td>{0.3 * 0.3 * 0.7 * 100}%</td>
                        </tr>
                        <tr className='desiredOutcome'>
                            <td>T</td>
                            <td>F</td>
                            <td>T</td>
                            <td>0.3 * 0.7 * 0.3</td>
                            <td>{0.3 * 0.7 * 0.3 * 100}%</td>
                        </tr>
                        <tr className='desiredOutcome'>
                            <td>T</td>
                            <td>F</td>
                            <td>F</td>
                            <td>0.3 * 0.7 * 0.7</td>
                            <td>{0.3 * 0.7 * 0.7 * 100}%</td>
                        </tr>
                        <tr className='desiredOutcome'>
                            <td>F</td>
                            <td>T</td>
                            <td>T</td>
                            <td>0.7 * 0.3 * 0.3</td>
                            <td>{0.7 * 0.3 * 0.3 * 100}%</td>
                        </tr>
                        <tr className='desiredOutcome'>
                            <td>F</td>
                            <td>T</td>
                            <td>F</td>
                            <td>0.7 * 0.3 * 0.7</td>
                            <td>{0.7 * 0.3 * 0.7 * 100}%</td>
                        </tr>
                        <tr className='desiredOutcome'>
                            <td>F</td>
                            <td>F</td>
                            <td>T</td>
                            <td>0.7 * 0.7 * 0.3</td>
                            <td>{Math.round(0.7 * 0.7 * 0.3 * 100)}%</td>
                        </tr>
                        <tr className='undesiredOutcome'>
                            <td>F</td>
                            <td>F</td>
                            <td>F</td>
                            <td>0.7 * 0.7 * 0.7</td>
                            <td>{Math.round(0.7 * 0.7 * 0.7 * 100)}%</td>
                            <td>34%</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div id='simple'>
                <h2>Simple Method</h2>
                <p>
                    While it is possible to tediously workout the probability of each individual desired outcome and add them all together, it is easier to find the probability of the only undesired case (F,F,F), and subtract it from 100%.
                </p>
            </div>

            <div id='formula'>
                <h2>
                    Formula
                    {/* Binomial Distribution */}
                </h2>
                <p>
                    This formula has three variables and any one can be solved for given the other two.
                </p>
                <table>
                    <thead>
                        <tr>
                            <th>Statement</th>
                            <th>Note</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                P = 1 - (q)^e
                            </td>
                            <td>
                                'P': overall probability; 'e': number of events.
                            </td>
                        </tr>
                        <tr>
                            <td>
                                q = 1 - p
                            </td>
                            <td>'q' is the opposite case of 'p'</td>
                        </tr>
                        <tr>
                            <td>
                                P = 1 - (1 - 0.3) ^ 3
                            </td>
                            <td>
                                Replace known variables with data from the three coins example.
                            </td>
                        </tr>
                        <tr>
                            <td>
                                P = 1 - (0.7) ^ 3
                            </td>
                            <td>
                                0.7^3 is the only undesired outcome: the (F,F,F) case.
                            </td>
                        </tr>
                        <tr>
                            <td>
                                P = 1 - (0.343)
                            </td>
                            <td>
                                Subtract it's result from 1 to get the probability that anything happens except it.
                            </td>
                        </tr>
                        <tr>
                            <td>
                                P = 0.657
                            </td>
                            <td>
                                The sum of all the other outcomes' probabilities.
                            </td>
                        </tr>
                    </tbody>
                </table>

                <p>Three coin flips with a 30% probability each of heads have a combined 65.7% -- not a 90% -- probability to result in at least one head.</p>
            </div>

        </div>
    )
}

export default Explanation


/* <p>To calculate the probability that <b>all</b> three events would be successful is simple: p*p*p = 30% * 30% * 30% = 0.3 * 0.3 * 0.3 = 0.027 = 2.7%.</p> */
/* <p>However, we want to know the much less restricted probability that only one needs to be true.  All three could be true, but only two or one true would work, too.  We're interested in the broader set: &#123;(T,T,T), (T,T,F), (T,F,T), (T,F,F), (F,T,T), (F,T,F), (F,F,T)&#125;.  The only outcome absent from this set is (F,F,F), a fact to exploit for a simpler calculation.  Instead of calculating the probability of each outcome in our desired set, we will calculate just the probability of the only outcome we do not want, and then subtract it from one (or 100%) to get the probability of our desired set: at least one successful event.
</p> */