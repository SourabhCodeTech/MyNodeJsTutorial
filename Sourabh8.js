// Inserting Data in mongo db
// use SourabhCard
db.items.insertOne({name: "Redmi 6 pro", price: "10,000", rating: 4.5, qty: 233, sold: 98})

// use SourabhCard
db.items.insertMany([{ name: "Realme6i", price: "15,000", rating: 5.5, qty: 293, sold: 148 }, { name: "V2029", price: "14,000", rating: 4.5, qty: 273, sold: 138 }, { name: "Redmi 6 pro", price: "10,000", rating: 4.5, qty: 233, sold: 98, isBig: true}])