const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('../config/cloudinary');

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'sunrise_school_notices', // Folder name in Cloudinary
    resource_type: 'auto', // Important: allows non-image files like PDFs
    allowed_formats: ['jpg', 'jpeg', 'png', 'webp', 'pdf', 'doc', 'docx']
  }
});

const uploadAttachment = multer({ 
  storage: storage,
  limits: {
    fileSize: 20 * 1024 * 1024 // 20 MB max file size
  }
});

module.exports = uploadAttachment;
