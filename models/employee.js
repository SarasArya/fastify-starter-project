const mongoose = require('mongoose');

const modelProperties = {
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  empId: { type: String, required: true },
  imageUrl: { type: String, required: true },
  designation: { type: String, required: true },
  emailId: { type: String, required: true },
  mobileNumber: { type: String, required: true },
  role: { type: String, required: true },
};

const modelOptions = {
  timeStamps: true,
};

const employeeSchema = mongoose.Schema(modelProperties, modelOptions);

module.exports = employeeSchema;
