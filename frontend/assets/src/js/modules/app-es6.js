/**
 * PUBLIC MAIN SCRIPT
 * NOTICE: JSX WILL NOT COMPILE IN WP USING GULP
 */
import ReactDOM from 'react-dom';
import React from 'react';
import LeadCalculator from './react/LeadCalculator';

class App {
  constructor() {
    console.info('Lee Goff React Lead Plugin is now active!');
    // LUNCHING REACT APP THEME ONE
    const appThemeOne = document.getElementById('REACT-PLUGIN-APP');
    if (appThemeOne) {
      ReactDOM.render(<LeadCalculator />, appThemeOne);
    }
  }
}

export default App;
