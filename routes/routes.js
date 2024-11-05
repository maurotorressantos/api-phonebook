const express = require("express");
const morgan = require("morgan");
const router = express.Router();
const {
  requestLogger,
  errorHandler,
  unknownEndpoint,
} = require("../middlewares/middlewares");
const appController = require("../controllers/appController.js");

/**
 * Routes Config
 */
const API_BODY = "api";

/**
 * Api Doc
 */
router.use(morgan(requestLogger));
router.get("/", appController.home);
router.get("/info", appController.info);

/**
 * Phones Resouce API Routes
 */

const PHONE_RESOURCE_URL = `/${API_BODY}/phones`;
// Parent
router.get(PHONE_RESOURCE_URL, appController.all);
router.post(PHONE_RESOURCE_URL, appController.new);
// Child
router.get(`${PHONE_RESOURCE_URL}/:id`, appController.child);
router.put(`${PHONE_RESOURCE_URL}/:id`, appController.update);
router.delete(`${PHONE_RESOURCE_URL}/:id`, appController.delete);

router.use(unknownEndpoint);
router.use(errorHandler);
module.exports = router;
