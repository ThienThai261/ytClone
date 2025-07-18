import React from 'react';
import './MenuDrop.css';

type Props = {
  onLogout: () => void;
  onViewHistory: () => void;
};

const UserMenu: React.FC<Props> = ({ onLogout, onViewHistory }) => {
  return (
    <div className="user-menu">
      <button onClick={onViewHistory}>📺 Lịch sử xem</button>
      <button onClick={onLogout}>🔓 Đăng xuất</button>
    </div>
  );
};

export default UserMenu;
