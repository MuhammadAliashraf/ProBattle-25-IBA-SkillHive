const mongoose = require('mongoose');

const CollectionSchema = new mongoose.Schema(
  {
    name: String,
    type: { type: String, enum: ['file', 'folder'], required: true },
    path: String, // Cloudinary URL (only for files)
    parentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Upload',
      default: null,
    },
    children: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Upload' }],
    tags: [String],
    visibility: {
      type: String,
      enum: ['private', 'public'],
      default: 'private',
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Collection', CollectionSchema);
