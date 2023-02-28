/**
 * PUBLIC MAIN SCRIPT
 */
import ReactDOM from 'react-dom';
import React from 'react';
import LeadCalculatorAdmin from './react/LeadCalculatorAdmin';

class App {
  constructor() {
    console.info('Lee Goff React Lead Plugin is now active on WP ADMIN!');
    // LUNCHING REACT APP THEME ONE
    const appThemeOne = document.getElementById('REACT-CONTENT');
    if (appThemeOne) {
      ReactDOM.render(<LeadCalculatorAdmin />, appThemeOne);
    }
  }
}

export default App;
