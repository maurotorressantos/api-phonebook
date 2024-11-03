const { generateId } = require("../helpers/helpers");

/**
 * Data
 */
let phones = [
  {
    name: "Dan Abramov",
    phone: "12-43-234345",
    id: "n56f",
    important: true,
  },
  {
    name: "Mary Poppendieck",
    phone: "39-23-6423122",
    id: "b76e",
    important: false,
  },
];

/**
 * Info
 */
exports.home = (req, res) => {
  res.send("<h1>Hello World!</h1>");
};

exports.info = (req, res) => {
  const date = Date.now();
  const today = new Date(date).toUTCString();
  const numberPhones = phones.length;

  res.send(
    `<p>Phonebook has info for ${numberPhones} people(s)</p><p>${today}</p>`
  );
};

/**
 * Phone Resources
 */
exports.all = (req, res) => {
  res.json(phones);
};

exports.new = (request, response) => {
  const body = request.body;

  if (!body.content) {
    return response.status(400).json({
      error: "content missing",
    });
  }

  const phone = {
    name: body.name,
    phone: body.phone,
    important: Boolean(body.important) || false,
    content: body.content,
    id: generateId(),
  };

  phones = phones.concat(phone);
  response.testData = JSON.stringify(phone);
  response.json(phone);
};

exports.child = (request, response) => {
  const id = request.params.id;
  const phone = phones.find((phone) => phone.id === id);
  phone ? response.json(phone) : response.status(404).end();
};

exports.delete = (request, response) => {
  const id = request.params.id;
  phone = phones.filter((phone) => phone.id !== id);

  response.status(204).end();
};
