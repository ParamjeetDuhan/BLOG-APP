import React from 'react';
import { Route, Routes } from "react-router-dom";
import Login from './Pages/Login';
import Register from './Pages/Register';
import Home from './Pages/Home';
import Header from './component/Header';
import Category from './Pages/Category';
import AddBlog from './Pages/AddBlog';
import SingleBlog from './Pages/SingleBlog';
import PrivateRoute from './Services/Protected';

function App() {
  return (
    <>
      <Header />
      <Routes>
        {/* Public Routes */}
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />

        {/* Protected Routes */}
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/AddCategory" element={<Category />} />
          <Route path="/AddBlog" element={<AddBlog />} />
          <Route path="/blog/:id" element={<SingleBlog />} />
        </Route>

        {/* Fallback for unmatched routes */}
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
    </>
  );
}

export default App;


