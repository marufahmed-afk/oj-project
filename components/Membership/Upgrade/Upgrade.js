import './Upgrade.module.scss';
import PlanCards from '../PlanCards/PlanCards';
import Greet from '../../layout/Greet/Greet';

const Upgrade = () => {
  return (
    <div className='upgrade container'>
      <div className='upgrade-intro'>
        <h2 className='hide-mobile show-tablet upgrade-header'>
          Upgrade to Send All Our Cards
        </h2>
        <div className='upgrade-flex'>
          <div className='hide-tablet show-desktop upgrade-info'>
            <div>
              <h2 className='hide-desktop'>Upgrade to Premium</h2>
              <h2 className='font-2 txt-blue'>Designer Ecards.</h2>
              <strong>Send with confidence, Connect Deeply.</strong>
              <p>
                Your Friends and family will thank you for it. 30 day money back
                guarantee. Unlimited sending all year for one low price. Each
                illustrated and animated card is a piece of art that will leave
                a lasting impression.
              </p>
            </div>
          </div>
          <PlanCards />
        </div>
      </div>

      <p className='policy'>
        For personal use only. We Value Your Privacy & Security. We will never
        sell your information and for your protection we never store your credit
        card information. Please read our
        <span className='txt-blue'>privacy policy</span> .
      </p>
    </div>
  );
};

export default Upgrade;
