import mongoose from 'mongoose';

const UserSchema = mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

export const User = mongoose.models.User || mongoose.model("User", UserSchema);

