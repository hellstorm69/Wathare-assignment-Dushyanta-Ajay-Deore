import React, { useState } from 'react';
import axios from 'axios';

const FilterOptions = () => {
  const [startTime, setStartTime] = useState('');
  const [frequency, setFrequency] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`/api/data/filter?startTime=${startTime}&frequency=${frequency}`);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Filter Options</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Start Time:
          <input type="datetime-local" value={startTime} onChange={(e) => setStartTime(e.target.value)} />
        </label>
        <label>
          Frequency:
          <select value={frequency} onChange={(e) => setFrequency(e.target.value)}>
            <option value="hour">Hour</option>
            <option value="day">Day</option>
            <option value="week">Week</option>
            <option value="month">Month</option>
          </select>
        </label>
        <button type="submit">Filter Data</button>
      </form>
    </div>
  );
};

export default FilterOptions;
