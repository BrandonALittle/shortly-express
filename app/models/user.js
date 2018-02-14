var db = require('../config');
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');



var User = db.Model.extend({
  tableName: 'users',
  // the following code comes from https://www.npmjs.com/package/bookshelf
  clicks: function() {
    return this.hasMany(clicks);
  },

  initialize: function() {

  }



  // state??
  // users: function() {
  //  return this.hasMany(user);  //designate relationship between model and collection in database
  // },
  // initialize
  // hash pw & salt to create hash
  // http://bookshelfjs.org/#Model-static-extend
});

module.exports = User;