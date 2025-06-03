import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import AddAC from './Pages/AddAC';
import ACList from './Pages/ACList';
import EditAC from './Pages/EditAC';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/add-ac" element={<AddAC />} />
      <Route path="/ac-list" element={<ACList />} />
      <Route path="/edit-ac/:id" element={<EditAC />} />
    </Routes>
  );
};

export default AppRoutes;
