import React, { useState } from 'react';

const Table = ({ data, columns }) => {
  const [sortedData, setSortedData] = useState(data);

  const handleSort = (column) => {
    const sortedData = sortedData.sort((a, b) => {
      if (a[column] < b[column]) {
        return -1;
      } else if (a[column] > b[column]) {
        return 1;
      } else {
        return 0;
      }
    });

    setSortedData(sortedData);
  };

  return (
    <table className="table">
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column} onClick={() => handleSort(column)}>
              {column}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {sortedData.map((row) => (
          <tr key={row.id}>
            {columns.map((column) => (
              <td key={column}>{row[column]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
