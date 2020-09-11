import './CardRecipient.scss';

const CardRecipient = () => {
  return (
    <div className='card-receive'>
      <div className='card-img'>
        <img src='/assets/images/hero.svg' alt='' />
      </div>
      <div className='message container'>
        <h2>Dear Jenny</h2>
        <p>
          Wishing you and amazing Birthday and lots of love and happiness. Mom
        </p>
        <p>Mom</p>
      </div>
    </div>
  );
};

export default CardRecipient;
