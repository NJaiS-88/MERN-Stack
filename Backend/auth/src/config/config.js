import dotenv from 'dotenv';
dotenv.config();

if(!process.env.MONGODB_URI) {
    throw new Error('MONGODB_URI is not defined in the environment variables');
}

if(!process.env.JSON_WEB_TOKEN_SECRET) {
    throw new Error('JSON_WEB_TOKEN_SECRET is not defined in the environment variables');
}


const config = {
    MONGODB_URI: process.env.MONGODB_URI,
    JSON_WEB_TOKEN_SECRET: process.env.JSON_WEB_TOKEN_SECRET
};

export default config;