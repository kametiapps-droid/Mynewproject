import mongoose, { Schema, model, models } from 'mongoose';

const JobSchema = new Schema({
  title: { type: String, required: true },
  company: { type: String, required: true },
  location: { type: String, required: true },
  type: { type: String, required: true, enum: ['Full-time', 'Part-time', 'Contract', 'Freelance'] },
  salary: { type: String },
  description: { type: String, required: true },
  requirements: [String],
  employerId: { type: Schema.Types.ObjectId, ref: 'Employer' },
  posted: { type: Date, default: Date.now },
  status: { type: String, default: 'active', enum: ['active', 'closed'] },
}, { timestamps: true });

export default models.Job || model('Job', JobSchema);
