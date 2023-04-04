const { Router } = require('express');

const {
  encodeMessageInImage } = require('../controllers/EncodeController');

const encodeRoutes = Router();

encodeRoutes.post('/', encodeMessageInImage);

module.exports = encodeRoutes; 
