import mongoose from 'mongoose';

const { Schema } = mongoose;
const Time_Table_Schema = new Schema({
  Course_Name: { type: String, required: [true, 'Course_Name: required'] },
  Course_Code: { type: String, required: [true, 'Course_Code required'] },
  Course_Leader: { type: String, required: [true, 'Course_Leaderrequired'] },
  Room_No: { type: String, required: [true, 'Room_No required'] },
  Description: { type: String },
  Class_Time: { type: String, required: [true, 'Class_Time required'] },
  Block: { type: String, required: [true, 'Block required'] },
  Day: { type: String, required: [true, 'Day required'] },
});
