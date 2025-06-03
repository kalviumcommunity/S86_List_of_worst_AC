const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./db'); 
const acRoutes = require('./routes/acRoutes'); 
const authRoutes = require('./routes/auth'); 
const cors = require('cors');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ Connect to DB
connectDB();

// ✅ Always put CORS before routes
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true,
}));

// ✅ Parse JSON body
app.use(express.json());

// ✅ Route registration
app.use('/api/acs', acRoutes);       
app.use('/api/auth', authRoutes);  

app.get('/', (req, res) => {
  res.send('Welcome to the Worst ACs API!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
