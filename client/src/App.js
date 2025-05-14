import React from 'react'
import {Route,Routes} from "react-router-dom"
import Login from './Pages/Login'
import Register from './Pages/Register'
import Home from './Pages/Home'
import Header from './component/Header'
import Category from './Pages/Category'
import AddBlog from './Pages/AddBlog'
import SingleBlog from './Pages/SingleBlog'


function App() {
  return (
      <>
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/AddCategory' element={<Category/>}/>
          <Route path='/AddBlog' element={<AddBlog/>}/>
           <Route path='/blog:/id' element={<SingleBlog/>}/>
           <Route path='/Register' element={<Register/>}/>
        </Routes>
      </>
  )
}

export default App

