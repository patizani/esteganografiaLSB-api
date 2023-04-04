const multer = require('multer');
const crypto = require('crypto');
const fs = require('fs');

const AppError = require("../utils/AppError");

const TMP_FOLDER = './tmp';

try {
  if (!fs.existsSync(TMP_FOLDER)) {
    fs.mkdirSync(TMP_FOLDER);
  }
} catch (err) {
  console.error(err);
}

const MULTER = {
  storage: multer.diskStorage({
    destination: TMP_FOLDER, 
    filename(request, file, callback) {
      crypto.randomBytes(16, (err, hash) => {
        if (err) callback(err);
        const filename = `${hash.toString('hex')}-${file.originalname}`; 

        callback(null, filename);  
      });
    },
  }),
  fileFilter(request, file, callback) {
    const allowedMines = [
      'image/bmp',
      'image/jpeg',
      'image/png',
      'image/gif'
    ];
    if (allowedMines.includes(file.mimetype)) {
      callback(null, true);
    } else {
      throw new AppError("Invalid file type.", 401);
    }
  },
};

module.exports = {
  TMP_FOLDER,
  MULTER
}