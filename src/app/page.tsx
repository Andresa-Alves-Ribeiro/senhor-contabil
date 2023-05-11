'use client';

import Image from 'next/image'
import Header from './components/header/Header'
import MyForm from './components/form/Form'
import Footer from './components/footer/Footer'
import Checkout from './components/checkout/Checkout'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export default function Home() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<MyForm />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
