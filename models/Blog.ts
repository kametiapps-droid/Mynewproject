import mongoose, { Schema, model, models } from 'mongoose';

const BlogSchema = new Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  excerpt: { type: String, required: true },
  content: { type: String, required: true },
  image: { type: String },
  author: { type: String, default: 'Global Job Point' },
  featured: { type: Boolean, default: false },
  published: { type: Date, default: Date.now },
}, { timestamps: true });

export default models.Blog || model('Blog', BlogSchema);
