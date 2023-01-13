import React from 'react'
import "./home.scss"
import Navbar from '../Components/navbar/Navbar'
const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <img 
      width="100%"
      src="https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
    </div>
  )
}

export default Home
