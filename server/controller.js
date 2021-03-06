module.exports = {
  getInventory: (req, res) => {
    const db = req.app.get("db");
    db.get_inventory()
      .then((inventory) => res.status(200).send(inventory))
      .catch((err) => res.status(500).send(err));
  },
  getProduct: (req, res) => {
    const db = req.app.get("db");
    const { id } = req.params;
    db.get_product(id)
      .then((product) => res.status(200).send(product))
      .catch((err) => res.status(500).send(err));
  },
  createProduct: (req, res) => {
    const db = req.app.get("db");
    const { img, name, price } = req.body;
    db.create_product({ img, name, price })
      .then(() => res.sendStatus(200))
      .catch((err) => res.status(500).send(err));
  },
  updateProduct: (req, res) => {
    const db = req.app.get("db");
    const { id } = req.params;
    const { img, name, price } = req.body;
    db.update_product({ img, name, price, id })
      .then(() => res.sendStatus(200))
      .catch((err) => res.status(500).send(err));
  },
  deleteProduct: (req, res) => {
    const db = req.app.get("db");
    const { id } = req.params;
    db.delete_product(id)
      .then(() => res.sendStatus(200))
      .catch((err) => res.status(500).send(err));
  }
};
