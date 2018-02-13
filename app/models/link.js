var db = require('../config');
var Click = require('./click');
var crypto = require('crypto');

var Link = db.Model.extend({
  tableName: 'urls',
  hasTimestamps: true,
  defaults: {
    visits: 0
  },
  clicks: function() {
    return this.hasMany(Click);
  },
  initialize: function() {
    this.on('creating', function(model, attrs, options) {
      var shasum = crypto.createHash('sha1'); // just creating a unique hash for each site so you don't create duplicate entries
      // actually line 16 is creating an object that will create the hash.
      shasum.update(model.get('url')); // using the hash obj from creatHash plus the url to creata a hash????
      model.set('code', shasum.digest('hex').slice(0, 5)); //
    });
  }
});

module.exports = Link;
