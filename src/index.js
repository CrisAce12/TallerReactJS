import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Footer from './footer';
import Header from './header';
import MainIterator from './mainIterator';
import Forms from './forms';

ReactDOM.render(

  <Header />,
  document.getElementById('header')

)

ReactDOM.render(

  <MainIterator />,
  document.getElementById('main')

)


ReactDOM.render(

  <Forms />,
  document.getElementById('forms')

)

ReactDOM.render(

  <Footer />,
  document.getElementById('footer')

)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
