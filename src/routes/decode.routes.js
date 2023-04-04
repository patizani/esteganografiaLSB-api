const { Router } = require('express');

const { decodeMessageFromImage } = require('../controllers/DecodeController');

const decodeRoutes = Router();

decodeRoutes.get('/', decodeMessageFromImage);

module.exports = decodeRoutes; 
