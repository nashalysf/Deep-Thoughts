const mongoose = require("mongoose");

mongoose.connect(
  process.env.MONGODB_URI || "https://git.heroku.com/lit-harbor-12267.git",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);

module.exports = mongoose.connection;
