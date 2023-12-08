
import Header from '../Components/Header'

import '../CSS/Landing.css';

import { Outlet, Navigate } from 'react-router-dom';
// import { useRoute } from "react-router-dom";
// import { useRoutes } from 'react-router-dom';
import { initializeApp } from "firebase/app";

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
//const app = initializeApp(firebaseConfig);
initializeApp(firebaseConfig);

function Landing() {
  return (
    <>

      <div className="Landing">
        <Header />

        {/* Default to calculator page */}
        <Navigate to="/Calculator" replace={false} />

        <Outlet />


      </div>
    </>
  );

}

export default Landing;
