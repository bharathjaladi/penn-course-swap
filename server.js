var express = require('express');
var passport = require('passport');
var Strategy = require('passport-google-oauth20').Strategy;
var User = require('./User');

passport.use(new Strategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: 'http://localhost:3000/login/google/return'
  },
  function(accessToken, refreshToken, profile, cb) {
    return cb(null, profile);
  }));

passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});

var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.use(require('morgan')('combined'));
app.use(require('cookie-parser')());
app.use(require('body-parser').urlencoded({ extended: true }));
app.use(require('express-session')({ secret: 'keyboard cat', saveUninitialized: true, resave: true, cookie: { maxAge: 1000 }}));

app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(__dirname));

app.get('/',
  function(req, res) {
    //if(req.user) {
    // User.addUser(req.user.emails[0].value, function(err) {
    //   if (err) {res.send('error' + err);
    //     res.render('home', { user: req.user });
    //   }
    //   else {res.send('new user registered with username ' + req.user.emails[0].value);
   //   res.render('home', { user: req.user });}
   // });}
    res.render('home', { user: req.user });
  });

  app.get('/logout', function(req, res) {
    req.logOut();
    res.redirect('/');
});

app.get('/login/google',
passport.authenticate('google', { scope: ['profile', 'email'], hd: 'upenn.edu' }));

app.get('/login/google/return', 
passport.authenticate('google', { failureRedirect: '/login/google'}),
function(req, res) {
  res.redirect('/');
});

app.listen(process.env.PORT || 3000);
