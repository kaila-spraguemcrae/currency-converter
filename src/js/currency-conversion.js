export default class ConvertCurrency {
  constructor (usd, rate) {
     this.usd = usd;
    this.rate = rate;
    this.newRate = 0;
  }
  

  convert() {
    return this.newRate = Math.round((this.usd * this.rate)*100)/100
  }
}