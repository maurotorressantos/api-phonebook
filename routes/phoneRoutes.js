const router = require('express').Router()
const phoneController = require('../controllers/phoneController.js')

/**
 * Phones Resouce API Routes
 */

// Parent
router.get('/phones', phoneController.all)
router.post('/phones', phoneController.new)

// Child
router.get('/phones/:id', phoneController.child)
router.put('/phones/:id', phoneController.update)
router.delete('/phones/:id', phoneController.delete)

module.exports = router
