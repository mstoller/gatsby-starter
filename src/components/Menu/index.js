import React from 'react'
import Link from 'gatsby-link'
import {main} from '../../config/menus'

const menuItems = main.map((item, k) => {
  return (
    <Link
      to={item.href}
      key={k}
    >
      {item.name}
    </Link>
  )
});

const Menu = () => (
  <div>
    {menuItems}
  </div>
);

export default Menu
