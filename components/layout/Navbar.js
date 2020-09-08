import React, { useState } from 'react';
import '../../styles/Navbar.scss';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleMenu2, setToggleMenu2] = useState(false);
  const [toggleMenu3, setToggleMenu3] = useState(false);
  const [toggleSearch, setToggleSearch] = useState(false);

  return (
    <nav>
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
        <div className='brand-logo'>
          <img src='/assets/Ojolie_Novel_Logo.png' alt='' />
        </div>
        <div
          className={`menu wrapper show-desktop ${
            toggleMenu ? 'active-menu' : ''
          }`}
        >
          <ul className='menu-1'>
            <li>
              <h3 className='hide-desktop'>HOME</h3>
            </li>
            <li>
              <div
                className='expandable'
                onClick={() => setToggleMenu2(!toggleMenu2)}
              >
                <h3>ECARD COLLECTION</h3>
                <img src='/assets/expand.svg' alt='' className='expand-icon' />
              </div>
              <div className={`menu-2 ${toggleMenu2 ? 'active-menu' : ''}`}>
                <ul>
                  <li>
                    <div className='expandable'>
                      <h4>Holidays</h4>
                      <img
                        src='/assets/expand.svg'
                        alt=''
                        className='expand-icon'
                        onClick={() => setToggleMenu3(!toggleMenu3)}
                      />
                    </div>
                    <ul
                      className={`menu-3 ${toggleMenu3 ? 'active-menu' : ''}`}
                    >
                      <li>Thanksgiving</li>
                      <li>Autumn & Fall</li>
                      <li>New Year</li>
                      <li>Christmas</li>
                      <li>Winter</li>
                      <li>Valentines' Day</li>
                      <li>Saint patrick</li>
                      <li>Easter</li>
                      <li>Mother's Day</li>
                      <li>More...</li>
                    </ul>
                  </li>
                  <li>
                    <div className='expandable'>
                      <h4>Occassions</h4>
                      <img
                        src='/assets/expand.svg'
                        alt=''
                        className='expand-icon'
                      />
                    </div>
                  </li>
                  <li>
                    <div className='expandable'>
                      <h4>Collections</h4>
                      <img
                        src='/assets/expand.svg'
                        alt=''
                        className='expand-icon'
                      />
                    </div>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <h3>PRICING</h3>
            </li>
            <li>
              <h3>OUR STORY</h3>
            </li>
            <li>
              <h3>ECARDS FOR BUSINESS</h3>
            </li>
          </ul>
        </div>
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
