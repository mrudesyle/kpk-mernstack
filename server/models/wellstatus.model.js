const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const wellStatuschema = new Schema({
  well: { type: String},
  status: { type: String},
  comments: String,
  date: { type: Date, default: Date.now },
  approved: {type: Number, min:0, max:2, default: 0}
});

const Wellstatus = mongoose.model("Wellstatus", wellStatuschema);

module.exports = Wellstatus;



