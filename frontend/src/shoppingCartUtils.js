// Takes a list of fruit objects as arguments
// eg. [{'name': 'Banana', 'price': 1}, {'name': 'Apple', 'price': 2}]
// Should return the cart total.
async function calculateTotal(items) {
try {
  const prices = Object.values(...items)
  let total = 0;
  total = prices.match(/\d+/g);
  total = total.reduce((a, b) => Number(a) + Number(b));
  return total;
} catch (error) {
  console.log("Something went wrong when calculating total", error)
}
}

// Takes a list of fruit objects as arguments
// eg. [{'name': 'Banana', 'price': 1}, {'name': 'Apple', 'price': 2}]
// Should return the cart average.
async function calculateAvg(items) {
  try {
  const prices = Object.values(...items)
  let average = 0;
  average = prices.match(/\d+/g);
  average = average.reduce((a, b) => (Number(a) + Number(b)) / items.length);
  return average;
  } catch (error) {
    console.log("Something went wrong when calculating average", error)
  }
}

 export { calculateTotal, calculateAvg };
