const Phone = require('../models/phoneModel')

/**
 * Info
 */
exports.home = (request, response) => {
  response.send('<h1>Hello World!</h1>')
}

exports.info = (request, response) => {
  const date = Date.now()
  const today = new Date(date).toUTCString()

  response.send(`<p>Phonebook </p><p>${today}</p>`)
}

/**
 * Phone Resources
 */
exports.all = (request, response, next) => {
  Phone.find({})
    .then((result) => {
      response.json(result)
    })
    .catch((error) => next(error))
}

exports.new = (request, response, next) => {
  const { name, phone, content, important } = request.body

  const newPhone = new Phone({
    name: name,
    phone: phone,
    important: Boolean(important) || false,
    content: content
  })

  newPhone
    .save()
    .then((result) => response.json(result))
    .catch((error) => next(error))
}

exports.child = (request, response, next) => {
  Phone.findById(request.params.id)
    .then((phone) => {
      if (phone) {
        response.json(phone)
      } else {
        response.status(404).end()
      }
    })
    .catch((error) => next(error))
}

exports.delete = (request, response, next) => {
  Phone.findByIdAndDelete(request.params.id)
    .then(() => {
      response.status(204).end()
    })
    .catch((error) => next(error))
}

exports.update = (request, response, next) => {
  const { content, important, id } = request.body

  const phone = {
    content,
    important
  }

  Phone.findByIdAndUpdate(id, phone, {
    new: true,
    runValidators: false, // Change by True when frontend add field to update content data.s
    context: 'query'
  })
    .then((updatedPhone) => {
      response.json(updatedPhone)
    })
    .catch((error) => next(error))
}
