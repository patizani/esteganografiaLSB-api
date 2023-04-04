const { saveFile } = require("../provides/DiskStorage");

class ImageController {
  async create( request, response ){
    const imageFilename = request.file.filename;
    const filename = saveFile(imageFilename);
    
    return response.json(filename);

  }
}

module.exports = ImageController;