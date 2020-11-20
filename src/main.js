import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import convert from './js/currency-conversion.js'; 
import ExchangeRate from './js/call-exchange-rate.js';

function getElements(response, inputtedAmount, inputtedCurrency) {
  let conversionRate = response.conversion_rates[inputtedCurrency];
  let newAmount = convert(inputtedAmount,conversionRate);
  console.log(conversionRate);
  if (response.conversion_rates){
    $('#results').html(`Currency converted:${newAmount}`);
    console.log(newAmount);
  } else {
    $('#errors').html(`There was an error:${response.message}`);
  }
}

async function makeApiCall(inputtedAmount,inputtedCurrency) {
  const response = await ExchangeRate.getExchangeRate();
  getElements(response, inputtedAmount, inputtedCurrency);
}

$(document).ready(function() {
  $('#user-input').submit(function(event){
    event.preventDefault();

    const inputtedAmount = parseInt($('#amount').val());
    const inputtedCurrency = $('#end-currency').val();

    makeApiCall(inputtedAmount, inputtedCurrency);
  });

});
