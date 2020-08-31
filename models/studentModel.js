import mongoose from 'mongoose';

// cria modelo
const studentSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  subject: {
    type: String,
    require: true,
  },
  type: {
    type: String,
    require: true,
  },
  value: {
    type: Number,
    require: true,
    min: 0,
  },
  lastModified: {
    type: Date,
    require: Date.now,
  },
});

// define o modelo criado anteriormente
const studentModel = mongoose.model('student', studentSchema, 'student');

export { studentModel };
