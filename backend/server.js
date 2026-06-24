const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// Routes
const authRoutes = require('./routes/authRoutes');
const noticeRoutes = require('./routes/noticeRoutes');
const inquiryRoutes = require('./routes/inquiryRoutes');
const pageRoutes = require('./routes/pageRoutes');
const staffRoutes = require('./routes/staffRoutes');
const mediaRoutes = require('./routes/mediaRoutes');
const resultRoutes = require('./routes/resultRoutes');
const uploadRoutes = require('./routes/uploadRoutes');
const academicYearRoutes = require('./routes/academicYearRoutes');

// Load environment variables
dotenv.config();

// Connect to Database
connectDB();

const app = express();

// Middleware
app.use(helmet()); // Security headers
app.use(cors()); // Enable CORS
app.use(express.json()); // Body parser
app.use(morgan('dev')); // Logger

// Mount Routes
app.use('/api/auth', authRoutes);
app.use('/api/notices', noticeRoutes);
app.use('/api/inquiries', inquiryRoutes);
app.use('/api/pages', pageRoutes);
app.use('/api/staff', staffRoutes);
app.use('/api/media', mediaRoutes);
app.use('/api/results', resultRoutes);
app.use('/api/upload', uploadRoutes);
app.use('/api/academic-years', academicYearRoutes);

// Health Check Route
app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'Sunrise School API is healthy and running',
    timestamp: new Date().toISOString()
  });
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`
  🚀 Sunrise School Backend Engine Started
  ---------------------------------------
  Mode: ${process.env.NODE_ENV || 'development'}
  Port: ${PORT}
  Health Check: http://localhost:${PORT}/api/health
  ---------------------------------------
  `);
});
