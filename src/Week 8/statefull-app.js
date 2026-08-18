const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const app = express();
const port = 3000;

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Middleware to read form data
app.use(express.urlencoded({ extended: true }));

// Cookie middleware
app.use(cookieParser());

// Session middleware
app.use(session({
    secret: 'my-secret-key',
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 60000 // Session expires in 1 minute
    }
}));

// Authentication middleware
const authMiddleware = (req, res, next) => {
    if (req.session.isLoggedIn) {
        next();
    } else {
        res.redirect('/login');
    }
};

// Public Route: Login Page
app.get('/login', (req, res) => {
    res.render('login', {
        error: null
    });
});

// Login
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Hardcoded login
    if (username === 'admin' && password === '123') {

        // Store login information in session
        req.session.isLoggedIn = true;
        req.session.username = username;

        // Create a custom cookie
        res.cookie('lastVisit', new Date().toLocaleTimeString());

        // Go to dashboard
        res.redirect('/dashboard');

    } else {

        // Invalid login
        res.render('login', {
            error: 'Invalid credentials!'
        });
    }
});

// Private Route: Dashboard
app.get('/dashboard', authMiddleware, (req, res) => {

    // Read cookie
    const lastVisit = req.cookies.lastVisit || 'First time!';

    // Read session data
    res.render('dashboard', {
        user: req.session.username,
        lastVisit: lastVisit
    });
});

// Logout
app.get('/logout', (req, res) => {

    req.session.destroy(() => {

        // Clear session cookie
        res.clearCookie('connect.sid');

        // Go back to login
        res.redirect('/login');
    });
});

// Start Server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});