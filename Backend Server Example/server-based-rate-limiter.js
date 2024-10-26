const express = require('express');
const app = express();

const rateLimiters = {};
const RATE_LIMIT = 5; // max requests
const TIME_WINDOW = 1 * 60 * 1000; // Time window in milliseconds (1 minute)

// Server-based rate limiting middleware
function serverRateLimiter(req, res, next){
    const ip = req.ip;
    const currentTime = Date.now();

    if (!rateLimiters[ip]) {
        rateLimiters[ip] = { count: 1, startTime: currentTime};
    } else {
        const rateLimiter = rateLimiters[ip];
        const elapsedTime = currentTime - rateLimiter.startTime;

        if (elapsedTime > TIME_WINDOW) {
            rateLimiter.count = 1;
            rateLimiter.startTime = currentTime;
        } else {
            rateLimiter.count++;
            if (rateLimiter.count > RATE_LIMIT) {
                return res.status(429).json({
                    message: 'Too many requests - server rate limit reached.',
                });
            }
        }
    }
    next();
}

app.use('/api', serverRateLimiter);

app.get('/api/data', (req, res) => {
    res.json({ message: 'Data response with server-based rate limiting.' });
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});