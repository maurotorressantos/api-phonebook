const mongoose = require('mongoose')
const { formatResponse } = require('../utils/middlewares')

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    minLength: 3,
    required: [true, 'Title blog is required']
  },
  author: {
    type: String,
    minLength: 5,
    required: false
  },
  url: {
    type: String
  },
  likes: {
    type: Number
  }
})

blogSchema.set('toJSON', {
  transform: formatResponse
})

module.exports = mongoose.model('blogs', blogSchema)
