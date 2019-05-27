import React from 'react';

export default () => (
  <div className="container">
    <h2>Table</h2>
    <p />
    <table className="primary">
      <thead>
        <tr>
          <th>Name</th>
          <th>City</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Francisco</td>
          <td>Valencia, Spain</td>
          <td>23</td>
        </tr>
        <tr>
          <td>Eve</td>
          <td>San Francisco, USA</td>
          <td>22</td>
        </tr>
        <tr>
          <td>Martin</td>
          <td>New York, USA</td>
          <td>45</td>
        </tr>
        <tr>
          <td>Sarah</td>
          <td>London, UK</td>
          <td>25</td>
        </tr>
      </tbody>
    </table>
  </div>
);
