var mongoose = require('mongoose');
mongoose.connect('mongodb://bjaladi:penncourseswap1@ds121686.mlab.com:21686/penncourseswap');
var Schema = mongoose.Schema;
//var bcrypt = require('bcrypt');

var userSchema = new Schema({
  name: { type: String, required: true, unique: false},
  email: { type: String, required: true, unique: true },
  classOne: { type: String, required: false, unique: false },
  classTwo: { type: String, required: false, unique: false },
  classThree: { type: String, required: false, unique: false },
  classIntoOne: { type: String, required: false, unique: false },
  classIntoTwo: { type: String, required: false, unique: false },
  classIntoThree: { type: String, required: false, unique: false },
  matchOne: { type: String, required: false, unique: false },
  matchTwo: { type: String, required: false, unique: false },
  matchThree: { type: String, required: false, unique: false },
  matchOneName: { type: String, required: false, unique: false },
  matchTwoName: { type: String, required: false, unique: false },
  matchThreeName: { type: String, required: false, unique: false }
  
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

userSchema.statics.addUser = function(name, email, cb) {
  var newUser = new this({ name: name, email: email});
  this.findOne({ email: email }, function(err, user) {
    if(!user) {
      newUser.save(cb);
    }
    else cb();
  });
}

// userSchema.statics.addClassOne = function(email, classOne, cb) {
//   this.findOne({ email: email }, function(err, user) {
//     user.classOne = classOne;
//     user.save(cb);
//   });
// }

// userSchema.statics.getClassOne = function(email, cb) {
//   this.findOne({ email: email }, function(err, user) {
//     cb(user.classOne);
//   });
// }

// userSchema.statics.addClassTwo = function(email, classTwo, cb) {
//   this.findOne({ email: email }, function(err, user) {
//     user.classOne = classOne;
//     user.save(cb);
//   });
// }

// userSchema.statics.getClassTwo = function(email, cb) {
//   this.findOne({ email: email }, function(err, user) {
//     cb(user.classTwo);
//   });
// }

// userSchema.statics.addClassThree = function(email, classThree, cb) {
//   this.findOne({ email: email }, function(err, user) {
//     user.classOne = classOne;
//     user.save(cb);
//   });
// }

// userSchema.statics.getClassThree = function(email, cb) {
//   this.findOne({ email: email }, function(err, user) {
//     cb(user.classThree);
//   });
// }

userSchema.statics.addTrade = function(email, out, into, cb) {
  this.findOne({email: email}, function(err, user) {
    if(user) {
      if(user.classOne === out && user.classIntoOne === into) cb();
      else if(user.classTwo === out && user.classIntoTwo === into) cb();
      else if(user.classThree === out && user.classIntoThree === into) cb();
      else {
      if(user.classOne) {
        if(user.classTwo) {
          user.classThree = out;
          user.classIntoThree = into;
          user.save(cb);
        }
        else {
        user.classTwo = out;
        user.classIntoTwo = into;
        user.save(cb);
        }
      }
      else {
      user.classOne = out;
      user.classIntoOne = into;
      user.save(cb);
      }}}
  });
}

userSchema.statics.removeTrade1 = function(email, cb) {
  var that = this;
  this.findOne({email: email}, function(err, user) {
    if(user) {
      if(user.matchOne) {
        that.findOne({ email: user.matchOne}, function(err, user2) {
          if(user2.classOne === user.classIntoOne && user2.classIntoOne === user.classOne) {
            user2.matchOne = null;
            user2.matchOneName = null;
          }
          else if(user2.classTwo === user.classIntoOne && user2.classIntoTwo === user.classOne) {
            user2.matchTwo = null;
            user2.matchTwoName = null;
          }
          else {
            user2.matchThree = null;
            user2.matchThreeName = null;
          }
          user2.save(function(err) {
            user.classOne = user.classTwo;
            user.classIntoOne = user.classIntoTwo;
            user.matchOne = user.matchTwo;
            user.matchOneName = user.matchTwoName;
            user.classTwo = user.classThree;
            user.classIntoTwo = user.classIntoThree;
            user.matchTwo = user.matchThree;
            user.matchTwoName = user.matchThreeName;
            user.classThree = null;
            user.classIntoThree = null;
            user.matchThree = null;
            user.matchThreeName = null;
            user.save(cb);
         });
      })}
      else {
        user.classOne = user.classTwo;
        user.classIntoOne = user.classIntoTwo;
        user.matchOne = user.matchTwo;
        user.matchOneName = user.matchTwoName;
        user.classTwo = user.classThree;
        user.classIntoTwo = user.classIntoThree;
        user.matchTwo = user.matchThree;
        user.matchTwoName = user.matchThreeName;
        user.classThree = null;
        user.classIntoThree = null;
        user.matchThree = null;
        user.matchThreeName = null;
        user.save(cb);
      }
    };
  });}

  userSchema.statics.removeTrade2 = function(email, cb) {
    var that = this;
    this.findOne({email: email}, function(err, user) {
      if(user) {
        if(user.matchTwo) {
          that.findOne({ email: user.matchTwo}, function(err, user2) {
            if(user2.classOne === user.classIntoTwo && user2.classIntoOne === user.classTwo) {
              user2.matchOne = null;
              user2.matchOneName = null;
            }
            else if(user2.classTwo === user.classIntoTwo && user2.classIntoTwo === user.classTwo) {
              user2.matchTwo = null;
              user2.matchTwoName = null;
            }
            else {
              user2.matchThree = null;
              user2.matchThreeName = null;
            }
            user2.save(function(err) {
              user.classTwo = user.classThree;
              user.classIntoTwo = user.classIntoThree;
              user.matchTwo = user.matchThree;
              user.matchTwoName = user.matchThreeName;
              user.classThree = null;
              user.classIntoThree = null;
              user.matchThree = null;
              user.matchThreeName = null;
              user.save(cb);
           });
        })}
        else {
          user.classTwo = user.classThree;
          user.classIntoTwo = user.classIntoThree;
          user.matchTwo = user.matchThree;
          user.matchTwoName = user.matchThreeName;
          user.classThree = null;
          user.classIntoThree = null;
          user.matchThree = null;
          user.matchThreeName = null;
          user.save(cb);
        }
      };
    });}

    userSchema.statics.removeTrade3 = function(email, cb) {
      var that = this;
      this.findOne({email: email}, function(err, user) {
        if(user) {
          if(user.matchThree) {
            that.findOne({ email: user.matchThree}, function(err, user2) {
              if(user2.classOne === user.classIntoThree && user2.classIntoOne === user.classThree) {
                user2.matchOne = null;
                user2.matchOneName = null;
              }
              else if(user2.classTwo === user.classIntoThree && user2.classIntoTwo === user.classThree) {
                user2.matchTwo = null;
                user2.matchTwoName = null;
              }
              else {
                user2.matchThree = null;
                user2.matchThreeName = null;
              }
              user2.save(function(err) {
                user.classThree = null;
                user.classIntoThree = null;
                user.matchThree = null;
                user.matchThreeName = null;
                user.save(cb);
             });
          })}
          else {
            user.classThree = null;
            user.classIntoThree = null;
            user.matchThree = null;
            user.matchThreeName = null;
            user.save(cb);
          }
        };
      });}

      userSchema.statics.completeTrade1 = function(email, cb) {
        var that = this;
        this.findOne({email: email}, function(err, user) {
          if(user) {
            if(user.matchOne) {
              that.findOne({ email: user.matchOne}, function(err, user2) {
                if(user2.classOne === user.classIntoOne && user2.classIntoOne === user.classOne) {
                  user2.matchOne = null;
                  user2.matchOneName = null;
                  user2.classOne = null;
                  user2.classIntoOne = null;
                }
                else if(user2.classTwo === user.classIntoOne && user2.classIntoTwo === user.classOne) {
                  user2.matchTwo = null;
                  user2.matchTwoName = null;
                  user2.classTwo = null;
                  user2.classIntoTwo = null;
                }
                else {
                  user2.matchThree = null;
                  user2.matchThreeName = null;
                  user2.classThree = null;
                  user2.classIntoThree = null;
                }
                user2.save(function(err) {
                  user.classOne = user.classTwo;
                  user.classIntoOne = user.classIntoTwo;
                  user.matchOne = user.matchTwo;
                  user.matchOneName = user.matchTwoName;
                  user.classTwo = user.classThree;
                  user.classIntoTwo = user.classIntoThree;
                  user.matchTwo = user.matchThree;
                  user.matchTwoName = user.matchThreeName;
                  user.classThree = null;
                  user.classIntoThree = null;
                  user.matchThree = null;
                  user.matchThreeName = null;
                  user.save(cb);
               });
            })}
            else {
              user.classOne = user.classTwo;
              user.classIntoOne = user.classIntoTwo;
              user.matchOne = user.matchTwo;
              user.matchOneName = user.matchTwoName;
              user.classTwo = user.classThree;
              user.classIntoTwo = user.classIntoThree;
              user.matchTwo = user.matchThree;
              user.matchTwoName = user.matchThreeName;
              user.classThree = null;
              user.classIntoThree = null;
              user.matchThree = null;
              user.matchThreeName = null;
              user.save(cb);
            }
          };
        });}

        userSchema.statics.completeTrade2 = function(email, cb) {
          var that = this;
          this.findOne({email: email}, function(err, user) {
            if(user) {
              if(user.matchTwo) {
                that.findOne({ email: user.matchTwo}, function(err, user2) {
                  if(user2.classOne === user.classIntoTwo && user2.classIntoOne === user.classTwo) {
                    user2.matchOne = null;
                    user2.matchOneName = null;
                    user2.classOne = null;
                    user2.classIntoOne = null;
                  }
                  else if(user2.classTwo === user.classIntoTwo && user2.classIntoTwo === user.classTwo) {
                    user2.matchTwo = null;
                    user2.matchTwoName = null;
                    user2.classTwo = null;
                    user2.classIntoTwo = null;
                  }
                  else {
                    user2.matchThree = null;
                    user2.matchThreeName = null;
                    user2.classThree = null;
                    user2.classIntoThree = null;
                  }
                  user2.save(function(err) {
                    user.classTwo = user.classThree;
                    user.classIntoTwo = user.classIntoThree;
                    user.matchTwo = user.matchThree;
                    user.matchTwoName = user.matchThreeName;
                    user.classThree = null;
                    user.classIntoThree = null;
                    user.matchThree = null;
                    user.matchThreeName = null;
                    user.save(cb);
                 });
              })}
              else {
                user.classTwo = user.classThree;
                user.classIntoTwo = user.classIntoThree;
                user.matchTwo = user.matchThree;
                user.matchTwoName = user.matchThreeName;
                user.classThree = null;
                user.classIntoThree = null;
                user.matchThree = null;
                user.matchThreeName = null;
                user.save(cb);
              }
            };
          });}

          userSchema.statics.completeTrade3 = function(email, cb) {
            var that = this;
            this.findOne({email: email}, function(err, user) {
              if(user) {
                if(user.matchThree) {
                  that.findOne({ email: user.matchThree}, function(err, user2) {
                    if(user2.classOne === user.classIntoTwo && user2.classIntoOne === user.classTwo) {
                      user2.matchOne = null;
                      user2.matchOneName = null;
                      user2.classOne = null;
                      user2.classIntoOne = null;
                    }
                    else if(user2.classTwo === user.classIntoTwo && user2.classIntoTwo === user.classTwo) {
                      user2.matchTwo = null;
                      user2.matchTwoName = null;
                      user2.classTwo = null;
                      user2.classIntoTwo = null;
                    }
                    else {
                      user2.matchThree = null;
                      user2.matchThreeName = null;
                      user2.classThree = null;
                      user2.classIntoThree = null;
                    }
                    user2.save(function(err) {
                      user.classThree = null;
                      user.classIntoThree = null;
                      user.matchThree = null;
                      user.matchThreeName = null;
                      user.save(cb);
                   });
                })}
                else {
                  user.classThree = null;
                  user.classIntoThree = null;
                  user.matchThree = null;
                  user.matchThreeName = null;
                  user.save(cb);
                }
              };
            });}

userSchema.statics.getMatchesOne = function(email, cb) {
  var that = this;
  this.findOne({ email: email }, function(err, user) {
    if(user) {
      if(user.matchOne != null || user.classOne == null) {cb();}
      else {
      that.findOne({ classIntoOne: user.classOne, classOne: user.classIntoOne, matchOne: null }, function(err, user2) {
        if(user2 && user2.email != user.email) {
          user.matchOne = user2.email;
          user.matchOneName = user2.name;
          user2.matchOne = user.email;
          user2.matchOneName = user.name;
         user.save(function(err) {
            user2.save(cb);
         });
        }
        else {
          that.findOne({ classIntoTwo: user.classOne, classTwo: user.classIntoOne, matchTwo: null }, function(err, user2) {
          if(user2 && user2.email != user.email) {
            user.matchOne = user2.email;
            user.matchOneName = user2.name;
            user2.matchTwo = user.email;
            user2.matchTwoName = user.name;
           user.save(function(err) {
              user2.save(cb);
           });
          }
          else {
            that.findOne({ classIntoThree: user.classOne, classThree: user.classIntoOne, matchThree: null }, function(err, user2) {
            if(user2 && user2.email != user.email) {
              user.matchOne = user2.email;
              user.matchOneName = user2.name;
              user2.matchThree = user.email;
              user2.matchThreeName = user.name;
             user.save(function(err) {
                user2.save(cb);
             });
            }
            else cb();
        });
      }});
    }});
  }}});
}

userSchema.statics.getMatchesTwo = function(email, cb) {
  var that = this;
  this.findOne({ email: email }, function(err, user) {
    if(user) {
      if(user.matchTwo != null || user.classTwo == null) {
        cb();}
      else {
      that.findOne({ classIntoOne: user.classTwo, classOne: user.classIntoTwo, matchOne: null }, function(err, user2) {
        if(user2 && user2.email != user.email) {
          user.matchTwo = user2.email;
          user.matchTwoName = user2.name;
          user2.matchOne = user.email;
          user2.matchOneName = user.name;
          user.save(function(err) {
            user2.save(cb);
          });
        }
        else {
          that.findOne({ classIntoTwo: user.classTwo, classTwo: user.classIntoTwo, matchTwo: null }, function(err, user2) {
          if(user2 && user2.email != user.email) {
            user.matchTwo = user2.email;
            user.matchTwoName = user2.name;
            user2.matchTwo = user.email;
            user2.matchTwoName = user.mame;
            user.save(function(err) {
              user2.save(cb);
            });
          }
          else {
            that.findOne({ classIntoThree: user.classTwo, classThree: user.classIntoTwo, matchThree: null }, function(err, user2) {
            if(user2 && user2.email != user.email) {
              user.matchTwo = user2.email;
              user.matchTwoName = user2.name;
              user2.matchThree = user.email;
              user2.matchThreeName = user.name;
              user.save(function(err) {
                user2.save(cb);
              });
            }
            else cb();
        });
      }});
    }});}}});}

userSchema.statics.getMatchesThree = function(email, cb) {
  var that = this;
  this.findOne({ email: email }, function(err, user) {
    if(user) {
      if(user.matchThree != null || user.classThree == null) cb();
      else {
      that.findOne({ classIntoOne: user.classThree, classOne: user.classIntoThree, matchOne: null }, function(err, user2) {
        if(user2 && user2.email != user.email) {
          user.matchThree = user2.email;
          user.matchThreeName = user2.name;
          user2.matchOne = user.email;
          user2.matchOneName = user.name;
          user.save(function(err) {
            user2.save(cb);
          });
        }
        else {
          that.findOne({ classIntoTwo: user.classThree, classTwo: user.classIntoThree, matchTwo: null }, function(err, user2) {
          if(user2 && user2.email != user.email) {
            user.matchThree = user2.email;
            user.matchThreeName = user2.name;
            user2.matchTwo = user.email;
            user2.matchTwoName = user.name;
            user.save(function(err) {
              user2.save(cb);
            });
          }
          else {
            that.findOne({ classIntoThree: user.classThree, classThree: user.classIntoThree, matchThree: null }, function(err, user2) {
            if(user2 && user2.email != user.email) {
              user.matchThree = user2.email;
              user.matchThreeName = user2.name;
              user2.matchThree = user.email;
              user2.matchThreeName = user.name;
              user.save(function(err) {
                user2.save(cb);
              });
            }
            else cb();
        });
      }});
    }});}}});}

userSchema.statics.getAll = function(email, cb) {
  this.findOne({ email: email }, function(err, user) {
    if(user){
    classesOut = [user.classOne, user.classTwo, user.classThree];
    classesInto = [user.classIntoOne, user.classIntoTwo, user.classIntoThree];
      cb(user, classesOut, classesInto, user.matchOne, user.matchTwo, user.matchThree, user.matchOneName, user.matchTwoName, user.matchThreeName);}
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