let mongoose= require("mongoose");

let PollSchema = new mongoose.Schema({
  question:{
    type: String,
    required:[true, 'Question cannot be blank.'],
    minlength: [8, 'Question must be at least 8 characters long.']
  },
  option1:{
    option:{
      type: String,
      required:[true, 'Option 1 cannot be blank.'],
      minlength: [3, 'Option 1 must be at least 3 characters long.']
    },
    votes: {
        type: Number,
        default:0
    },
  },
  option2:{
    option:{
      type: String,
      required:[true, 'Option 2 cannot be blank.'],
      minlength: [3, 'Option 1 must be at least 3 characters long.']
    },
    votes: {
        type: Number,
        default:0
    },
  },
  option3:{
    option:{
      type: String,
      required:[true, 'Option 3 cannot be blank.'],
      minlength: [3, 'Option 1 must be at least 3 characters long.']
    },
    votes: {
        type: Number,
        default:0
    },
  },
  option4:{
    option:{
      type: String,
      required:[true, 'Option 4 cannot be blank.'],
      minlength: [3, 'Option 1 must be at least 3 characters long.']
    },
    votes: {
        type: Number,
        default:0
    },
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
}, {timestamps: true})

mongoose.model('Poll', PollSchema);
