import mongoose from 'mongoose';

const googleUserSchema = mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  image:{
    type:String
  },
  provider:{
    type:String,
    required:true,
    unique:true
  }
});

export const GoogleUser = mongoose.models.GoogleUser || mongoose.model("GoogleUser", googleUserSchema);

