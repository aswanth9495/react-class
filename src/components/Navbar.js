import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

function Navbar(props) {
  // console.log(props)
  return (
    <div>
     <ul>
      <li>
        <NavLink to="/"> Home </NavLink>
      </li>
      <li>
        <NavLink to="/about"> About</NavLink>
      </li>
      <li>
        <NavLink to="/todo-app"> Todo App</NavLink>
      </li>
      <li>
        <NavLink to="/12"> Posts</NavLink>
      </li>
      
     </ul>
    </div>
  );
}

export default withRouter(Navbar);