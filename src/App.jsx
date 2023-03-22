import React from 'react'
import './App.css'
import {BrowserRouter, Route, Routes, } from 'react-router-dom'
import Login from './Login'
import Update from './UpdateProduct'
import Register from './Register'
import AddProduct from './AddProduct'
import Protected from './Protected'
import ProductList from './ProductList'
import SearchProduct from './SearchProduct'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <Routes>
            {/* <Route index path="/login" element={<h1>hello</h1>} /> */}
            <Route path="/" element={<Protected Cmp={ProductList}/>} />
            <Route index path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/search" element={<Protected Cmp={SearchProduct}/>} />
            <Route index path="/update/:id" element={<Protected Cmp={Update}/>} />
            <Route path="/add" element={<Protected Cmp={AddProduct}/>} />
          </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App

// har ek page ke upar jakar me localstorage lgau usse acha hai me protected ka alag se page bna lu
// ye protected page login session check karega or unhe baad me redirect kar dega
