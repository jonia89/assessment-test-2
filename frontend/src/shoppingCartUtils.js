// Takes a list of fruit objects as arguments
/*const items = [
  { name: "Banana", price: 1 },
  { name: "Apple", price: 2 },
];*/
// Should return the cart total.
function calculateTotal(items) {
  try {
    let total = 0;
    items.forEach(function (item) {
      total += item.price;
    });
    return total;
  } catch (error) {
    console.log("Something went wrong when calculating total", error);
  }
}
//console.log(calculateTotal(items));
// Takes a list of fruit objects as arguments
// eg. [{'name': 'Banana', 'price': 1}, {'name': 'Apple', 'price': 2}]
// Should return the cart average.
function calculateAvg(items) {
  try {
    let average = 0;
    items.forEach(function (item) {
      average += item.price;
    });
    return average / items.length;
  } catch (error) {
    console.log("Something went wrong when calculating total", error);
  }
}
//console.log(calculateAvg(items));
export { calculateTotal, calculateAvg };
