import React from 'react';
import { useState } from 'react';
import "./Header.css";
import NetflixLogo from "../../assets/images/netflix-image.png";
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function Header() {
 const [mobileMenuOpen, setMobileMenuOpen] = useState(false);  
  return (
    <>
      <div className='header-auto-container'>
        <div className='header-container'>
            <div className='header-list'>
                <ul className={mobileMenuOpen ? "active" : ""}>
                    <li><img src={NetflixLogo} alt='Netflix Logo' width="100"/></li>
                    <li className='fter-list'>Home</li>
                    <li className='fter-list'>TVShows</li>
                    <li className='fter-list'>Movies</li>
                    <li className='fter-list'>Letest</li>
                    <li className='fter-list'>Mylist</li>
                    <li className='fter-list'>Browse by language</li>
                </ul>
            </div>
            <div className='header-right'>
                <ul>
                  <li><SearchIcon/></li>
                  <li><NotificationsNoneIcon/></li>
                  <li><AccountBoxIcon/></li>
                  <li onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                    <ArrowDropDownIcon />
                  </li>
                </ul>
            </div>
        </div>
      </div>
    </>
  )
}

export default Header;
