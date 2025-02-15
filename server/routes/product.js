const express = require('express');
const router = express.Router();
const multer = require('multer');

// Configure multer for handling file uploads
const storage = multer.memoryStorage(); // Use memory storage for file handling
const upload = multer({ storage: storage });

const {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} = require('../controllers/product');

router
  .route('/')
  .get(getAllProducts)
  .post(upload.single('image'), createProduct);

router
  .route('/:id')
  .get(getProductById)
  .put(upload.single('image'), updateProduct)
  .delete(deleteProduct);

module.exports = router;
