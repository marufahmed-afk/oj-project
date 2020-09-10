import './CardSend.scss';

const CardSend = () => {
  return (
    <div className='card-send'>
      <div className='card-img'>
        <img src='/assets/images/hero.svg' alt='' />
      </div>
      <div className='card-message'>
        <div className='card-greeting'>
          <textarea
            name=''
            id=''
            placeholder='Type your message here'
          ></textarea>
        </div>
        <div className='card-text'>
          <textarea
            name=''
            id=''
            cols='30'
            rows='10'
            placeholder='Type your message here'
          ></textarea>
        </div>

        <button className='btn btn-black'>WRITE MESSAGE</button>
      </div>
    </div>
  );
};

export default CardSend;