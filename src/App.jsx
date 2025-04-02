import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ApiProvider } from './Context/ApiContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { CartProvider } from './Context/CartContext'
import Main from './pages/Main'
import Products from './pages/Products'

function App() {

  return (
    <CartProvider>
      <ApiProvider>
        <Router>
        <Navbar/>
          <Routes>
            <Route path='/FakeShop/' element={<Main/>} />
            <Route path='/product/:id' element={<Products/>} />
          </Routes>
        </Router>
        <Footer/>
      </ApiProvider>
    </CartProvider>
  )
}

export default App
