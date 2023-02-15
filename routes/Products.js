const router = require("express").Router();
const Products = require("../src/models/model");

/*----------------------------------*/
router.get("/getProducts", async function (req, res) {
  const products = await Products.find();
  console.log("RETURN PRODUCTS: ", products);
  res.send(products);
});

router.post("/inserProduct", async (req, res) => {
  const product = new Products({
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category,
    datecreated: new Date(),
    url: req.body.url,
  });
  await product.save(function (err, result) {
    if (err) {
      console.log(err);
      res.status(400).send("Bad Request");
    } else {
      console.log("INSERT NEW PRODUCT: ", result);
      res.status(200).send("Insert Done");
    }
  });
});

module.exports = router;
