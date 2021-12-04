const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://userzero:userzero@ictakfiles.4ubv7.mongodb.net/LIBRARYAPP?retryWrites=true&w=majority",{useUnifiedTopology:true,useNewUrlParser:true});
const Schema = mongoose.Schema;
const UserSchema = new Schema({
    exampleInputEmail1:String,
    exampleInputPassword1:String,
  });
var Userdata = mongoose.model('userdatadata',UserSchema);
module.exports = Userdata;