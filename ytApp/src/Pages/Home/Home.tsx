import React from 'react';
import './Home.css';
import SideBar from '../../Components/SideBar/SideBar';
import Feed from '../../Components/Feed/Feed';

type HomeProps = {
  setSidebar: React.Dispatch<React.SetStateAction<boolean>>;
  sidebar: boolean;
};

const Home = ({ setSidebar, sidebar }: HomeProps) => {
  return (
    <>
      <SideBar sidebar={sidebar} />
      <button onClick={() => setSidebar((prev) => !prev)}></button>
      <div className={`container ${sidebar?"":'large-container'}`}>
        <Feed/>
      </div>
    </>
  );
};

export default Home;
