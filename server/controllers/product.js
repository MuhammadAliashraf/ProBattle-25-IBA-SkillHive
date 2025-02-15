const Product = require('../models/product');
const { StatusCodes } = require('http-status-codes');
const ApiResponse = require('../middleware/api-response');
const uploadImageToCloudinary = require('../utils/image-uploader');
const asyncWrapper = require('../middleware/async');
const { NotFoundError } = require('../errors');

const getAllProducts = asyncWrapper(async (req, res) => {
  const items = await Product.find({})
    .sort({ createdAt: -1 })
    .populate({ path: 'category', model: 'Category' });
  const response = new ApiResponse(
    StatusCodes.OK,
    'All product fetch successfully',
    items
  );
  response.send(res);
});

const getProductById = asyncWrapper(async (req, res) => {
  const { id } = req.params;
  const item = await Product.findById(id).populate({
    path: 'category',
    model: 'Category',
  });
  if (!item) {
    throw new NotFoundError('Product not found');
  }
  const response = new ApiResponse(
    StatusCodes.OK,
    'Product fetch successfully',
    item
  );
  response.send(res);
});

const createProduct = asyncWrapper(async (req, res) => {
  const imageUrl = await uploadImageToCloudinary(
    req?.file?.buffer,
    'product-images'
  );
  const data = {
    ...req.body,
    image: imageUrl,
  };
  const result = await Product.create(data);
  const response = new ApiResponse(
    StatusCodes.CREATED,
    'Product created successfully',
    result
  );
  response.send(res);
});

const updateProduct = asyncWrapper(async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  if (!product) {
    throw new NotFoundError('Product not found');
  }

  let imageUrl = product.image;
  if (req.file) {
    imageUrl = await uploadImageToCloudinary(
      req?.file?.buffer,
      'product-images'
    );
  }
  const updatedData = {
    ...req.body,
    image: imageUrl,
  };

  const updatedProduct = await Product.findByIdAndUpdate(id, updatedData, {
    new: true,
  });

  if (!updatedProduct) {
    throw new NotFoundError('Failed to update product');
  }
  const response = new ApiResponse(
    StatusCodes.OK,
    'Product updated successfully',
    updatedProduct
  );
  response.send(res);
});

const deleteProduct = asyncWrapper(async (req, res) => {
  const { id } = req.params;
  const item = await Product.findByIdAndDelete(id);
  if (!item) {
    throw new NotFoundError('Product not found');
  }
  const response = new ApiResponse(StatusCodes.NO_CONTENT);
  response.send(res);
});

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
