import React, { useState } from 'react';
import './Home.css';
import SideBar from '../../Components/SideBar/SideBar';
import Feed from '../../Components/Feed/Feed';

type HomeProps = {
  setSidebar: React.Dispatch<React.SetStateAction<boolean>>;
  sidebar: boolean;
};

const Home = ({ setSidebar, sidebar }: HomeProps) => {
  // 1. Tạo state để lưu category
  const [category, setCategory] = useState(0);

  return (
    <>
      {/* 2. Truyền category và setCategory nếu cần cho Sidebar */}
      <SideBar sidebar={sidebar} category={category} setCategory={setCategory} />

      <button onClick={() => setSidebar((prev) => !prev)}>Toggle Sidebar</button>

      <div className={`container ${sidebar ? '' : 'large-container'}`}>
        {/* 3. Truyền category cho Feed */}
        <Feed category={category} />
      </div>
    </>
  );
};

export default Home;
