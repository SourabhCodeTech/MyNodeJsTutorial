// Searching for data in mongo db
// use SourabhCard

// This query will return all the objects with rating equal to 3.5
db.items.find({ isBig: true })
db.items.find({ rating: {$gte: 3.5}})
db.items.find({ rating: {$gt: 3.5}})

// And Operators
db.items.find({ rating: {$gt: 3.5}, price:{$gt: 4000}})

db.items.find({ rating: {$lt: 3.5}, price:{$gt: 9000}})

// Or Operators
db.items.find({ $or: [{rating: {$lt: 3.5}, price: {$gt: 9000}}]})

// Deleting for data in mongo db 
// show bds
// use SourabhCard
// show collections

dbs.items.find({price: 1000})


dbs.items.deleteOne({price:  1000})
// deleteOne will delete the matching entry and will delete the first entry in case of multi document match

dbs.items.deleteMany({price: 1000})