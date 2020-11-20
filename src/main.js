import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import convert from './js/currency-conversion.js'; 
import ExchangeRate from './js/call-exchange-rate.js';

function getElements(response, inputtedAmount, inputtedCurrency) {
  if (response.conversion_rates){
    let conversionRate = parseFloat(response.conversion_rates[inputtedCurrency]);
    let newAmount = convert(inputtedAmount,conversionRate);
    $('#results').html(`Currency converted: ${newAmount}`);
    console.log(newAmount);
  } else {
    $('#errors').html(`There was an error: ${response.message}`);
    console.log(response.message);
  }
}

async function makeApiCall(inputtedAmount,inputtedCurrency) {
  const response = await ExchangeRate.getExchangeRate();
  getElements(response, inputtedAmount, inputtedCurrency);
}

$(document).ready(function() {
  $('#user-input').submit(function(event){
    event.preventDefault();

    const inputtedAmount = parseFloat($('#amount').val());
    const inputtedCurrency = $('#end-currency').val();

    if (!inputtedAmount > 0) {
      alert("Please enter a number greater than 0")
    } else if (inputtedCurrency == "") {
      alert("Please select a currency") 
    } else {
    makeApiCall(inputtedAmount, inputtedCurrency);
  }
  });

});
