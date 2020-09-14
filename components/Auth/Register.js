import Link from 'next/link';
import './Auth.module.scss';

const Register = () => {
  return (
    <div className='auth-box container'>
      <img className='close' src='/assets/cancel.png' alt='' />
      <p>Register to send your free cards.</p>
      <form>
        <input type='text' placeholder='FIRST NAME' />
        <input type='text' placeholder='LAST NAME' />
        <input type='text' placeholder='EMAIL' />
        <input type='text' placeholder='PASSWORD' />
        <input type='text' placeholder='REPEAT PASSWORD' />
        <div className='sub-text'>
          <input type='checkbox' name='password' id='password' />
          <span>
            Be the first to hear about special offers and news. Unsubscribe
            anytime.
          </span>
        </div>

        <button className='btn btn-black'>CREATE ACCOUNT</button>
      </form>
      <small>
        <span>By creating an account, I agree with </span> Ojolie's Terms of
        Service <span>and </span>
        Privacy Policy.
      </small>
      <p>
        Have an account? <Link href='/auth/login'>Log in</Link>
      </p>
    </div>
  );
};

export default Register;
