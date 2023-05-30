import React from 'react'
import Navbar from '../components/Navbar'
import Welcome from '../components/Welcome'
import Offer from '../components/Offer'
import Teacher from '../components/Teacher'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Welcome/>
        <Offer/>
        <Teacher/>
        <Footer/>
    </div>
  )
}

export default Home