const fs = require('fs');
const path = require('path');
const uploadConfig = require('../configs/upload');

const saveFile = (file) => {
  path.resolve(uploadConfig.TMP_FOLDER, file)
  return file;
}

const readFile = (filename) =>  {
  const data = fs.readFileSync(
    path.resolve(uploadConfig.TMP_FOLDER, filename),
  );
  const imageBytes = Uint8Array.from(data);

  return imageBytes;
}

module.exports = { saveFile, readFile };
