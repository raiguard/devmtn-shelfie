require("dotenv").config();
const express = require("express");
const massive = require("massive");

const cont = require("./controller");

const app = express();

app.use(express.json());

const { SERVER_PORT, CONNECTION_STRING } = process.env;

massive({
  connectionString: CONNECTION_STRING,
  ssl: { rejectUnauthorized: false }
})
  .then((db) => {
    app.set("db", db);
    console.log("Database connection established");
  })
  .catch((err) => console.log(err));

app.get("/api/inventory", cont.getInventory);
app.get("/api/product/:id", cont.getProduct);
app.post("/api/product", cont.createProduct);
app.put("/api/product/:id", cont.updateProduct);
app.delete("/api/product/:id", cont.deleteProduct);

app.listen(SERVER_PORT, () => console.log(`Server is running on port ${SERVER_PORT}`));
