const express = require('express')
const app = express()
require('dotenv').config()
const port = process.env.PORT || 3000


// getting-started.js
const mongoose = require('mongoose');
const { Schema, model } = mongoose;

main().catch(err => console.log(err));

async function main() {
   await mongoose.connect(`mongodb+srv://securememo:${process.env.MONGODB_PASSWORD}@cluster0.e1en0n4.mongodb.net/?retryWrites=true&w=majority`);

   const testUser = await User.findOne({ name: 'test' }).exec();
   console.log(testUser)
}

const userSchema = new mongoose.Schema({
   name: String
});

const User = mongoose.model('User', userSchema);


// const example = new User({ name: 'test' });
// console.log(example.name);



app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})