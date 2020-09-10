import Link from 'next/link';
import './Homepage.scss';

import Footer from '../layout/Footer';

function Homepage() {
  return (
    <div className='home'>
      <div className='hero-section'>
        <div className='hero'>
          <img src='/assets/images/hero.svg' alt='' />
        </div>
        <div className='card card-try'>
          <div className='card-title'>
            <h1>designer</h1>
            <h1>ecards</h1>
          </div>
          <p>send with confidence, connect deeply</p>
          <button className='btn-1'> TRY RISK FREE</button>
        </div>
      </div>

      <section className='story hide-mobile'>
        <h1>OUR STORY</h1>
        <p>
          I moved a lot as a child, growing up in four different countries and
          two continents. Back then I kept a suitcase full of letters I wrote
          with friends. Some I have managed to stay in touch with until this
          day! The days of snail mail might sound nostalgic, but the fundamental
          need to keep in touch .... read more
        </p>
        <div className='round-images'>
          <div className='round-img'></div>
          <div className='round-img'></div>
          <div className='round-img'></div>
        </div>
      </section>

      <div className='grid-1 wrapper'>
        <div className='card card-2 c-1'>
          <div className='card-title'>
            <h1>Birthday</h1>
            <h1>ecards</h1>
          </div>
          <img src='/assets/images/card-2.svg' alt='' />
        </div>

        <div className='card card-3 c-2'>
          <div className='card-title'>
            <h2>Get Well</h2>
            <button className='btn-2'>BROWSE</button>
          </div>
          <img src='/assets/images/card-3.svg' alt='' />
        </div>
        <div className='card card-3 c-3'>
          <div className='card-title'>
            <h2>Autumn Ecards</h2>
            <button className='btn-2'>BROWSE</button>
          </div>
          <img src='/assets/images/card-4.svg' alt='' />
        </div>
        <div className='card card-3 c-4'>
          <div className='card-title'>
            <h2>Thinking of you Ecards</h2>
            <button className='btn-2'>BROWSE</button>
          </div>
          <img src='/assets/images/card-5.svg' alt='' />
        </div>
        <div className='card card-3 c-5'>
          <div className='card-title'>
            <h2>Flower Ecards</h2>
            <button className='btn-2'>BROWSE</button>
          </div>
          <img src='/assets/images/card-6.svg' alt='' />
        </div>
      </div>
      <Link href='/card-category'>
        <button className='btn'>BROWSE ALL</button>
      </Link>
      <section className='get-started wrapper'>
        <div className='info'>
          <h1> Ready to get started?</h1>
          <p>Try risk free with our 30 day money back guarantee. </p>
          <p> Unlimited sending all year for one low price. </p>
          <button className='btn btn-black'>GET STARTED</button>
        </div>
        <img src='/assets/images/section-img.png' alt='' />
      </section>
      <section className='popular wrapper'>
        <h1>POPULAR ECARDS</h1>
        <div className='popular-images'>
          <img src='/assets/images/popular.svg' alt='' />
          <img src='/assets/images/popular.svg' alt='' />
          <img src='/assets/images/popular.svg' alt='' />
          <img src='/assets/images/popular.svg' alt='' />
        </div>
        <Link href='/card-category'>
          <button className='btn'>BROWSE ALL</button>
        </Link>
      </section>
      <section className='subscribe wrapper'>
        <div className='sub-flex'>
          <h1>SUBSCRIBE US:</h1>
          <div className='sub-input'>
            <input type='text' placeholder='EMAIL' />
            <button className='btn btn-black'>SUBSCRIBE</button>
          </div>
        </div>
        <div className='social-links'>
          <img src='/assets/images/social/facebook.png' alt='' />
          <img src='/assets/images/social/instagram.png' alt='' />
          <img src='/assets/images/social/linkedin.png' alt='' />
          <img src='/assets/images/social/pinterest.png' alt='' />
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Homepage;
