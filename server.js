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

// @TODO: connext to database

/**
 * ----------------- SESSIONS SETUP ------------------------
 */

// @TODO: Setup sessions

/**
 * ----------------- PASSPORT SETUP ------------------------
 */

// @TODO: Setup passport

/**
 * ----------------- ROUTES ------------------------
 */

// @TODO: Setup routes

/**
 * ----------------- SERVER ------------------------
 */

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
