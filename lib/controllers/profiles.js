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
  const resp = await fetch('https://futuramaapi.herokuapp.com/api/quotes/1');
  const data = await resp.json();
  const profile = await Profile.insert({
    ...req.body,
    quote: data[0].quote,
  });

  res.send(profile);
});
