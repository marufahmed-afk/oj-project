import Link from 'next/link';
import './Auth.module.scss';

const PasswordReset = () => {
  return (
    <div className='auth-box container'>
      <img className='close' src='/assets/cancel.png' alt='' />
      <p>Enter the email you used for your account.</p>
      <form>
        <input type='text' placeholder='EMAIL' />

        <button className='btn'>CANCEL</button>
        <button className='btn btn-black'>CREATE ACCOUNT</button>
      </form>
    </div>
  );
};

export default PasswordReset;
