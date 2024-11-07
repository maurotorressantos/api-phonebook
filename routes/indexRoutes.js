const router = require('express').Router()
const appController = require('../controllers/appController.js')
const blogRoutes = require('./blogRoutes.js')
const phoneRoutes = require('./phoneRoutes.js')

/**
 * Api Doc
 */

router.get('/', appController.home)
router.get('/info', appController.info)
router.use(phoneRoutes)
router.use(blogRoutes)

module.exports = router
