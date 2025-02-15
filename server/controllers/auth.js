const Users = require('../models/User');
const { StatusCodes } = require('http-status-codes');
const { BadRequestError, UnauthenticatedError } = require('../errors');
const ApiResponse = require('../middleware/api-response');

const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new BadRequestError('Please provide email and password');
  }
  const user = await Users.findOne({ email });
  if (!user) {
    throw new UnauthenticatedError('Invalid Credentials');
  }
  const isPasswordValid = await user.comparePassword(password);
  if (!isPasswordValid) {
    throw new UnauthenticatedError('Invalid Credentials');
  }
  //generate token
  const token = await user.createJWT();
  const data = {
    user: user,
    token: token,
  };
  const response = new ApiResponse(StatusCodes.OK, 'User login', data);
  response.send(res);
};

const register = async (req, res) => {
  const user = await Users.create({ ...req.body });
  if (!user.email) {
    throw new BadRequestError('User email already exits');
  }

  // const token = user.createJWT();
  // const email= user@gmail.com
  // await sendWelcomeEmail(email); // Send Welcome Email
  const response = new ApiResponse(
    StatusCodes.OK,
    'User registered successfully'
    // token
  );
  response.send(res);
};

module.exports = {
  login,
  register,
};
