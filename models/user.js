import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({

  name: {
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
  role: {
    type: String,
    required: false,
    default: "user"
  },

}, { timestamps: true });

// เช็คว่ามีโมเดลชื่อ User อยู่แล้วหรือไม่ ถ้าไม่มีก็สร้างโมเดล
const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;