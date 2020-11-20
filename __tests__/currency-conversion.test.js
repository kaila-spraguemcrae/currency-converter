import convert from './../src/js/currency-conversion.js'

describe( 'convert', () => {

  test('Should convert inputted USD currency into selected currency', () => {
    let JPY = 103.9219;
    expect(convert(10,JPY)).toEqual(1039.22);
  });
  
});