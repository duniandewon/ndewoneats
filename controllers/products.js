const Product = require('../models/Product');

module.exports = {
  getProducts: async (req, res, next) => {
    const products = await Product.find({});

    return res.json(products);
  },

  createProduct: async (req, res, next) => {
    const { name, description, price, image, category } = req.body;

    if (!name) return res.status(400).json({ msg: "Name shouldn't be empty" });

    if (!description)
      return res.status(400).json({ msg: "Description shouldn't be empty" });

    if (!price)
      return res.status(400).json({ msg: "Price shouldn't be empty" });

    if (!image)
      return res.status(400).json({ msg: "Image shouldn't be empty" });

    if (!category)
      return res.status(400).json({ msg: "Categoty shouldn't be empty" });

    const newProduct = new Product({
      name,
      description,
      price,
      image,
      category,
    });

    const product = await newProduct.save();

    return res.json(product);
  },

  updateProduct: async (req, res, next) => {
    const { name, description, price, image, category } = req.body;

    const productFields = {};

    if (name) productFields.name = name;
    if (description) productFields.description = description;
    if (price) productFields.price = price;
    if (image) productFields.image = image;
    if (category) productFields.category = category;

    let product = await Product.findById(req.params.id);

    if (!product) return res.status(400).json({ msg: 'Product not found' });

    product = await Product.findByIdAndUpdate(
      req.params.id,
      { $set: productFields },
      { new: true }
    );

    return res.json(product);
  },

  deleteProduct: async (req, res, next) => {
    let product = await Product.findById(req.params.id);

    if (!product) return res.status(400).json({ msg: 'Product not found' });

    await Product.findByIdAndRemove(req.params.id);

    res.json({ msg: 'Product removed' });
  },
};
