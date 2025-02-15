const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide product Name'],
      minlength: 5,
      maxlength: 50,
    },
    category: {
      // type: String,
      type: Schema.Types.ObjectId,
      ref: 'Category',
      required: [true, 'Please provide product Category'],
    },
    price: {
      type: Number,
      required: [true, 'Please provide product Price'],
    },
    discountPercentage: {
      type: Number,
      required: [true, 'Please provide discount Percentage'],
    },
    description: {
      type: String,
      required: [true, 'Please provide product Description'],
    },
    image: {
      type: String,
      required: [true, 'Please provide product Image'],
    },
    tax: {
      type: Number,
      required: [true, 'Please provide product Tax'],
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    isDelete: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Product', ProductSchema);
