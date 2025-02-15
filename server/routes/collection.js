// const express = require('express');
// const router = express.Router();

// const {
//   getAllCollections,
//   getCollectionById,
//   createCollection,
//   updateCollection,
//   deleteCollection
// } = require('../controllers/collection');

// router.route('/')
//   .get(getAllCollections)
//   .post(createCollection);

// router.route('/:id')
//   .get(getCollectionById)
//   .put(updateCollection)
//   .delete(deleteCollection);

// module.exports = router;
const express = require('express');
const router = express.Router();
const upload = require('../middleware/multer');
const {
  uploadFiles,
  getFilesAndFolders,
} = require('../controllers/collection');

// 📌 Upload Files & Folders
router.post('/upload', upload.array('files'), uploadFiles);

// 📌 Get Files & Folders
router.get('/', getFilesAndFolders);

module.exports = router;
