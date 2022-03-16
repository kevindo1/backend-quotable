const { Router } = require('express');
const Profile = require('../models/Profile');
const ProfileService = require('../services/ProfileService');
const pool = require('../utils/pool');
const fetch = require('cross-fetch');

module.exports = Router().post('/', async (req, res, next) => {
  // TODO: Implement me!
  // const profile = {
  //   id: '1',
  //   name: 'Test User',
  //   quote: 'Something',
  // };
  const profile = await ProfileService.create(req.body);
  res.send(profile);
});
