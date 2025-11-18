import React from 'react';
import "./Header.css";
import NetflixLogo from "../../assets/images/netflix-image.png";
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function Header() {
  return (
    <>
      <div className='header-auto-container'>
        <div className='header-container'>
            <div className='header-list'>
                <ul>
                    <li><img src={NetflixLogo} alt='Netflix Logo' width="100"/></li>
                    <li>Home</li>
                    <li>TVShows</li>
                    <li>Movies</li>
                    <li>Letest</li>
                    <li>Mylist</li>
                    <li>Browse by language</li>
                </ul>
            </div>
            <div className='header-right'>
                <ul>
                  <li><SearchIcon/></li>
                  <li><NotificationsNoneIcon/></li>
                  <li><AccountBoxIcon/></li>
                  <li><ArrowDropDownIcon/></li>
                </ul>
            </div>
        </div>
      </div>
    </>
  )
}

export default Header;
