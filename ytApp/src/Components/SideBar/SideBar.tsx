import React from 'react'
import './SideBar.css'
import home from '../../assets/home.png'
import game_icon from '../../assets/game_icon.png'
import automobiles from '../../assets/automobiles.png'
import sports from '../../assets/sports.png'
import entertainment from '../../assets/entertainment.png'
import tech from '../../assets/tech.png'
import music from '../../assets/music.png'
import blogs from '../../assets/blogs.png'
import news from '../../assets/news.png'
import jack from '../../assets/jack.png'
import simon from '../../assets/simon.png'
import tom from '../../assets/tom.png'
import megan from '../../assets/megan.png'
import cameron from '../../assets/cameron.png'
type SideBarProps = {
  sidebar: boolean;
};
const SideBar = ({sidebar}) => {
  
  return (
    <div className={`sidebar ${sidebar?"":"small-sidebar"}`}>
      <div className="sortcut-links">
        <div className="sideLink">
        <img src={home} alt="" /> <p>Home</p>
        </div>
          <div className="sideLink">
        <img src={game_icon} alt="" /> <p>Gaming</p>
        </div>
  <div className="sideLink">
        <img src={automobiles} alt="" /> <p>Car</p>
        </div>
          <div className="sideLink">
        <img src={sports} alt="" /> <p>Sports</p>
        </div>
          <div className="sideLink">
        <img src={entertainment} alt="" /> <p>Entertaimant</p>
        </div>
          <div className="sideLink">
        <img src={tech} alt="" /> <p>Tech</p>
        </div>
         <div className="sideLink">
        <img src={music} alt="" /> <p>Music</p>
        </div>
         <div className="sideLink">
        <img src={blogs} alt="" /> <p>Blog</p>
        </div>
         <div className="sideLink">
        <img src={news} alt="" /> <p>News</p>
        </div>
        <hr />
        </div>
        <div className="subcribedList">
        <h3>Subcribed List</h3>
        <div className="sideLink">
          <img src={jack} alt="" /><p>Sub 1 </p>
        </div>
        <div className="sideLink">
          <img src={simon} alt="" /><p>Sub 2 </p>
        </div>
        <div className="sideLink">
          <img src={tom} alt="" /><p>Sub 3 </p>
        </div>
        <div className="sideLink">
          <img src={megan} alt="" /><p>Sub 4 </p>
        </div>
        <div className="sideLink">
          <img src={cameron} alt="" /><p>Sub 5 </p>
        </div>
     
        </div>
        </div>
  )
}

export default SideBar