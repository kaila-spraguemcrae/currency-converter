export default function convert(amount, start, end) {
  return Math.round(((amount / start)*end)*100)/100;
}
