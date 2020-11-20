import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ConvertCurrency from './js/currency-conversion.js'; 
import ExchangeRate from './js/call-exchange-rate.js'

function getElements(response) {
  if (response.conversion_rates){
    newCurrency.convert();
    let newAmount = newCurrency.newRate 
    $('#results').html(`Currency converted:${newAmount}`)
    //response.conversion_rates.JPY => 103.9219
  } else {
    $('#erros').html(`There was an error:${response.message}`);
  }
}

async function makeApiCall() {
  const response = await ExchangeRate.getExchangeRate();
  getElements(response);
}

$(document).ready(function() {
  $('#user-input').submit(function(event){
    event.preventDefault();

    const inputtedAmount = parseInt($('#amount').val());
    const inputtedCurrency = $('#end-currency').val();
    

    let newCurrency = new ConvertCurrency(inputtedAmount,inputtedCurrency)

    makeApiCall();
  });

});
