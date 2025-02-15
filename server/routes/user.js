const express = require('express');
const {
  getProfile,
  resetPassword,
  updateProfile,
} = require('../controllers/user');

const router = express.Router();

router.get('/profile', getProfile);
router.post('/reset-password', resetPassword);
router.post('/update-profile', updateProfile);

module.exports = router;
