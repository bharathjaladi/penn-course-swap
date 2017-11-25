var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/newDb');
var Schema = mongoose.Schema;
//var bcrypt = require('bcrypt');

var userSchema = new Schema({
  email: { type: String, required: true, unique: true },
  classOne: { type: String, required: false, unique: false },
  classTwo: { type: String, required: false, unique: false },
  classThree: { type: String, required: false, unique: false },
  classIntoOne: { type: String, required: false, unique: false },
  classIntoTwo: { type: String, required: false, unique: false },
  classIntoThree: { type: String, required: false, unique: false }
  
});

// userSchema.pre('save', function(next) {
//   var user = this;

//   if (!user.isModified('password')) return next();

//   bcrypt.genSalt(10, function(err, salt) {
//     if (err) return next(err);

//     bcrypt.hash(user.password, salt, function(err, hash) {
//       if (err) return next(err);

//       user.password = hash;
//       next();
//     });
//   });
// });

userSchema.statics.addUser = function(email, cb) {
  var newUser = new this({ email: email, classOne: null, classTwo: null, classThree: null});
  // this.findOne({ email: email }, function(err, user) {
  //   if(user) {
    // user.save(cb); }
    // else {
      newUser.save(cb);
//}
  //});
}

userSchema.statics.addClassOne = function(email, classOne, cb) {
  this.findOne({ email: email }, function(err, user) {
    user.classOne = classOne;
    user.save(cb);
  });
}

userSchema.statics.getClassOne = function(email, cb) {
  this.findOne({ email: email }, function(err, user) {
    cb(user.classOne);
  });
}

userSchema.statics.addClassTwo = function(email, classTwo, cb) {
  this.findOne({ email: email }, function(err, user) {
    user.classOne = classOne;
    user.save(cb);
  });
}

userSchema.statics.getClassTwo = function(email, cb) {
  this.findOne({ email: email }, function(err, user) {
    cb(user.classTwo);
  });
}

userSchema.statics.addClassThree = function(email, classThree, cb) {
  this.findOne({ email: email }, function(err, user) {
    user.classOne = classOne;
    user.save(cb);
  });
}

userSchema.statics.getClassThree = function(email, cb) {
  this.findOne({ email: email }, function(err, user) {
    cb(user.classThree);
  });
}

userSchema.statics.addTrade = function(email, out, into, cb) {
  console.log(email);
  this.findOne({email: email}, function(err, user) {
    if(user) {
    if(user.classOne) {
      if(user.classTwo) {
        user.classThree = out;
        user.classIntoThree = into;
        cb();
      }
      else {
      user.classTwo = out;
      user.classIntoThree = into;
      cb();}
    }
    else {
    user.classOne = out;
    user.classIntoOne = into;
    cb();}}
    else console.log('hi');

  });
}

userSchema.statics.getAll = function(email, cb) {
  this.findOne({ email: email }, function(err, user) {
    if(user){
    classesOut = [user.classOne, user.classTwo, user.classThree];
    classesInto = [user.classIntoOne, user.classIntoTwo, user.classIntoThree];
    cb(user, classesOut, classesInto);}
  });
}

// userSchema.statics.checkIfLegit = function(username, password, cb) {
//   this.findOne({ username: username }, function(err, user) {
//     if (!user) cb('no user');
//     else {
//       bcrypt.compare(password, user.password, function(err, isRight) {
//         if (err) return cb(err);
//         cb(null, isRight);
//       });
//     };
//   });
// }

module.exports = mongoose.model('User', userSchema);