import './Footer.module.scss';

const Footer = () => {
  return (
    <footer>
      <div className='f1'>
        <div className='list'>
          <ul>
            <li>ECARDS</li>
            <li>ALL CARDS</li>
            <li>FREE CARDS</li>
            <li>NEW CARDS</li>
          </ul>
          <ul>
            <li>ABOUT</li>
            <li>OUR STORY</li>
            <li>PRESS</li>
            <li>MEMBERSHIP</li>
          </ul>
          <ul>
            <li>HELP</li>
            <li>CONTACT</li>
            <li>FAQ</li>
            <li>PRIVACY</li>
          </ul>
        </div>
      </div>
      <div className='f2'>
        <p>OJOLIE APS </p>
        <p> NØRREVANG 73, 1. TH</p>
        <p>3460 BIRKERØD, DENMARK</p>
        <p>CVR 38723103 </p>
        <p className='hide-mobile show-tablet'>
          COPYRIGHT © 2020 OJOLIE ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
