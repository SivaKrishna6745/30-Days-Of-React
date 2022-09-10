const products = [
    { product: "banana", price: 3 },
    { product: "mango", price: 6 },
    { product: "potato", price: " " },
    { product: "avocado", price: 8 },
    { product: "coffee", price: 10 },
    { product: "tea", price: "" },
];
// Print the price of each product using forEach
// Print the product items as follows using forEach
products.forEach((product) => {
    if (product.price === "" || product.price === " ") {
        console.log(`The price of ${product.product} is unknown.`);
    } else {
        console.log(
            `The price of ${product.product} is ${product.price} euros.`
        );
    }
});
// The price of banana is 3 euros.
// The price of mango is 6 euros.
// The price of potato is unknown.
// The price of avocado is 8 euros.
// The price of coffee is 10 euros.
// The price of tea is unknown.
// Calculate the sum of all the prices using forEach
let sum = 0;
products.forEach((product) => {
    if (product.price === "" || product.price === " ") sum += 0;
    else sum += product.price;
});
console.log(`sum of all prices is ${sum}`);
// Create an array of prices using map and store it in a variable prices
let prices = [];
products.map((product) => prices.push(product.price));
console.log(prices);
// Filter products with prices
console.log(products.filter((product) => product.price > 6));
// Use method chaining to get the sum of the prices(map, filter, reduce)
let totalPrice = products
    .map((product) => {
        return product;
    })
    .filter((product) => product.price !== "" || product.price !== " ")
    .reduce((acc, rep) => acc + Number(rep.price), 0);
console.log(totalPrice);
// Calculate the sum of all the prices using reduce only
let reduceSum = products.reduce((acc, rep) => acc + Number(rep.price), 0);
console.log(reduceSum);
// Find the first product which doesn't have a price value
console.log(
    products.filter((prod) => prod.price === "" || prod.price === " ")[0]
);
// Find the index of the first product which does not have price value
console.log(
    products.findIndex((prod, index) => prod.price === "" || prod.price === " ")
);
// Check if some products do not have a price value
console.log(products.some((prod) => prod.price === "" || prod.price === " "));
// Check if all the products have price value
console.log(products.every((prod) => prod.price));
// Explain the difference between forEach, map, filter and reduce
// forEach - it is used to iterate through the array but doesn't it returns anything
// map - it is used to iterate through the array but it returns a new array
// filter - it is used to iterate thtough the array and filter the array based on condition
// reduce - it is used to iterate the array with accumulated value
// Explain the difference between filter, find and findIndex
// filter - it is used to iterate thtough the array and filter the array based on condition
// find - it is used to find an element in the array which satisfies certain condition
// findIndex - it is used to find the index of an element in the array which satisfies certain condition
// Explain the difference between some and every
// some - it is used to check if some of the elements of the array meet certain condition
// every - it is used to check if all of the elements of the array meet certain condition
