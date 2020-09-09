import React, { useState } from 'react';
import '../../styles/Navbar.scss';

const Menu = ({ setToggleMenu, toggleMenu }) => {
  const [toggleMenu2, setToggleMenu2] = useState(false);
  const [toggleMenu3, setToggleMenu3] = useState(false);
  return (
    <div
      className={`menu wrapper show-desktop ${toggleMenu ? 'active-menu' : ''}`}
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
            <h3>ECARDS</h3>
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
                <ul className={`menu-3 ${toggleMenu3 ? 'active-menu' : ''}`}>
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
  );
};

export default Menu;
