import React, { useEffect, useState } from 'react';
import { getACs, deleteAC } from '../api/ac';
import { useNavigate } from 'react-router-dom';

export default function ACList() {
  const [acs, setAcs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAcs = async () => {
      try {
        const res = await getACs();
        console.log('Fetched ACs:', res.data);
        setAcs(res.data);
      } catch (err) {
        console.error('Error fetching ACs:', err);
      }
    };
    fetchAcs();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this AC?')) return;
    console.log('Deleting AC id:', id);
    try {
      await deleteAC(id);
      setAcs((prev) => prev.filter((ac) => ac._id !== id));
    } catch (err) {
      console.error('Delete failed:', err);
      alert('Failed to delete AC');
    }
  };

  return (
    <div className="p-6">
      <h1 className="ml-[10px] text-2xl font-bold mb-4">List of Worst ACs</h1>
      {acs.length === 0 && <p>No ACs found.</p>}
      <ul className="space-y-2">
        {acs.map((ac) => (
          <li key={ac._id} className="p-4 bg-white rounded shadow flex justify-between">
            <div>
              <p><strong>{ac.brand}</strong> — {ac.model}</p>
              <p>Eff: {ac.efficiency}, Noise: {ac.noiseLevel}, Dur: {ac.durability}</p>
            </div>
            <div className="space-x-2">
              <button
                onClick={() => navigate(`/edit-ac/${ac._id}`)}
                className="text-blue-600 hover:underline"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(ac._id)}
                className="text-red-600 hover:underline"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
      <button
          onClick={() => navigate('/add-ac')}
          className="ml-[10px] bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Add AC
        </button>
    </div>
  );
}
