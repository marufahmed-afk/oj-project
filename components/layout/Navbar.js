import React, { useState } from 'react';
import Link from 'next/link';
import './Navbar.module.scss';
import Menu from './Menu';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const [toggleSearch, setToggleSearch] = useState(false);

  return (
    <nav className='nav'>
      <div className='nav-items'>
        <div
          className='nav-item search-icon'
          onClick={() => setToggleSearch(!toggleSearch)}
        >
          <img src='/assets/search.svg' alt='' />
        </div>

        <div className='nav-item'>
          <img src='/assets/heart-outline.svg' alt='' />
        </div>
        <div className='nav-item hide-desktop'>
          <img src='/assets/login.svg' alt='' />
        </div>
        <div className='nav-item nav-large show-desktop'>
          <p>Register |</p>
          <p>Login</p>
        </div>

        <div
          className='nav-item ham hide-desktop'
          onClick={() => setToggleMenu(!toggleMenu)}
        >
          {toggleMenu ? (
            <img src='/assets/cancel.png' alt='' className='ham' />
          ) : (
            <img src='/assets/Burger.svg' alt='' className='ham' />
          )}
        </div>
      </div>
      <div className='desktop-menu'>
        <Link href='/'>
          <div className='brand-logo'>
            <img src='/assets/Ojolie_Novel_Logo.png' alt='' />
          </div>
        </Link>

        <Menu setToggleMenu={setToggleMenu} toggleMenu={toggleMenu} />
      </div>

      <div className={`search ${toggleSearch ? 'active' : ''}`}>
        <div className='search-box'>
          <img src='/assets/search.svg' alt='' />
          <input type='text' placeholder='SEARCH IN ALL' />
          <img
            src='/assets/cancel.png'
            alt=''
            onClick={() => setToggleSearch(!toggleSearch)}
          />
        </div>
        <div className='search-categories'>
          <ul>
            <li>Popular Categories</li>
            <li>Current Holiday</li>
            <li>Birthdays</li>
            <li>Thinking of You</li>
            <li>Love</li>
            <li>Friendship</li>
            <li>
              Funny <span className='new'>NEW!</span>
            </li>
            <li>Flowers</li>
            <li>Dog & Cats</li>
            <li>For Children</li>
            <li>Free</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
