// Update for data in mongo db 
// show bds
// use SourabhCard
// show collections

db.items.find()
db.items.updateOne({name: "Redmi 6 pro"}, {$set: {price: 5}}) //This Syntax is Change One Redmi 6 pro moblie ka price  
db.items.find()
db.items.updateMany({name: "Redmi 6 pro"}, {$set: {price: 3, rating: 1}}) //This Syntax is Change Many Redmi 6 pro moblie ka price and rating
db.items.find()