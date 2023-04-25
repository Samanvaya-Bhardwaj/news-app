import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Components/Home/Home'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import About from './Components/About/About';
import Contact from './Components/Contact/Contact'



export default function App() {
  return (
    <div>
      <BrowserRouter>

<Navbar />
<Routes>
<Route exact path='/' element = {<Home/>} >Home</Route>
<Route exact path='/about' element={<About/>} ></Route>
<Route exact path='/contact' element={<Contact/>} ></Route>
</Routes>
<Footer />
</BrowserRouter>
    </div>
  )
}