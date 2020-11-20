import convert from './../src/js/currency-conversion.js'

describe( 'convert', () => {



  // beforeEach(() => {
  //   let JPY = 103.9219;
  //   newCurrency = new ConvertCurrency(10,JPY);
  //   newCurrency.convert();
  // });

  test('Should convert inputted USD currency into selected currency', () => {
    let JPY = 103.9219;
    expect(convert(10,JPY)).toEqual(1079.22);
  });
});