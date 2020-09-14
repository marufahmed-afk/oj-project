import './PlanCards.module.scss';
import PlanCard from './PlanCard/PlanCard';

const PlanCards = () => {
  return (
    <div className='plan-cards'>
      {/* <PlanCard plan='1 YEAR' cost='$14 / €17 | £14' msg='Send All Our Cards' /> */}
      <PlanCard plan='2 YEARS' cost='$14 / €17 | £14' msg='Save 25%' />
      <PlanCard plan='2 YEARS' cost='$14 / €17 | £14' msg='Save 25%' />
    </div>
  );
};

export default PlanCards;
