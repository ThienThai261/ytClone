import React from 'react';
import menuIcon from '../../assets/menu.png';
import logo from '../../assets/logo.png';
import SearchIcon from '../../assets/search.png';
import upload_icon from '../../assets/upload.png';
import moreIcon from '../../assets/more.png';
import notificationIcon from '../../assets/notification.png';
import profileIcon from '../../assets/user_profile.jpg';
import './Navbar.css';

type NavbarProps = {
  setSidebar: React.Dispatch<React.SetStateAction<boolean>>;
};

const Navbar = ({ setSidebar }: NavbarProps) => {
  return (
    <nav className='flex-div'>
      <div className='nav-left flex-div'>
        <img
          className='menuIcon'
          onClick={() => setSidebar(prev => !prev)}
          src={menuIcon}
          alt=''
        />
        <img className='logo' src={logo} alt='' />
      </div>
      <div className='nav-middle flex-div'>
        <div className='searchBox flex-div'>
          <input type='text' placeholder='Search' />
          <img src={SearchIcon} alt='' />
        </div>
      </div>
      <div className='nav-right flex-div'>
        <img src={upload_icon} alt='' />
        <img src={moreIcon} alt='' />
        <img src={notificationIcon} alt='' />
        <img className='userIcon' src={profileIcon} alt='' />
      </div>
    </nav>
  );
};

export default Navbar;
