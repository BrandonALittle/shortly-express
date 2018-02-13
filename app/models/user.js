var db = require('../config');
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');



var User = db.Model.extend({
  tablename: 'users'
  // state??
  // users: function() {
  //  return this.hasMany(user);  //designate relationship between model and collection in database
  // },

  // initialize
  // hash pw & salt to create hash
  // http://bookshelfjs.org/#Model-static-extend
});

module.exports = User;