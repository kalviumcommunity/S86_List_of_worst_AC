// src/pages/AddAC.jsx
import React, { useState } from 'react';
import { addAC } from '../api/ac'; // make sure the path is correct
import { useNavigate } from 'react-router-dom';

const AddAC = () => {
  const [brand, setBrand] = useState('');
  const [model,setModel]=useState('');
  const [efficiency, setEfficiency] = useState('');
  const [noiseLevel, setNoiseLevel] = useState('');
  const [durability, setDurability] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await addAC({
        brand,
        model,
        efficiency: Number(efficiency),
        noiseLevel: Number(noiseLevel),
        durability: Number(durability),
      });
      console.log('AC added:', response.data);
      alert('AC added successfully!');
      navigate('/ac-list'); // or your ACList route
    } catch (error) {
      console.error('Error adding AC:', error.response?.data || error.message);
      alert(`Failed to add AC: ${error.response?.data?.message || error.message}`);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-200">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md">
        <h2 className="text-2xl mb-4 text-center font-bold text-blue-700">Add New AC</h2>

        <input className="w-full p-2 mb-3 border rounded" placeholder="Brand" value={brand} onChange={(e) => setBrand(e.target.value)} />
        <input className="w-full p-2 mb-3 border rounded" placeholder="model" value={model} onChange={(e) => setModel(e.target.value)} />
        <input className="w-full p-2 mb-3 border rounded" placeholder="efficiency" value={efficiency} onChange={(e) => setEfficiency(e.target.value)} />
        <input className="w-full p-2 mb-3 border rounded" placeholder="Noise Level" value={noiseLevel} onChange={(e) => setNoiseLevel(e.target.value)} />
        <input className="w-full p-2 mb-3 border rounded" placeholder="Durability" value={durability} onChange={(e) => setDurability(e.target.value)} />

        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full" type="submit">
          Add AC
        </button>
      </form>
    </div>
  );
};

export default AddAC;
