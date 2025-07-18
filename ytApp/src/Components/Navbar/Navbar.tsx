import React from 'react';
import menuIcon from '../../assets/menu.png';
import logo from '../../assets/logo.png';
import SearchIcon from '../../assets/search.png';
import upload_icon from '../../assets/upload.png';
import moreIcon from '../../assets/more.png';
import notificationIcon from '../../assets/notification.png';
import profileIcon from '../../assets/user_profile.jpg';
import { jwtDecode } from 'jwt-decode'; // ✅ Đúng
import UserMenu from '../MenuDropDown/MenuDrop'; // import mới

import './Navbar.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import GoogleLoginButton from '../GoogleLogin/GoogleLoginButton';

type NavbarProps = {
  setSidebar: React.Dispatch<React.SetStateAction<boolean>>;
};

const Navbar = ({ setSidebar }: NavbarProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleLogout = () => {
    localStorage.removeItem('google_jwt');
    window.location.reload(); // hoặc redirect về homepage
  };

  const handleViewHistory = () => {
    navigate('/history'); // route này bạn sẽ tạo sau
  };

  let profileImg = profileIcon;
  const jwt = localStorage.getItem('google_jwt');
  if (jwt) {
    const decoded: any = jwtDecode(jwt);
    profileImg = decoded?.picture || profileIcon;
  }
  const navigate = useNavigate();
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    if (query.trim()) navigate(`/search/${query.trim()}`);
  };

  return (
    <nav className="flex-div">
      <div className="nav-left flex-div">
        <img
          className="menuIcon"
          onClick={() => setSidebar((prev) => !prev)}
          src={menuIcon}
          alt=""
        />
        <Link to="./">
          {' '}
          <img className="logo" src={logo} alt="" />
        </Link>
      </div>
      <div className="nav-middle flex-div">
        <div className="searchBox flex-div">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
            placeholder="Search"
          />
          <img src={SearchIcon} alt="search" onClick={handleSearch} style={{ cursor: 'pointer' }} />
        </div>
      </div>
      <div className="nav-right flex-div">
        <img src={upload_icon} alt="" />
        <img src={moreIcon} alt="" />
        <img src={notificationIcon} alt="" />

        {localStorage.getItem('google_jwt') ? (
          <div style={{ position: 'relative' }}>
            <img
              className="userIcon"
              src={jwtDecode<any>(localStorage.getItem('google_jwt')!).picture}
              alt="avatar"
              onClick={() => setMenuOpen((prev) => !prev)}
              style={{ cursor: 'pointer' }}
              referrerPolicy="no-referrer"
            />
            {menuOpen && <UserMenu onLogout={handleLogout} onViewHistory={handleViewHistory} />}
          </div>
        ) : (
          <div className="userIcon">
            <GoogleLoginButton />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
