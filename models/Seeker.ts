import mongoose, { Schema, model, models } from 'mongoose';

const SeekerSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone: { type: String },
  skills: [String],
  experience: { type: String },
  education: { type: String },
  resume: { type: String },
}, { timestamps: true });

export default models.Seeker || model('Seeker', SeekerSchema);
