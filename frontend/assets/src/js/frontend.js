/**
 * Manage global libraries like jQuery or THREE from the package.json file
 */
import $ from 'jquery';
// Import custom modules
import App from './modules/app-es6.js';

$(() => {
  new App();
});
