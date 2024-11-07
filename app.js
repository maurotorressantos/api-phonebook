/**
 * Core
 */

const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')

/**
 * Dependencies
 */

const config = require('./utils/config')
const logger = require('./utils/logger')
const middlewares = require('./utils/middlewares.js')

/**
 * Routes
 */

const phoneRoutes = require('./routes/phoneRoutes.js')

/**
 * Database connection
 */

mongoose.set('strictQuery', false)
logger.info('connecting to', config.MONGODB_URI)
mongoose
  .connect(config.MONGODB_URI)
  .then(() => {
    logger.info('Connected to MongoDB')
  })
  .catch((error) => logger.error('Error connecting to MongoDB:', error.message))

/**
 * Initial Config
 */

app.use(cors())
app.use(express.static('dist'))
app.use(express.json())
app.use(middlewares.requestLogger)
app.use('/', phoneRoutes)
app.use(middlewares.unknownEndpoint)
app.use(middlewares.errorHandler)

/**
 * End
 */

module.exports = app
