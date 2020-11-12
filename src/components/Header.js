import React from 'react';
import Hoc from './Hoc';

function Header({ children }) {
  return (
    <h1>
      {children}
    </h1>
  );
}

export default Header;