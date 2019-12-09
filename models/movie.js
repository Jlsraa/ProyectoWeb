const mongoose = require('mongoose')

var Schema = mongoose.Schema

//Define Schema
  var Schema = new Schema({
    tittle: {type:String , required: true},
    author:{type:String, required: true},
    calification:{
        type:Number,
        default: 1,
		required: true
    },
	user:{type:String , required:true},
    published_at: { type: Date, default: Date.now,required: true },
  });

module.exports= mongoose.model('Movie',  Schema)