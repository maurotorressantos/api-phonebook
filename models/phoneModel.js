const mongoose = require('mongoose')
const { formatResponse } = require('../utils/middlewares')

const phoneSchema = new mongoose.Schema({
  name: {
    type: String,
    minLength: 3,
    required: true
  },
  phone: {
    type: String,
    validate: {
      validator: function (v) {
        return /\d{1,3}-\d{1,8}$/.test(v)
      },
      message: (props) => `${props.value} is not a valid phone number!`
    },
    required: [true, 'User phone number required']
  },
  content: {
    type: String,
    minLength: 5,
    required: false
  },
  important: Boolean
})

phoneSchema.set('toJSON', {
  transform: formatResponse
})

module.exports = mongoose.model('phones', phoneSchema)
