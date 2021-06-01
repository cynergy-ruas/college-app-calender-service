import mongoose from 'mongoose';

const { Schema } = mongoose;
const Submission_Schema = new Schema({
  Course_Name: { type: String, required: [true, 'Course_Name: required'] },
  Course_Code: { type: String, required: [true, 'Course_Code required'] },
  Course_Leader: { type: String, required: [true, 'Course_Leaderrequired'] },
  Description: { type: String },
  Submission_Date: {
    type: String,
    required: [true, 'Submission_Date required'],
  },
  Mode: { type: String, required: [true, 'Mode required'] },
});
