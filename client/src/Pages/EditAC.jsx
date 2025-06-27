import React, { useEffect, useState } from 'react';
import { getACById, updateAC } from '../api/ac';
import { useParams, useNavigate } from 'react-router-dom';

export default function EditAC() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    brand: '',
    model: '',
    efficiency: '',
    noiseLevel: '',
    durability: '',
  });

  useEffect(() => {
    const load = async () => {
      try {
        const res = await getACById(id);
        console.log('Loaded AC:', res.data);
        setForm(res.data);
      } catch (err) {
        console.error('Load failed:', err);
      }
    };
    load();
  }, [id]);

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Updating AC:', form);
    try {
      await updateAC(id, {
        brand: form.brand,
        model: form.model,
        efficiency: Number(form.efficiency),
        noiseLevel: Number(form.noiseLevel),
        durability: Number(form.durability),
      });
      alert('AC updated!');
      navigate('/ac-list');
    } catch (err) {
      console.error('Update failed:', err);
      alert('Failed to update AC');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-50">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Edit AC</h2>
        {['brand','model','efficiency','noiseLevel','durability'].map((field) => (
          <input
            key={field}
            name={field}
            value={form[field]}
            onChange={handleChange}
            placeholder={field}
            className="w-full p-2 mb-3 border rounded"
            required
          />
        ))}
        <button type="submit" className="w-full bg-green-600 text-white py-2 rounded">
          Save Changes
        </button>
      </form>
    </div>
  );
}
