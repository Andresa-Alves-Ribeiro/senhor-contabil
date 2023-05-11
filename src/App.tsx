import './App.css'
import Header from './components/header/Header'
import MyForm from './components/form/Form'
import Footer from './components/footer/Footer'
import Checkout from './components/checkout/Checkout'
import 'bootstrap/dist/css/bootstrap.min.css';


import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MyForm />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
