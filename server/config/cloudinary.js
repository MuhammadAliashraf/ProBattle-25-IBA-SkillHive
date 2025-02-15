const cloudinary = require('cloudinary').v2;
require('dotenv').config();

cloudinary.config({
  cloud_name: 'ddnvx3zrg',
  api_key: '785669979779846',
  api_secret: '9WGJOFPJTE2ZiiscMPwHj6uBQYQ',
});

module.exports = cloudinary;
