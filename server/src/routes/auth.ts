import express from 'express';
import User from '@model/User';
import { userData, tokenPayLoad } from '@model/Auth';
const jwt = require('jsonwebtoken');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const router: express.Router = express.Router();
const secretKey = 'secret-key';

// Initialize Passport and restore authentication state, if any, from the session.
router.use(passport.initialize());
router.use(passport.session());

var payLoad: tokenPayLoad;

/**
 * Set up 'local' authentication using Passport.js
 * Reference MongoDB database and check if the user exists and then if the credentials are correct
 */
passport.use(new LocalStrategy(
    function(username: string, password: string, done: any) {
        User.findOne({ 'username': username }, function(err: Error, user: userData) {
            if (err) { return done(err); }
            if (!user) {
                return done(null, false, { message: 'Incorrect username.' });
            }
            if (user.password != password) {
                return done(null, false, { message: 'Incorrect password.'});
            }
            payLoad = {
              username: username,
              nameFirst: user.nameFirst,
              nameLast: user.nameLast,
              permission: user.permission
            }
            return done(null, user);
        });
    }
));

// Passport will serialize and deserialize user instances to and from the session
passport.serializeUser(function(user: any, done: (arg0: null, arg1: any) => void) {
    done(null, user);
});

passport.deserializeUser(function(user: any, done: (arg0: null, arg1: any) => void) {
    done(null, user);
});

// Authenticate a user and generate a JWT
router.post('/', passport.authenticate('local'), (req: express.Request, res: express.Response) => {
    const token = jwt.sign(payLoad, secretKey, { expiresIn: '7d'});
    res.json({
        token: token,
        ...payLoad
    });
});

function verifyToken(req: express.Request, res: express.Response) {
    jwt.verify(req.headers['authorization'], secretKey, (err: any, auth: any) => {
        if (err) {
            res.send(false);
        }
        else {
            res.send(true);
        }
    });
}

// Authorize user by checking their JWT
router.get('/', (req, res) => {
    verifyToken(req, res);
});



export default router;