const { Router } = require("express");

const imageRouter = require("./image.routes");
const encodeRouter = require("./encode.routes");
const decodeRouter = require("./decode.routes");

const routes = Router();
routes.use("/image", imageRouter); 
routes.use("/encode", encodeRouter)
routes.use("/decode", decodeRouter)


module.exports = routes;

