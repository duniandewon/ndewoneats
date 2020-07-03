require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');
const connectDB = require('./config/database');
const MongoStore = require('connect-mongo')(session);
const PORT = process.env.PORT || 5000;

/**
 * ----------------- GENERAL SETUP ------------------------
 */

// Create express application
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to database
connectDB();
const db = mongoose.connection;

/**
 * ----------------- SESSIONS SETUP ------------------------
 */

const sessionStore = new MongoStore({
  mongooseConnection: db,
  collection: 'sessions',
});

app.use(
  session({
    secret: 'some secret word',
    resave: false,
    saveUninitialized: true,
    store: sessionStore,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24,
    },
  })
);

/**
 * ----------------- PASSPORT SETUP ------------------------
 */

require('./config/passport');

app.use(passport.initialize());
app.use(passport.session());

/**
 * ----------------- ROUTES ------------------------
 */

app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));

// @TODO: Setup routes

/**
 * ----------------- SERVER ------------------------
 */

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
