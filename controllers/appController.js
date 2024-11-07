exports.home = (request, response) => {
  response.send('<h1>Hello World!</h1>')
}

exports.info = (request, response) => {
  const date = Date.now()
  const today = new Date(date).toUTCString()

  response.send(`<p>Phonebook </p><p>${today}</p>`)
}
