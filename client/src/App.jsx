import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './page/Home'
import AdminHome from './page/admin/Home'
import AddProduct from './page/admin/Add-product'
import ManageProduct from './page/admin/manage-product'
import EditProduct from './page/admin/Edit-Product'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/admin' element={<AdminHome />}></Route>
          <Route path='/add-product' element={<AddProduct />}></Route>
          <Route path='/manage-product' element={<ManageProduct />}></Route>
          <Route path='/manage-product/edit/:id' element={<EditProduct />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
