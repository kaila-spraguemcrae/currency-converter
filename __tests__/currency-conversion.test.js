import convert from './../src/js/currency-conversion.js'

describe( 'convert', () => {

  test('Should convert inputted USD currency into selected currency', () => {
    let USD = 1
    let JPY = 10.9219;
    expect(convert(10, USD, JPY)).toEqual(1039.22);
  });
  
  test('Should convert any currency into another currency', () => {
    let JPY = 103.9219;
    let EUR = 0.8440;
    expect(convert(1000, JPY, EUR)).toEqual(8.12);
  });

});