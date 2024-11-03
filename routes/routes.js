const express = require("express");
const morgan = require("morgan");
const router = express.Router();
const utils = require("../middlewares/middlewares");
const appController = require("../controllers/appController.js");

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: "unknown endpoint" });
};

/**
 * Routes Config
 */
const API_BODY = "api";

/**
 * Api Doc
 */
router.use(morgan(utils.requestLogger));
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
router.delete(`${PHONE_RESOURCE_URL}/:id`, appController.delete);

router.use(unknownEndpoint);
module.exports = router;
