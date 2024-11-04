// server.js
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

// Temporary data store (in-memory)
let dataStore = [];

// GET - Retrieve all items
app.get("/items", (req, res) => {
  res.json(dataStore);
});

// POST - Create a new item
app.post("/items", (req, res) => {
  const newItem = {
    id: dataStore.length + 1,
    name: req.body.name,
    description: req.body.description,
  };
  dataStore.push(newItem);
  res.status(201).json(newItem);
});

// PUT - Update an item by ID
app.put("/items/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const itemIndex = dataStore.findIndex((item) => item.id === id);
  if (itemIndex !== -1) {
    dataStore[itemIndex] = {
      id,
      name: req.body.name,
      description: req.body.description,
    };
    res.json(dataStore[itemIndex]);
  } else {
    res.status(404).json({ message: "Item not found" });
  }
});

// DELETE - Remove an item by ID
app.delete("/items/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const itemIndex = dataStore.findIndex((item) => item.id === id);
  if (itemIndex !== -1) {
    const deletedItem = dataStore.splice(itemIndex, 1);
    res.json(deletedItem);
  } else {
    res.status(404).json({ message: "Item not found" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
