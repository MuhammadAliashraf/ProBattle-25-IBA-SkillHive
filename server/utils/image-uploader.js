const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: 'ddnvx3zrg',
  api_key: '785669979779846',
  api_secret: '9WGJOFPJTE2ZiiscMPwHj6uBQYQ',
});

const opts = {
  overwrite: true,
  invalidate: true,
  resource_type: 'auto',
};

const uploadImageToCloudinary = async (fileBuffer, folderName) => {
  if (!fileBuffer) {
    throw new Error('Image file is required');
  }

  const base64Image = fileBuffer.toString('base64');

  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload(
      `data:image/png;base64,${base64Image}`,
      { folder: `resturant-images/${folderName}`, ...opts },
      (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result.secure_url);
        }
      }
    );
  });
};

module.exports = uploadImageToCloudinary;
