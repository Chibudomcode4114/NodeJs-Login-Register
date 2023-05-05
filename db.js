const Mongoose = require("mongoose");

const localDB = `mongodb+srv://chikwendu:1tzchib0ss@cluster0.qcp35te.mongodb.net/test`;

const connectDB = async () => {
  await Mongoose.connect(localDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  console.log("MongoDB Connected");
};

module.exports = connectDB;
