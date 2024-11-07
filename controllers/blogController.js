const Blog = require('../models/blogModel')

/**
 * Blog Resources
 */
exports.all = (request, response, next) => {
  Blog.find({})
    .then((result) => {
      response.json(result)
    })
    .catch((error) => next(error))
}

exports.new = (request, response, next) => {
  const { title, author, url, likes } = request.body

  const newBlog = new Blog({
    title,
    author,
    url,
    likes
  })

  newBlog
    .save()
    .then((result) => response.json(result))
    .catch((error) => next(error))
}
