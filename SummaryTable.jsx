import React from 'react';

const SummaryTable = ({ summary }) => {
  return (
    <div>
      <h2>Summary Table</h2>
      <table>
        <thead>
          <tr>
            <th>Category</th>
            <th>Count</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Number of 0s</td>
            <td>{summary.numZeros}</td>
          </tr>
          <tr>
            <td>Number of 1s</td>
            <td>{summary.numOnes}</td>
          </tr>
          <tr>
            <td>Continuous 0s</td>
            <td>{summary.continuousZeros}</td>
          </tr>
          <tr>
            <td>Continuous 1s</td>
            <td>{summary.continuousOnes}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SummaryTable;
