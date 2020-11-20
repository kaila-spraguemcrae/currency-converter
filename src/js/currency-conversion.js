export default function convert(amount, rate) {
    return Math.round((amount * rate)*100)/100
  }
