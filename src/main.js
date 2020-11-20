import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ConvertCurrency from './js/currency-conversion.js'; 
import ExchangeRate from './js/call-exchange-rate.js'

getElements(response) {
  if (response.conversion_rates){
    //response.conversion_rates.JPY => 103.9219
  }
}

async function makeApiCall() {
  const response = await ExchangeRate.getExchangeRate();
  getElements(response);
}

$(document).ready(function() {

});
