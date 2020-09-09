import './CardDetail.scss';

function CardCategory() {
  return (
    <>
      <div className='card-img'>
        <img src='/assets/images/hero.svg' alt='' />
      </div>
      <div className='info container'>
        <h2>Party Animals</h2>
        <div className='icons'>
          <img src='/assets/heart-outline.svg' alt='' />
          <img src='/assets/diamond.svg' alt='' />
        </div>
        <div className='desc'>
          <strong>Description</strong>
          <p>
            We had so much fun creating this card, from hand illustrating the
            funky party animals to not being able to get the catchy tune out of
            our heads.
          </p>
        </div>
        <button className='btn btn-black'>WRITE MESSAGE</button>
      </div>
    </>
  );
}

export default CardCategory;
