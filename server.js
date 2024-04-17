


const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const RawData = require('./models/RawData');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());



mongoose.connect('mongodb://localhost:27017/SampleDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true 
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});



app.get('/api/data', async (req, res) => {
  try {
    const data = await RawData.find(); 
    res.json(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
  
