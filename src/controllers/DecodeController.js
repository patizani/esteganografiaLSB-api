const { readFile } = require('../provides/DiskStorage');
const { decode } = require('../utils/Encoder');

const decodeMessageFromImage = ( request, response ) => {
  const { filename } = request.body;
  let file;
  try {
    file = readFile(filename);
  } catch(err) {
    return response.sendStatus(404);
  }
  const message = decode(file);
  response.send({ message });
}

module.exports = { decodeMessageFromImage };
