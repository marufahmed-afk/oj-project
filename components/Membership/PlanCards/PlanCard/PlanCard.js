import '../PlanCards.module.scss';

const PlanCard = ({ plan, cost, msg }) => {
  return (
    <div className='plan-card'>
      <h1>{plan}</h1>
      <h3>{cost}</h3>
      <h3 className='txt-red msg'>{msg}</h3>
      <button className='btn btn-black'>JOIN NOW</button>
    </div>
  );
};

export default PlanCard;
