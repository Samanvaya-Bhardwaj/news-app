// import React from 'react'
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Home from './Components/Home/Home'
// import Navbar from './Components/Navbar/Navbar'
// import News from './Components/News/News'
// import Newsletter from './Components/Newsletter/Newsletter'
// import Footer from './Components/Footer/Footer'
// import About from './Components/About/About';


// const App = () => {
//   return (
//     <BrowserRouter>
//       <div>
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/news" element={<News />} />
//           <Route path="/newsletter" element={<Newsletter />} />
//           <Route path="/about" element={<About/>} />
//         </Routes>
//         <Footer />
//       </div>
//     </BrowserRouter>
//   );
// }

// export default App;


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

{/* <ul>
<li>
<Link to='/' >Home</Link>
</li>
<li>
<Link to='/about' >About US</Link>
</li>
<li>
<Link to='/contact' >Contact</Link>
</li>
</ul> */}

<Navbar />
<Routes>
<Route exact path='/' element = {<Home/>} >Home</Route>
<Route exact path='/about' element={<About/>} ></Route>
<Route exact path='/contact' element={<Contact/>} ></Route>
</Routes>
<Footer />
</BrowserRouter>
<hr />
    </div>
  )
}