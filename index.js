// index.js
const express = require('express')
const app = express()
const PORT = 4000


app.get('/', (req, res) => {
  res.status(200).json('Welcome, your app is working well');
})


app.listen(3000, () => {
  console.log(`Server running at http://localhost:${3000}`);
});

// Export the Express API
module.exports = app