// generateSampleData.js

const faker = require('faker');
const Data = require('./models/Data');

const generateSampleData = async (count) => {
  try {
    const sampleData = [];
    for (let i = 0; i < count; i++) {
      const entry = {
        timestamp: faker.date.recent(),
        sample: Math.floor(Math.random() * 2) 
      };
      sampleData.push(entry);
    }
    await Data.insertMany(sampleData);
    console.log(`${count} sample data generated and saved to database`);
  } catch (err) {
    console.error(err);
  }
};

generateSampleData(100); 
