let mongoose= require("mongoose");

let UserSchema = new mongoose.Schema({
  name:{
    type: String,
    required: [true, 'Name can not be blank']
  },
  // questions: [{
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'Question'
  // }],
  // answers: [{
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'Answer'
  polls: [{
        type: mongoose.Schema.Types.ObjectId, ref: 'Poll'
    }],
}, {timestamps: true})

mongoose.model('User', UserSchema);
