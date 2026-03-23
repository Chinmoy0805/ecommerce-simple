const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Sample products (you can edit later)
let products = [
  {
    id: 1,
    name: "Lay's Chips",
    category: "Snacks",
    price: 2,
    image: "https://via.placeholder.com/150"
  },
  {
    id: 2,
    name: "Kurta",
    category: "Clothes",
    price: 15,
    image: "https://via.placeholder.com/150"
  }
];

// Home route
app.get('/', (req, res) => {
  res.send('Ecommerce Backend Running 🚀');
});

// Get all products
app.get('/products', (req, res) => {
  res.json(products);
});

// Add product (Admin use)
app.post('/products', (req, res) => {
  const product = req.body;
  product.id = products.length + 1;
  products.push(product);
  res.json({ message: "Product added", product });
});

// Delete product
app.delete('/products/:id', (req, res) => {
  const id = parseInt(req.params.id);
  products = products.filter(p => p.id !== id);
  res.json({ message: "Product deleted" });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
