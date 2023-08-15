import {  } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import Homepage from './pages/Homepage/Homepage';
import SeeAllCitiesPage from './pages/SeeAllCitiesPage/SeeAllCitiesPage';
import CityDetailsPage from './pages/CityDetailsPage/CityDetailsPage';
import HomeDetailsPage from './pages/HomeDetailsPage/HomeDetailsPage';
import KeepInTouch from './components/KeepInTouch/KeepInTouch'
import Footer from './components/Footer/Footer'
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
         <Route path='/' element={<Homepage />} />
         <Route path='/seeallcities' element={<SeeAllCitiesPage />} />
         <Route path='/citydetailspage/' element={<SeeAllCitiesPage />}/>
         <Route path='/citydetailspage/:cityId' element={<CityDetailsPage />} />
         <Route path="/property/:propertyId" element={<HomeDetailsPage />} />
        </Routes>
        <KeepInTouch />
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
