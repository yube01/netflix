import React from 'react'
import "./navbar.scss"
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


const Navbar = () => {
  return (
    
    <div className="navbar">
      <div className="container">
        <div className="left">
          <div className="logo">
            <img src="https://logos-download.com/wp-content/uploads/2016/03/Netflix_Logo_2014-2048x550.png" alt="" />
          </div>
          <span> Homepage </span>
          <span> Movies </span>
          <span> Series </span>
          <span> New and Popular </span>
          <span> My list </span>
        </div>
        <div className="right">
          <span> <SearchIcon/> </span>
          <span> KID </span>
          <span> <NotificationsIcon/> </span>
          <span> <img src="https://images.pexels.com/photos/8639801/pexels-photo-8639801.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" /> </span>
          <div className="options">
          <span> <ArrowDropDownIcon/> </span>
          <div className="info">
          <span> Settings</span>
          <span> Logout </span>


          </div>
          

          </div>
         
        </div>
      </div>
    </div>

  )
}

export default Navbar