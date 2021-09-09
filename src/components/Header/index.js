import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import './style.scss';

function Header({categories }) {
  //j'utilise ma proptypes

  const menu = categories.map((category)=>(
    <li key={category.route}>
      <NavLink 
      to={category.route} 
      className="header__link">
      activeClassName="header__link--selected"
      exact
      >
        {category.label}
      </NavLink>
    </li>
  ));

    return (
        <header className="header">
        <nav>
          <ul>
            {menu}
          </ul>
        </nav>
      </header>
    ); 
}

//je vais créer ma proptypes Categories. 
//dans cette props, il y a un tableau avec route et label qui sont requis.
Header.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      route: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }),
  ).isRequired,

}


export default Header;