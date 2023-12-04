import { Header } from '../header/Header.jsx'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {Home} from '../home/Home.jsx'
import {Music} from '../music/Music.jsx'
import {Gallery} from '../gallery/Gallery.jsx'
import {Contact} from '../contact/Contact.jsx'
import {Store} from '../store/Store.jsx'
import {Footer} from '../footer/Footer.jsx'
import './App.css'

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}> </Route>
          <Route path="/store" element={<Store />}> </Route>
          <Route path="/music" element={<Music />}> </Route>
          <Route path="/contact" element={<Contact />}> </Route>
          <Route path="/gallery" element={<Gallery />}> </Route>
        </Routes>
      </Router>
      <Footer />
    </>
  )
}

/*
  
*/

export default App
