const mongoose = require("mongoose");

if (process.argv.length < 3) {
  console.log("give password as argument");
  process.exit(1);
}

const password = process.argv[2];

const url = `mongodb+srv://dbuserfullstackopen:${password}@clusterfullstackopen.mi12o.mongodb.net/?retryWrites=true&w=majority&appName=ClusterFullstackOpen`;

mongoose.set("strictQuery", false);

mongoose.connect(url);

const phoneSchema = new mongoose.Schema({
  name: String,
  phone: String,
  content: String,
  important: Boolean,
});

const Phone = mongoose.model("Phone", phoneSchema);

const phone = new Phone({
  name: "Dan Abramov",
  phone: "12-43-234345",
  content: "Example contento of user",
  important: true,
});

phone.save().then((result) => {
  console.log("New contact saved!");
  mongoose.connection.close();
});
