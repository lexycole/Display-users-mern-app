const config = {
  env: process.env.NODE_ENV || 'production',
  port: process.env.PORT || 5000,
  jwtSecret: process.env.JWT_SECRET || "Key_78925555",
  mongoUri: process.env.MONGODB_URI ||
    process.env.MONGO_HOST || 'mongodb+srv://contact:12345@cluster0.jwl4l.mongodb.net/?retryWrites=true&w=majority'
}

export default config;
