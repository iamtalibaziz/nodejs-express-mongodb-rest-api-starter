require('dotenv').config();

const config = {
    port: process.env.PORT || 5000,
    mongodb_uri: process.env.MONGO_URI,
    jwt_secret: process.env.JWT_SECRET
};

module.exports = config;
