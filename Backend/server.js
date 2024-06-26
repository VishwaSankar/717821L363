const express = require('express');

const gamingProducts = require('./gameprodserver');
const app = express();
const PORT = 4000;
const cors = require('cors');
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.get('/api/gaming-products', (req, res) => {
  res.json(gamingProducts);
});


app.get('/api/gaming-products/:productName', (req, res) => {
  const productName = req.params.productName;
  const product = gamingProducts.find(product => product.productname === productName);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ error: 'Product not found' });
  }
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
