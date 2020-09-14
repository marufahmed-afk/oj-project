import Link from 'next/link';
import './Auth.module.scss';

const Login = () => {
  return (
    <div className='auth-box container'>
      <img className='close' src='/assets/cancel.png' alt='' />
      <p>Register login.</p>
      <form>
        <input type='text' placeholder='EMAIL' />
        <input type='text' placeholder='PASSWORD' />
        <p className='forgot -password'>Forgot password</p>

        <button className='btn btn-black'>CREATE ACCOUNT</button>
      </form>
      <small>
        <span>By creating an account, I agree with </span> Ojolie's Terms of
        Service <span>and </span>
        Privacy Policy.
      </small>
      <p>
        No account? <Link href='/auth/register'>Log in</Link>
      </p>
    </div>
  );
};

export default Login;
