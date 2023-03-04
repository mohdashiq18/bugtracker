const mongoose = require("mongoose");
const bugSchema = mongoose.Schema({
  "tital":{type:String},
  "buglevel":{type:String}
});

const BugModule = mongoose.model("Bug", bugSchema);
module.exports = {
  BugModule,
};