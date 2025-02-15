const { StatusCodes } = require('http-status-codes');
const ApiResponse = require('../middleware/api-response');
const asyncWrapper = require('../middleware/async');
const User = require('../models/User');

const getProfile = asyncWrapper(async (req, res) => {
  const { userId } = req.user;
  const user = await User.findById({ _id: userId });
  if (!user) {
    throw new Error('User not found');
  }
  const { password: excludedPassword, ...rest } = user.toObject();
  const response = new ApiResponse(
    StatusCodes.OK,
    'Data fetch successfully',
    rest
  );
  response.send(res);
});

const resetPassword = asyncWrapper(async (req, res) => {
  //TODO:this is not working
  const { userId } = req.user;
  const { oldPassword, newPassword } = req.body;
  const user = await User.findById({ _id: userId });
  console.log(oldPassword, newPassword);
  if (!user) {
    throw new Error('User not found');
  }
  const isPasswordValid = await user.comparePassword(oldPassword);

  if (!isPasswordValid) {
    throw new Error('Old password is incorrect');
  }
  user.password = newPassword;
  await user.save();

  const response = new ApiResponse(
    StatusCodes.OK,
    'Password reset successfully',
    user
  );
  response.send(res);
  // TODO: Send email with new password
});

const updateProfile = asyncWrapper(async (req, res) => {
  const { userId } = req.user;
  const { password, ...updateData } = req.body;
  const user = await User.findByIdAndUpdate({ _id: userId }, updateData, {
    new: true,
  });
  const { password: excludedPassword, ...rest } = user.toObject();
  const response = new ApiResponse(
    StatusCodes.OK,
    'Profile updated successfully',
    rest
  );
  response.send(res);
  // TODO: Send email with updated profile data
});

module.exports = {
  getProfile,
  resetPassword,
  updateProfile,
};
