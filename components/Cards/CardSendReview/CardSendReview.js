import './CardSendReview.scss';

const CardSendReview = () => {
  return (
    <>
      <div className='header-links show-tablet'>
        <p>HOME</p>
        <p>ECARDS</p>
        <p>POPULAR ECARDS</p>
      </div>
      <div className='card-send-review container'>
        <div className='share card'>
          <h2>Share</h2>
          <div className='share-options'>
            <div className='share-icon'>
              <img src='/assets/share-icons/email-normal.svg' alt='' />
              <p>email</p>
            </div>
            <div className='share-icon'>
              <img src='/assets/share-icons/link-normal.svg' alt='' />
              <p>copy link</p>
            </div>
            <div className='share-icon'>
              <img src='/assets/share-icons/linkin-normal.svg' alt='' />
              <p>linkedin</p>
            </div>
            <div className='share-icon'>
              <img src='/assets/share-icons/facebook-normal.svg' alt='' />
              <p>facebook</p>
            </div>
            <div className='share-icon'>
              <img src='/assets/share-icons/instagram-normal.svg' alt='' />
              <p>instagram</p>
            </div>
            <div className='share-icon'>
              <img src='/assets/share-icons/twitter-normal.svg' alt='' />
              <p>twitter</p>
            </div>
          </div>
        </div>
        <div className='premium-card card'>
          <div className='premium-title'>
            <img src='/assets/diamond.svg' alt='' />
            <h3>Premium Card</h3>
          </div>
          <div className='premuim-btn'>
            <button className='btn btn-black'>PREVIEW AS RECIEVER</button>
            <p>
              Do you need <a>help</a>?
            </p>
          </div>
        </div>

        <div className='card-img card'>
          <img src='/assets/images/hero.svg' alt='' />
        </div>
      </div>
    </>
  );
};

export default CardSendReview;
