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
  category: number;
  setCategory: React.Dispatch<React.SetStateAction<number>>;
};

const SideBar = ({ sidebar, category, setCategory }: SideBarProps) => {
  return (
    <div className={`sidebar ${sidebar ? "" : "small-sidebar"}`}>
      <div className="sortcut-links">
        <div className={`sideLink ${category===0?"active":""}`} onClick={() => setCategory(0)}>
          <img src={home} alt="" /> <p>Home</p>
        </div>
        <div className={`sideLink ${category===20?"active":""}`} onClick={() => setCategory(20)}>
          <img src={game_icon} alt="" /> <p>Gaming</p>
        </div>
        <div className={`sideLink ${category===2?"active":""}`} onClick={() => setCategory(2)}>
          <img src={automobiles} alt="" /> <p>Car</p>
        </div>
        <div className={`sideLink ${category===17?"active":""}`}onClick={() => setCategory(17)}>
          <img src={sports} alt="" /> <p>Sports</p>
        </div>
        <div className={`sideLink ${category===24?"active":""}`} onClick={() => setCategory(24)}>
          <img src={entertainment} alt="" /> <p>Entertainment</p>
        </div>
        <div className={`sideLink ${category===28?"active":""}`} onClick={() => setCategory(28)}>
          <img src={tech} alt="" /> <p>Tech</p>
        </div>
        <div className={`sideLink ${category===10?"active":""}`} onClick={() => setCategory(10)}>
          <img src={music} alt="" /> <p>Music</p>
        </div>
        <div className={`sideLink ${category===22?"active":""}`} onClick={() => setCategory(22)}>
          <img src={blogs} alt="" /> <p>Blog</p>
        </div>
        <div className={`sideLink ${category===25?"active":""}`} onClick={() => setCategory(25)}>
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