const fs = require('fs')

const { readFile } = require('../provides/DiskStorage');
const { encode } = require('../utils/Encoder');
const config = require('../configs/upload');

const encodeMessageInImage = ( request, response ) => {
  const { filename, message } = request.body;
  let file;
  try {
    file = readFile(filename);
  } catch(err) {
    return response.sendStatus(404);
  }
  const encodedFile = encode(message, file);

  const encodedFileName = `encoded_${filename}`
  
  fs.writeFileSync(
    `${config.TMP_FOLDER}/${encodedFileName}`, 
    encodedFile
  )

  return response.send({ encodedFileName })
}

module.exports = { encodeMessageInImage };
