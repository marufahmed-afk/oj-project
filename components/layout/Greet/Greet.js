import './Greet.module.scss';

const Greet = () => {
  return (
    <div className='greet container'>
      <h2>Thank you for Registering</h2>
      <p>
        A confirmation email has been sent to you. You can now use all our free
        cards. To send our premium cards, you will need to upgrade to a paid
        membership.
      </p>
      <strong>
        Any cards you write will be sent once you have confirmed your email
        address.
      </strong>
      <button className='btn'>Browse Free Ecards</button>
    </div>
  );
};

export default Greet;
