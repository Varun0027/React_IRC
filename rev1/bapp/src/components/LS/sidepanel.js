import React from 'react';
import { Link } from 'react-router-dom';

import '../../Assets/Css/sp.css'

const SidePanel = () => {
  return (
    <div className="side-panel">
      <Link to="/search">
        SEARCH
      </Link>
      <Link to="/wishlist">
        WISHLIST
      </Link>
      <Link to="/history">
        HISTORY
      </Link>
    </div>
  );
};

export default SidePanel;
