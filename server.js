var express = require('express');
var passport = require('passport');
var Strategy = require('passport-google-oauth20').Strategy;
var User = require('./User');
var bodyParser = require('body-parser');

passport.use(new Strategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: 'http://localhost:3000/login/google/return',
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
app.use(require('express-session')({ secret: 'keyboard cat', saveUninitialized: true, resave: true}));

app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(__dirname));

app.get('/',
  function(req, res) {
    if(req.user) {
      User.addUser(req.user.displayName, req.user.emails[0].value, function(err) {
        User.getAll(req.user.emails[0].value, function(user, classesOut, classesInto, matchOne, matchTwo, matchThree, matchOneName, matchTwoName, matchThreeName) {
          res.render('home', { user: user, classOne: classesOut[0], classTwo: classesOut[1], classThree: classesOut[2], classIntoOne: classesInto[0], classIntoTwo: classesInto[1], classIntoThree: classesInto[2], matchOne: matchOne, matchTwo: matchTwo, matchThree: matchThree, matchOneName: matchOneName, matchTwoName: matchTwoName, matchThreeName: matchThreeName});
      });
   });}
    else res.render('home', { user: req.user });
  });

  app.get('/logout', function(req, res) {
    req.logOut();
    res.redirect('/');
});

app.get('/login/google',
passport.authenticate('google', { scope: ['profile', 'email']}));

app.get('/login/google/return', 
passport.authenticate('google', { failureRedirect: '/login/google'}),
function(req, res) {
  if(req.user.emails[0].value.substring(req.user.emails[0].value.length-9).toLowerCase() != 'upenn.edu') res.redirect('/login/google');
  else res.redirect('/');
});

app.use(bodyParser.urlencoded({
  extended:true
}));

app.use(bodyParser.json());

app.post("/", function(req, res){
  User.addTrade(req.user.emails[0].value, req.body.out, req.body.into, function(err) {
    User.getMatchesOne(req.user.emails[0].value, function(err) {
      User.getMatchesTwo(req.user.emails[0].value, function(err) {
        User.getMatchesThree(req.user.emails[0].value, function(err) {
          res.redirect('/');
        });
      });
    });
  });
});

app.post("/delete1", function(req, res){
  User.removeTrade1(req.user.emails[0].value, function(err) {
    User.getMatchesTwo(req.user.emails[0].value, function(err) {
      User.getMatchesThree(req.user.emails[0].value, function(err) {
        res.redirect('/');
        });
      });
    });
  });

app.post("/delete2", function(req, res){
  User.removeTrade2(req.user.emails[0].value, function(err) {
    User.getMatchesOne(req.user.emails[0].value, function(err) {
      User.getMatchesThree(req.user.emails[0].value, function(err) {
          res.redirect('/');
      });
    });
  });
});

app.post("/delete3", function(req, res){
  User.removeTrade3(req.user.emails[0].value, function(err) {
    User.getMatchesOne(req.user.emails[0].value, function(err) {
      User.getMatchesTwo(req.user.emails[0].value, function(err) {
        res.redirect('/');
      });
    });
  });
});

app.listen(process.env.PORT || 3000);
