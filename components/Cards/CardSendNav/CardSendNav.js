import './CardSendNav.scss';

const CardSendNav = () => {
  return (
    <div className='send-nav'>
      <div className='brand-logo-2'>
        <img src='/assets/cards/OjolieLogoGoldFoil.png' alt='' />
      </div>
      <div className='send-controls'>
        <img src='/assets/cards/arrows/back-arrow.png' alt='' />

        <img
          src='/assets/cards/icon/save-normal.png'
          alt=''
          className='hide-tablet'
        />
        <button className='btn show-tablet'>SAVE DRAFT</button>

        <img
          src='/assets/cards/arrows/next-arrow.png'
          alt=''
          className='hide-tablet'
        />
        <button className='btn btn-black show-tablet'>NEXT</button>
      </div>
    </div>
  );
};

export default CardSendNav;
