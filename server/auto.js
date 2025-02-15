const fs = require('fs');
const path = require('path');

// Helper function to create directories
const createDir = (dirPath) => {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
};

// Template for Model
const modelTemplate = (name) => `
const mongoose = require('mongoose');

const ${name}Schema = new mongoose.Schema( {
  name: String,
  type: { type: String, enum: ["file", "folder"], required: true },
  path: String, // Cloudinary URL (only for files)
  parentId: { type: mongoose.Schema.Types.ObjectId, ref: "Upload", default: null },
  children: [{ type: mongoose.Schema.Types.ObjectId, ref: "Upload" }],
  tags: [String],
  visibility: { type: String, enum: ["private", "public"], default: "private" }
},
  {
    timestamps: true,
  });

module.exports = mongoose.model('${name}', ${name}Schema);
`;

// Template for Controller
const controllerTemplate = (name) => `
const ${name} = require('../models/${name.toLowerCase()}');
const { StatusCodes } = require('http-status-codes');
const ApiResponse = require('../middleware/api-response');
const asyncWrapper = require('../middleware/async');
const { NotFoundError, BadRequestError } = require('../errors');

const getAll${name}s = asyncWrapper(async (req, res) => {
  const items = await ${name}.find({}).sort({ createdAt: -1 });
  const response = new ApiResponse(
    StatusCodes.OK,
    'All ${name} fetch successfully',
    items
  );
  response.send(res);
})

const get${name}ById = asyncWrapper(async (req, res) => {
  const { id } = req.params;
  const item = await ${name}.findById(id);
  if (!item) {
    throw new NotFoundError('${name} not found');
  }
  const response = new ApiResponse(
    StatusCodes.OK,
    'Data fetch successfully',
    item
  );
  response.send(res);
})

const create${name} = asyncWrapper(async (req, res) => {
  const item = await ${name}.create(req.body);
  const response = new ApiResponse(
    StatusCodes.CREATED,
    '${name} created successfully',
    item
  );
  response.send(res);
})

const update${name} = asyncWrapper(async (req, res) => {
  const { id } = req.params;
  const item = await ${name}.findByIdAndUpdate(id, req.body, { new: true });
  if (!item) {
    throw new NotFoundError('${name} not found');
  }
    const response = new ApiResponse(
    StatusCodes.OK,
    '${name} updated successfully',
    item
  );
  response.send(res);
})

const delete${name} = asyncWrapper(async (req, res) => {
  const { id } = req.params;
  const item = await ${name}.findByIdAndDelete(id);
   if (!item) {
    throw new NotFoundError('${name} not found');
  }
  const response = new ApiResponse(StatusCodes.NO_CONTENT);
  response.send(res);
})

module.exports = {
  getAll${name}s,
  get${name}ById,
  create${name},
  update${name},
  delete${name},
};
`;

// Template for Routes
const routeTemplate = (name) => `
const express = require('express');
const router = express.Router();

const { 
  getAll${name}s,
  get${name}ById,
  create${name},
  update${name},
  delete${name}
} = require('../controllers/${name.toLowerCase()}');

router.route('/')
  .get(getAll${name}s)
  .post(create${name});

router.route('/:id')
  .get(get${name}ById)
  .put(update${name})
  .delete(delete${name});

module.exports = router;
`;

// Update index.js to include new route
const updateIndexFile = (name) => {
  const indexPath = path.join(__dirname, 'index.js');
  const routeImport = `const ${name.toLowerCase()}Router = require('./routes/${name.toLowerCase()}');\n`;
  const routeUse = `app.use('/api/${name.toLowerCase()}', ${name.toLowerCase()}Router);\n`;

  let indexContent = fs.readFileSync(indexPath, 'utf-8');
  if (!indexContent.includes(routeImport)) {
    indexContent = routeImport + indexContent;
  }
  if (!indexContent.includes(routeUse)) {
    indexContent = indexContent.replace('// routes', `// routes\n${routeUse}`);
  }

  fs.writeFileSync(indexPath, indexContent);
};

// Main function to generate files
const generateFiles = (name) => {
  name = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();

  const modelDir = path.join(__dirname, 'models');
  const controllerDir = path.join(__dirname, 'controllers');
  const routeDir = path.join(__dirname, 'routes');

  createDir(modelDir);
  createDir(controllerDir);
  createDir(routeDir);

  fs.writeFileSync(
    path.join(modelDir, `${name.toLowerCase()}.js`),
    modelTemplate(name)
  );
  fs.writeFileSync(
    path.join(controllerDir, `${name.toLowerCase()}.js`),
    controllerTemplate(name)
  );
  fs.writeFileSync(
    path.join(routeDir, `${name.toLowerCase()}.js`),
    routeTemplate(name)
  );

  updateIndexFile(name);
};

// Command-line input
const name = process.argv[2];
if (!name) {
  console.log('Please provide a name for the model, controller, and route.');
  process.exit(1);
}

generateFiles(name);
console.log(`${name} files have been generated successfully!`);
