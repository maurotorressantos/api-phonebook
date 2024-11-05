const Phone = require("../models/phone");

/**
 * Info
 */
exports.home = (req, res) => {
  res.send("<h1>Hello World!</h1>");
};

exports.info = (req, res) => {
  const date = Date.now();
  const today = new Date(date).toUTCString();

  res.send(`<p>Phonebook </p><p>${today}</p>`);
};

/**
 * Phone Resources
 */
exports.all = (req, res, next) => {
  Phone.find({})
    .then((result) => {
      res.json(result);
    })
    .catch((error) => next(error));
};

exports.new = (request, response, next) => {
  const body = request.body;

  /*if (!body.content) {
    return response.status(400).json({
      error: "content missing",
    });
  }*/

  const newPhone = new Phone({
    name: body.name,
    phone: body.phone,
    important: Boolean(body.important) || false,
    content: "Example content body",
  });

  newPhone
    .save()
    .then((result) => response.json(result))
    .catch((error) => next(error));
};

exports.child = (request, response, next) => {
  Phone.findById(request.params.id)
    .then((phone) => {
      if (phone) {
        response.json(phone);
      } else {
        response.status(404).end();
      }
    })
    .catch((error) => next(error));
};

exports.delete = (request, response, next) => {
  Phone.findByIdAndDelete(request.params.id)
    .then((phone) => {
      console.log(phone);
      response.status(204).end();
    })
    .catch((error) => next(error));
};

exports.update = (request, response, next) => {
  const body = request.body;

  const phone = {
    important: body.important,
  };

  Phone.findByIdAndUpdate(request.params.id, phone, { new: true })
    .then((updatedPhone) => {
      response.json(updatedPhone);
    })
    .catch((error) => next(error));
};
