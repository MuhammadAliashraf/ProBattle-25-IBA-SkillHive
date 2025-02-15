const Upload = require('../models/collection');
const cloudinary = require('../config/cloudinary');
const fs = require('fs-extra');
const path = require('path');

// 📌 Recursive Function to Upload Nested Folders
async function uploadFolderStructure(dirPath, parentId = null) {
  // const items = await fs.readdir(dirPath);

  // for (const item of items) {
  //   const itemPath = path.join(dirPath, item);
  //   const stats = await fs.stat(itemPath);

  //   if (stats.isDirectory()) {
  //     // 🔹 If it's a folder, create a record in MongoDB
  //     const newFolder = new Upload({ name: item, type: 'folder', parentId });
  //     await newFolder.save();

  //     // 🔹 Recursive call for nested folders
  //     await uploadFolderStructure(itemPath, newFolder._id);
  //   } else {
  //     // 🔹 If it's a file, upload to Cloudinary
  //     const cloudinaryResult = await cloudinary.uploader.upload(itemPath, {
  //       folder: 'uploads',
  //     });

  //     // 🔹 Save file metadata in MongoDB
  //     const newFile = new Upload({
  //       name: item,
  //       type: 'file',
  //       path: cloudinaryResult.secure_url,
  //       parentId,
  //     });
  //     await newFile.save();
  //   }
  // }
  try {
    const { parentId } = req.body;
    let folderMap = {};

    for (const file of req.files) {
      const folderPath = file.originalname.split('/').slice(0, -1).join('/'); // Extract folder structure

      // Create folder in MongoDB if it doesn't exist
      if (folderPath && !folderMap[folderPath]) {
        const folder = new Upload({
          name: folderPath.split('/').pop(),
          type: 'folder',
          parentId: parentId || null,
        });
        await folder.save();
        folderMap[folderPath] = folder._id;
      }

      // Upload file to Cloudinary
      const cloudinaryResult = await cloudinary.uploader.upload_stream(
        { resource_type: 'auto', folder: `uploads/${folderPath}` },
        async (error, cloudinaryRes) => {
          if (error) return res.status(500).json({ error: error.message });

          const newFile = new Upload({
            name: file.originalname.split('/').pop(),
            type: 'file',
            path: cloudinaryRes.secure_url,
            parentId: folderMap[folderPath] || parentId || null,
          });

          await newFile.save();
        }
      );

      cloudinaryResult.end(file.buffer);
    }

    res.status(201).json({ message: 'Folder uploaded successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// 📌 Upload API
exports.uploadFiles = async (req, res) => {
  try {
    const uploadDir = path.join(__dirname, '../temp');
    await uploadFolderStructure(uploadDir, null);

    // 🔹 Clean up temporary folder
    await fs.remove(uploadDir);

    res.status(201).json({ message: 'Upload Successful' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// 📌 Get Files & Folders (Tree View)
exports.getFilesAndFolders = async (req, res) => {
  try {
    const filesAndFolders = await Upload.find({ parentId: null }).populate(
      'children'
    );
    res.status(200).json(filesAndFolders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
