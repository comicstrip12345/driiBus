import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Admin from './components/Admin/Admin'
import AdminBusSchedule from './components/Admin/AdminBusSchedule'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Passenger from './components/Passenger/Passenger'
import AdminPublicSchedule from './components/Admin/AdminPublicSchedule'
import './index.css'
import PublicSchedule from './components/PublicSchedule'
import PassPubBusSched from './components/Passenger/PassPubBusSched'
import PassMngBkng from './components/Passenger/PassMngBkng'
import Payment from './components/Passenger/Payment'
import PaymentSuccess from './components/Passenger/PaymentSuccess'
import ContactButton from './components/Contact Us/ContactButton'
import Error404 from './components/Error404'

const App = () => {
    return (
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Hero/>}/>
          <Route path='/publicschedule' element={<PublicSchedule/>}/>
          <Route path='/admin' element={<Admin/>}/>
          <Route path='/admin/schedule' element={<AdminBusSchedule/>}/>
          <Route path='/admin/public' element={<AdminPublicSchedule/>}/>
          <Route path='/passenger' element={<Passenger/>}/>
          <Route path='/passenger/bookings' element={<PassMngBkng/>}/>
          <Route path='/passenger/public' element={<PassPubBusSched/>}/>
          <Route path='/passenger/payment' element={<Payment/>}/>
          <Route path='/passenger/payment/success' element={<PaymentSuccess/>}/>
          <Route path='*' element={<Error404/>}/>
        </Routes>
      </BrowserRouter>
    )
}

export default App