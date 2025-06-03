import React, { useEffect, useState } from 'react';
import axios from '../api/axios';
import { useNavigate, useParams } from 'react-router-dom';

const EditAC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    brand: '',
    capacity: '',
    noiseLevel: '',
    efficiency: '',
    durability: ''
  });

  useEffect(() => {
    const fetchAC = async () => {
      try {
        const res = await axios.get(`/acs/${id}`);
        setFormData(res.data);
      } catch (err) {
        console.error(err);
        alert('Failed to fetch AC');
      }
    };

    fetchAC();
  }, [id]);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/acs/${id}`, formData);
      alert('AC updated!');
      navigate('/ac-list');
    } catch (err) {
      console.error(err);
      alert('Error updating AC');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-[300px]">
        {Object.keys(formData).map((key) => (
          <input
            key={key}
            type="text"
            name={key}
            placeholder={key}
            value={formData[key]}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded"
            required
          />
        ))}
        <button type="submit" className="bg-green-500 text-white py-2 rounded">Update AC</button>
      </form>
    </div>
  );
};

export default EditAC;
