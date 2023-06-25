const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

function generateAccessToken(username) {
    return jwt.sign(username, process.env.TOKEN_SECRET, { expiresIn: '180000s' });
}

module.exports = {
    auth: async function(req, res) {
        const token = generateAccessToken({ username: req.body.email});
        res.json(token);
    },
}
