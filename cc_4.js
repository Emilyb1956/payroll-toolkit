// Creates a five product object array
const products = [
  { name: "Laptop", category: "electronics", price: 1000, inventory: 1 },
  { name: "T-shirt", category: "clothing", price: 25, inventory: 2 },
  { name: "Bananas", category: "groceries", price: 1, inventory: 50 },
  { name: "Dish Soap", category: "household", price: 3, inventory: 20 },
  { name: "Book", category: "other", price: 15, inventory: 8 }
];

// Apply category-based discounts
for (let i = 0; i < products.length; i = i + 1) {
  const product = products[i];

  switch (product.category) {
    case "electronics":
      product.price = product.price * 0.8;
      break;
    case "apparel":
      product.price = product.price * 0.85;
      break;
    case "groceries":
    case "household":
      product.price = product.price * 0.9;
      break;
    default:
      // No discount
      break;
  }
}

// Create customerType
const customerType = "student"; 

// Simulate checkout for 3 customers
for (let customer = 1; customer <= 3; customer = customer + 1) {
  let cartTotal = 0;

  for (let j = 0; j < products.length; j = j + 1) {
    const item = products[j];

    if (item.inventory > 0) {
      cartTotal = cartTotal + item.price;
      item.inventory = item.inventory - 1;
    }
  }
  // Applies customer type discount to cart total
  if (customerType === "student") {
    cartTotal = cartTotal * 0.95;
  } else if (customerType === "senior") {
    cartTotal = cartTotal * 0.93;
  }

  console.log("Customer " + customer + " total cost: $" + cartTotal.toFixed(2));
}

// Log each key/value pair for a single product after discounts are applied
const sampleProduct = products[0];
console.log("Details for one product after discounts:");
for (const key in sampleProduct) {
  console.log(key + ": " + sampleProduct[key]);
}

// Log all product info after inventory update
console.log("All products after inventory update:");
for (let k = 0; k < products.length; k = k + 1) {
  const prod = products[k];
  console.log("Product " + (k + 1) + ":");

  const entries = Object.entries(prod);
  for (let m = 0; m < entries.length; m = m + 1) {
    const entry = entries[m];
    const prop = entry[0];
    const value = entry[1];
    console.log("  " + prop + ": " + value);
  }
}
