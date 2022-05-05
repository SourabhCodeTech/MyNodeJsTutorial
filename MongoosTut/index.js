// Getting Starting.js
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/SourabhCard', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

// db.once('open', function () {
    // we're connected!
//     console.log("We are Connected Bro!");
// });

const kittySchema = new mongoose.Schema({
    name: String
});
kittySchema.methods.speak = function () {
    const greeting =  "My name is " + this.name
    // console.log(greeting);
}

const Kitten = mongoose.model('SourabhKitten', kittySchema);

const SourabhCard = new Kitten({ name: 'SourabhCard' });
console.log(SourabhCard.name); // 'Silence'
// silence.speak()

SourabhCard.save(function (err, silence) {
    if (err) return console.error(err);
    // SourabhCard.speak();
});

Kitten.find( {name: "SourabhCard1"},function (err, kittens) {
    if (err) return console.error(err);
    console.log(kittens);
})