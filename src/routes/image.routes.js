const { Router } = require('express');
const express = require('express');
const multer = require('multer');
const uploadConfig = require('../configs/upload');

const ImageController = require('../controllers/ImageController');

const imageRoutes = Router();
const upload = multer(uploadConfig.MULTER);

const imageController = new ImageController();
imageRoutes.post('/', upload.single('file'), imageController.create);
imageRoutes.use('/', express.static(uploadConfig.TMP_FOLDER));


module.exports = imageRoutes; 