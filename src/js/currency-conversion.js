export default function convert(start, amount, end) {
  return Math.round(((amount / start)* end)*100)/100;
}
