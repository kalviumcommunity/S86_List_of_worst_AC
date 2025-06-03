import React, { useEffect, useState } from 'react';
import { getACs, addAC, deleteAC } from '../api/ac';
import { Link } from 'react-router-dom';

const ACList = () => {
  const [acs, setAcs] = useState([]);

  useEffect(() => {
    const fetchAcs = async () => {
      try {
        const res = await axios.get('/acs');
        setAcs(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchAcs();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">List of Worst ACs</h1>
      <ul className="space-y-2">
        {acs.map((ac) => (
          <li key={ac._id} className="p-4 border rounded flex justify-between items-center">
            <div>
              <p><strong>Brand:</strong> {ac.brand}</p>
              <p><strong>Capacity:</strong> {ac.capacity}</p>
              <p><strong>Noise Level:</strong> {ac.noiseLevel}</p>
              <p><strong>Efficiency:</strong> {ac.efficiency}</p>
              <p><strong>Durability:</strong> {ac.durability}</p>
            </div>
            <Link to={`/edit-ac/${ac._id}`} className="bg-yellow-500 text-white px-3 py-1 rounded">Edit</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ACList;
