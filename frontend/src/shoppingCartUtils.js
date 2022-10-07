// Takes a list of fruit objects as arguments
// eg. [{'name': 'Banana', 'price': 1}, {'name': 'Apple', 'price': 2}]
// Should return the cart total.
async function calculateTotal(items) {
try {
  const total = {};
  const item = items.match(/\d+/g);
  for (const obj of item) {
    for (const [prop, num] of Object.entries(obj)) {
      total[prop] = (total[prop] || 0) + num;
    }
  }
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
  const average = {};
  const item = items.match(/\d+/g)
  for (const obj of item) {
    for (const [prop, num] of Object.entries(obj)) {
      average[prop] = ((average[prop] || 0) + num) / item.length;
    }
  }
    return average;
  } catch (error) {
    console.log("Something went wrong when calculating average", error)
  }
}

export { calculateTotal, calculateAvg };
