const router = require('express').Router()
const appController = require('../controllers/phoneController.js')

/**
 * Routes Config
 */
const PHONE_RESOURCE_URL = '/api/phones'

/**
 * Api Doc
 */

router.get('/', appController.home)
router.get('/info', appController.info)

/**
 * Phones Resouce API Routes
 */

// Parent
router.get(PHONE_RESOURCE_URL, appController.all)
router.post(PHONE_RESOURCE_URL, appController.new)

// Child
router.get(`${PHONE_RESOURCE_URL}/:id`, appController.child)
router.put(`${PHONE_RESOURCE_URL}/:id`, appController.update)
router.delete(`${PHONE_RESOURCE_URL}/:id`, appController.delete)

module.exports = router
