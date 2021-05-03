const passportLocal = require("passport-local");
const passport = require("passport");
const loginService = require("../services/loginService");

let LocalStrategy = passportLocal.Strategy;

let initPassportLocal = () => {
    passport.use(new LocalStrategy({
            usernameField: 'username',
            passwordField: 'password',
            passReqToCallback: true
        },
        async (req, username, password, done) => {
            try {
                // Attempt to verify that the given username exists
                await loginService.findUserByUsername(username).then(async (user) => {
                    if (!user) {
                        return done(null, false, req.flash("errors", `This user username "${username}" doesn't exist`));
                    }
                    if (user) {
                        // Compare the given password to the password for the target username
                        let match = await loginService.comparePassword(password, user);
                        if (match === true) {
                            // Passwords match! The user has been authenticated.
                            return done(null, user, null)
                        } else {
                            // Something went wrong with the user's information
                            return done(null, false, req.flash("errors", match)
                            )
                        }
                    }
                });
            } catch (err) {
                // An error occurred somewhere
                // Log the output for debugging
                console.log(err);
                return done(null, false, { message: err });
            }
        }));

};

passport.serializeUser((user, done) => {
    console.log('serializing user,');
    done(null, user.userID);
});

passport.deserializeUser((id, done) => {
    console.log('deserializing user');

    loginService.findUserById(id).then((user) => {
        return done(null, user);
    }).catch(error => {
        return done(error, null)
    });
});

module.exports = initPassportLocal;