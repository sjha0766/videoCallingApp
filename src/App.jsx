import React from 'react';
import Client from './Pages/Home/Client'
import Rooms from './Pages/Room/Rooms';
import { Routes,Route } from 'react-router-dom';

function App() {
  return (
<div className='bg-gray-900 w-full h-screen '> 
  <Routes>
    <Route path="/" element={<Client />} />
    <Route path="/room/:roomId" element={<Rooms />} />
  </Routes>
</div>
  )
}

export default App