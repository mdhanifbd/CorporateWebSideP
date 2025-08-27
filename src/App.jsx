import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import './App.css'
import Home from './pages/Home'
import RootLayout from './components/RootLayout'
import Product from './pages/Product'
import ProductDetails from './pages/ProductDetails'
import About from './pages/About'
import Contacts from './pages/Contacts'
import Journal from './pages/Journal'




function App() {
 let router = createBrowserRouter(createRoutesFromElements(
  <Route element={<RootLayout/>}>
    <Route index element ={<Home/>}></Route>
     <Route path ="/product" element ={<Product/>}></Route>
     <Route path ="/product/:id" element ={<ProductDetails/>}></Route>
     <Route path ="/about" element ={<About/>}></Route>
     <Route path ="/contacts" element ={<Contacts/>}></Route>
     <Route path ="/journal" element ={<Journal/>}></Route>
     
  </Route> 
 ))

  return (
    <>
    <RouterProvider router={router}/>
    
    </>
  )
}

export default App
