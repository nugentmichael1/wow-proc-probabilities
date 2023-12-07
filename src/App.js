import './App.css';
import ProcSuccessCalc from './ProcSuccessCalc'

import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDXGG6aaNhSdLr4l9v9zKIRSU9AdcLAvsA",
  authDomain: "wowproccalculator.firebaseapp.com",
  projectId: "wowproccalculator",
  storageBucket: "wowproccalculator.appspot.com",
  messagingSenderId: "827276697986",
  appId: "1:827276697986:web:95c2271826f40716a02f9b",
  measurementId: "G-HMQV5VR54X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

function App() {
  return (
    <div className="App">
      <h1>
        WoW Proc Probabilities
      </h1>
      <h2>
        "Proc" Meaning
      </h2>
      <p>
        "Proc" -- short for "procedure" -- is an often used term in video games to indicate when an extra event is achieved.  This event is gated behind a set probability.
      </p>
      <h2>
        Calculation Difficulty
      </h2>
      <p>
        The difficulty to calculate an overall probability arises when multiple attempts at this event are made.  Often one assumes three boolean attempts at a probability of 30% means an overall 90% probability, but this is untrue.  The real logic is that three boolean attempts at a given outcome with probability p is the opposite of three attempts at not the given outcome with probability p.
      </p>
      <h2>Solution</h2>
      <p>To calculate the probability that all three events would be successful is simple: p*p*p = 30% * 30% * 30% = 0.3 * 0.3 * 0.3 = 0.027 = 2.7%, but we want to know the much less restricted probability where only one needs to be true.  All three could be true, but only two or one true would work, too.  We're interested in a broader set: (T,T,T), (T,T,F), (T,F,T),(T,F,F),(F,T,T),(F,T,F),(F,F,T).  The only outcome absent from out set is (F,F,F), a fact we can use to simplify our calculation.  Instead of calculating the probability of each outcome in our desired set, we will calculate just the probability of the only outcome we do not want, and then subtract it from one (or 100%) to get the probability of our desired set: at least one successful event.
      </p>
      <h2>
        Binomial Distribution
      </h2>
      <table>
        <thead>
          <tr>
            <th>Statement</th>
            <th>Note / Explanation</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              q = 1 - p
            </td>
            <td>'q' is often used to refer to the opposite case of 'p'</td>
          </tr>
          <tr>
            <td>
              P = 1 - (q)^n
            </td>
            <td>
              P is our overall probability.  'n' is the number of events.  (This formula has three variables and can be solved for any given the other two.)
            </td>
          </tr>
          <tr>
            <td>
              P = 1 - (1 - 0.3) ^ 3
            </td>
            <td>
              Our three coins example.
            </td>
          </tr>
          <tr>
            <td>
              P = 1 - (0.7) ^ 3
            </td>
            <td>
              0.7^3 is the only outcome we do not want, the (F,F,F) case.
            </td>
          </tr>
          <tr>
            <td>
              P = 1 - (0.343)
            </td>
            <td>
              Now we subtract it's result from 1 to get the probability of all the other results.
            </td>
          </tr>
          <tr>
            <td>
              P = 0.657
            </td>
            <td>
              This is the sum of all the other outcomes' probabilities.
            </td>
          </tr>
        </tbody>
      </table>

      <p>Instead of a 90% probability to get at least one heads in our example of three coin flips with 30% probability of heads each, we actually only have a 65.7% probability.</p>

      <ProcSuccessCalc />
      <h2>
        Chart
      </h2>
      <p>This section should illustrate the relationship between  number of events and overall success rate.</p>
    </div>
  );
}

export default App;
