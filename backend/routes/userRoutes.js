const express = require('express');
const { User } = require('../models/User');
const { auth } = require('../middleware/auth');
const { findOneAndUpdate, getUserStatus, getUserLogin, getUserRegister } = require('../controller/userController');
const router = express.Router();

router.post("/users/register", getUserRegister)

router.post('/users/login', getUserLogin)

router.get('/users/auth', auth, getUserStatus)

//app.get('/api/users/logout', auth, (req, res)

router.get('/users/logout', auth, findOneAndUpdate)

module.exports = (router);