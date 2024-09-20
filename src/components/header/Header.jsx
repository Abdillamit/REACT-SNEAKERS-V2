import React from 'react';
import Basket from '../../assets/icons/header/basket.svg';
import Favorite from '../../assets/icons/header/favorite.svg';
import User from '../../assets/icons/header/user.svg';
import Logo from '../../assets/img/Header/Logo.svg';
import './Header.css';

export default function Header() {
  return (
    <div className='header'>
      <div className="header__content">
        <div>
          <img src={Logo} alt="" />
        </div>

        <div className="header__menu">
          <ul className='header__menu_items'>
            <li className='header__menu_item'> <img src={Basket} alt="Basket" /> 1205 руб.</li>
            <li className='header__menu_item'> <img src={Favorite} alt="Favorite" />Закладки</li>
            <li className='header__menu_item'> <img src={User} alt="User" />Профиль</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
