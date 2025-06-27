import React, { useState } from 'react';
import { addAC } from '../api/ac';
import { useNavigate } from 'react-router-dom';

const AddAC = () => {
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [efficiency, setEfficiency] = useState('');
  const [noiseLevel, setNoiseLevel] = useState('');
  const [durability, setDurability] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addAC({
        brand,
        model,
        efficiency: Number(efficiency),
        noiseLevel: Number(noiseLevel),
        durability: Number(durability),
        complaints: [] // optional, your schema allows default
      });
      alert('AC added successfully!');
      navigate('/ac-list');
    } catch (error) {
      console.error('Error adding AC:', error);
      alert('Failed to add AC');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4">Add New AC</h2>
        <input placeholder="Brand" value={brand} onChange={(e) => setBrand(e.target.value)} className="w-full p-2 mb-3 border" />
        <input placeholder="Model" value={model} onChange={(e) => setModel(e.target.value)} className="w-full p-2 mb-3 border" />
        <input placeholder="Efficiency" value={efficiency} onChange={(e) => setEfficiency(e.target.value)} className="w-full p-2 mb-3 border" />
        <input placeholder="Noise Level" value={noiseLevel} onChange={(e) => setNoiseLevel(e.target.value)} className="w-full p-2 mb-3 border" />
        <input placeholder="Durability" value={durability} onChange={(e) => setDurability(e.target.value)} className="w-full p-2 mb-3 border" />
        <button type="submit" className="w-full bg-blue-600 text-white py-2">Add AC</button>
      </form>
    </div>
  );
};

export default AddAC;
