const customers = [
  {
    name: "Jada Nash",
    email: "jada.nash@usf.edu",
    purchases: ["Laptop Sleeve", "USB-C Adapter"]
  },
  {
    name: "Zosha Chung",
    email: "zosha.chung@usf.edu",
    purchases: ["Notebook", "Pen Set"]
  },
  {
    name: "Jenique Blanc",
    email: "jenique.blanc@usf.edu",
    purchases: ["Planner", "Sticky Notes"]
  }
];

customers.push({
  name: "Daniel Lee",
  email: "daniel.lee@usf.edu",
  purchases: ["Water Bottle"]
});

customers.shift(); // Removes Jada Nash

customers[0].email = "zosha.chung23@usf.edu"; // Update Zosha's email
customers[1].purchases.push("Highlighters"); // Add purchase to Jenique

customers.forEach(customer => {
  console.log(`${customer.name} (${customer.email}) has made ${customer.purchases.length} purchases.`);
});