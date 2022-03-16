const { Router } = require('express');
const ProfileService = require('../services/ProfileService');
const pool = require('../utils/pool');

module.exports = Router().post('/', async (req, res, next) => {
  // TODO: Implement me!
  const profile = {
    id: '1',
    name: 'Test User',
    quote: 'Something',
  };
  res.json(profile);
});
