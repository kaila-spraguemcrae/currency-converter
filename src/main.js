import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import convert from './js/currency-conversion.js'; 
import ExchangeRate from './js/call-exchange-rate.js';

function getElements(response, inputtedStart, inputtedAmount, inputtedEnd) {
  if (response.conversion_rates){
    let conversionRateEnd = parseFloat(response.conversion_rates[inputtedEnd]);
    let conversionRateStart = parseFloat(response.conversion_rates[inputtedStart]);
    let newAmount = convert(conversionRateStart, inputtedAmount,conversionRateEnd);
    console.log(conversionRateEnd);
    console.log(conversionRateStart);
    $('#results').html(`Currency converted: ${newAmount}`);
    console.log(newAmount);
  } else {
    $('#errors').html(`There was an error: ${response.message}`);
    console.log(response.message);
  }
}

async function makeApiCall(inputtedStart, inputtedAmount,inputtedEnd) {
  const response = await ExchangeRate.getExchangeRate();
  getElements(response, inputtedStart, inputtedAmount, inputtedEnd);
}

$(document).ready(function() {
  $('#user-input').submit(function(event){
    event.preventDefault();
    
    const inputtedStart = $('#start-currency').val();
    const inputtedAmount = parseFloat($('#amount').val());
    const inputtedEnd = $('#end-currency').val();

    if (!inputtedAmount > 0) {
      alert("Please enter a number greater than 0");
    } else if (inputtedEnd == "") {
      alert("Please select a currency");
    } else {
      makeApiCall(inputtedStart, inputtedAmount, inputtedEnd);
      $('.photos').show();
      $('.photo-start').html(`"<img src=./assets/images/${inputtedStart}.jpg>"`);
    }


  });
});
