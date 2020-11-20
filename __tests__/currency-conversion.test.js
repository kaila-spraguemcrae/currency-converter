import ConvertCurrency from './../src/js/currency-conversion.js'

describe( 'ConvertCurrency', () => {

  let newCurrency;

  beforeEach((){
    let JPY = 103.9219;
    newCurrency = new ConvertCurrency(10,JPY);
    newCurrency.convert();
  });

  test('Should convert inputted USD currency into selected currency', () => {
    expect().toEqual(1039.22);
  });
 
});