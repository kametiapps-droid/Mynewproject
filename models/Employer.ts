import mongoose, { Schema, model, models } from 'mongoose';

const EmployerSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  company: { type: String, required: true },
  phone: { type: String },
  website: { type: String },
  status: { type: String, default: 'active', enum: ['active', 'banned'] },
}, { timestamps: true });

export default models.Employer || model('Employer', EmployerSchema);
