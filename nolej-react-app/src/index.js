import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import HomePageTemp from './TemporaryHomePage/HomePageTemp';
import Materials from './Materials/Materials';
import Profile from './Profile/Profile';

ReactDOM.render(
   <React.StrictMode>
      <Profile />
   </React.StrictMode>,
   document.getElementById('root')
);

reportWebVitals();
