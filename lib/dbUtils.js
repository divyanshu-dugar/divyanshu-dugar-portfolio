import mongoose from 'mongoose';

const workExperienceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  organization: {
    type: String,
    required: true,
  },
  from: {
    type: String,
    required: true,
  },
  to: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  skills: {
    type: [String],
    required: true,
  },
});

mongoose.models = {};

export const WorkExperienceModel = mongoose.model('work-experience', workExperienceSchema);

export async function mongooseConnect() {
  if (mongoose.connections[0].readyState) {
    return true;
  }
  try {
    await mongoose.connect(`mongodb+srv://divyanshudugar0508:UhjWAtST8UMlTsgt@web-development.1nggs.mongodb.net/divyanshu-dugar-portfolio?retryWrites=true&w=majority&appName=web-development");
`);
    return true;
  } catch (err) {
    throw new Error(err);
  }
}