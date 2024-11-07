const router = require('express').Router()
const blogController = require('../controllers/blogController.js')

/**
 * Phones Resouce API Routes
 */

// Parent
router.get('/blogs', blogController.all)
router.post('/blogs', blogController.new)

module.exports = router
