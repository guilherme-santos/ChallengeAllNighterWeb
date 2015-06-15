var express  = require('express');
var facebook = require('fb');
var passport = require('passport-facebook');
var FacebookStrategy = require('passport-facebook').Strategy;
var router   = express.Router();

facebook.setAccessToken();

/* Log in into facebook */
router.get('/', passport.authenticate('facebook'));

module.exports = router;
