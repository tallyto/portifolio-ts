import mongoose from 'mongoose'

const user = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  age: {
    type: String,
    required: true
  }
}, { timestamps: true})
const userSchema =  mongoose.model('user',user)
export default userSchema