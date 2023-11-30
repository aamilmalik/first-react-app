import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import FirstCmp from './components/FirstCmp';
import AdmissionForm from './components/AdmissionForm';
import TestClassCmp from './components/TestClassCmp';
import EnterName from './components/EnterName';
import StatePractice from './components/StatePractice';
import EnquiryForm from './components/EnquiryForm';
import FormValidationClsComp from './FormValidationClsComp';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import FunctionalCompState from './components/FunctionalCompState';
import FunctionalIncrementComp from './components/FunctionalIncrementComp';
import FormValidationFunComp from './FormValidationFunComp';
import Students from './Students';
import WeatherApiDemo from './WeatherApiDemo';
import GetCountriesDemo from './GetCountrielDemo';



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
 <App />
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
