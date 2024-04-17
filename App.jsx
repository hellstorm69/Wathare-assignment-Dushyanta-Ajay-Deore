import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Chart from './components/Chart';
import SummaryTable from './components/SummaryTable';
import FilterOptions from './components/FilterOptions';

const App = () => {
  const [data, setData] = useState([]);
  const [summary, setSummary] = useState({});

  useEffect(() => {
    fetchData();
    fetchSummary();
  }, []);

  const fetchData = async () => {
    // Implement logic to fetch data from backend
    try {
      const response = await axios.get('/api/data');
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  
  };

  const fetchSummary = async () => {
    // Implement logic to fetch summary data from backend
    try {
      const response = await axios.get('/api/data/summary');
      setSummary(response.data);
    } catch (error) {
      console.error(error);
    }

  };

  return (
    <div>
      <h1>Sample Data Visualization</h1>
      <Chart data={data} />
      <SummaryTable summary={summary} />
      <FilterOptions />
    </div>
  );
};

export default App

const express = require('express')
const app = express()

app.get("/messages", (req, res) => {
  res.send("Hello");
});

app.listen(8000, () => {
  console.log("listening on http://localhost:8000");
})