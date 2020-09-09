import '../../styles/CardCategory.scss';
import React, { useState } from 'react';

import CategoryMenu from './CategoryMenu';

function CardCategory() {
  const [toggleFilter, setToggleFilter] = useState(false);
  return (
    <div>
      <header>
        <h1>Card Category</h1>
        <img src='/assets/images/section-img.png' alt='' />
      </header>
      <div className='filter-toggle hide-desktop'>
        <img
          src='/assets/filter.svg'
          alt=''
          onClick={() => setToggleFilter(!toggleFilter)}
        />
      </div>
      <div className={`filter ${toggleFilter ? 'active' : ''}`}>
        <div className='filter-box'>
          <h2>Filters</h2>
          <img
            src='/assets/cancel.png'
            alt=''
            onClick={() => setToggleFilter(!toggleFilter)}
          />
        </div>
        <div className='filter-categories'>
          <ul>
            <li className='blue-title'>Clear Filters</li>
            <li>Most popular</li>
            <li>New</li>
            <li>Premium</li>
            <li>Free</li>
            <li>All</li>
          </ul>
          <div className='filter-title'>
            <h2>Color</h2>
          </div>
          <div className='colors'>
            <div className='color'></div>
            <div className='color'></div>
            <div className='color'></div>
            <div className='color'></div>
            <div className='color'></div>
            <div className='color'></div>
            <div className='color'></div>
            <div className='color'></div>
            <div className='color'></div>
            <div className='color'></div>
            <div className='color'></div>
            <div className='color'></div>
          </div>
          <div className='filter-title'>
            <h2>Category</h2>
          </div>
          <ul>
            <li>Flowers</li>
            <li>Dog & Cats</li>
            <li>For Children</li>
            <li>For Men</li>
            <li>For Women</li>
            <li>Origami</li>
          </ul>
        </div>
      </div>
      <section className='category-body'>
        <CategoryMenu />
        <div className='cards container'>
          <div className='card'>
            <img src='/assets/images/popular.png' alt='' />
            <div className='category-btn'>
              <button className='btn-2'>CARD TITLE</button>
              <img src='/assets/diamond.svg' alt='' />
            </div>
          </div>
          <div className='card'>
            <img src='/assets/images/popular.png' alt='' />
            <div className='category-btn'>
              <button className='btn-2'>CARD TITLE</button>
              <img src='/assets/diamond.svg' alt='' />
            </div>
          </div>
          <div className='card'>
            <img src='/assets/images/popular.png' alt='' />
            <div className='category-btn'>
              <button className='btn-2'>CARD TITLE</button>
              <img src='/assets/diamond.svg' alt='' />
            </div>
          </div>
          <div className='card'>
            <img src='/assets/images/popular.png' alt='' />
            <div className='category-btn'>
              <button className='btn-2'>CARD TITLE</button>
              <img src='/assets/diamond.svg' alt='' />
            </div>
          </div>
          <div className='card'>
            <img src='/assets/images/popular.png' alt='' />
            <div className='category-btn'>
              <button className='btn-2'>CARD TITLE</button>
              <img src='/assets/diamond.svg' alt='' />
            </div>
          </div>
          <div className='card'>
            <img src='/assets/images/popular.png' alt='' />
            <div className='category-btn'>
              <button className='btn-2'>CARD TITLE</button>
              <img src='/assets/diamond.svg' alt='' />
            </div>
          </div>
          <div className='card'>
            <img src='/assets/images/popular.png' alt='' />
            <div className='category-btn'>
              <button className='btn-2'>CARD TITLE</button>
              <img src='/assets/diamond.svg' alt='' />
            </div>
          </div>
          <div className='card'>
            <img src='/assets/images/popular.png' alt='' />
            <div className='category-btn'>
              <button className='btn-2'>CARD TITLE</button>
              <img src='/assets/diamond.svg' alt='' />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CardCategory;
