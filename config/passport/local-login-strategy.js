var LocalStrategy = require('passport-local').Strategy;
var User = require('../../models/user');

var strategy = new LocalStrategy({
    usernameField: 'email', // default is 'username'
    passwordField: 'password',
    passReqToCallback: true
}, function(req, email, password, callback) {
    // Search for a user with this email
    console.log('</test>');
    console.log(email);
    console.log(password);
    User.findOne({ 'local.email': email }, function(err, user) {
        console.log(err);
        if (err) return callback(err);
        console.log(user);
        // If no user is found
        if (!user) {
            return callback(null, false, req.flash('error', 'User not found.'));
        }

        // Validate password
        if (!user.isValidPassword(password)) {
            return callback(null, false, req.flash('error', 'Check password'));
        }
        console.log('success');
        return callback(null, user);
    });
});

module.exports = strategy;
