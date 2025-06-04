const TourDetailsHeader = ({ tour }) => {
  return (
    <section className='section-header'>
      <div className='header__hero'>
        <div className='header__hero-overlay'>&nbsp;</div>
        <img
          src={`https://natours-f770.onrender.com/img/tours/${tour.imageCover}`}
          alt={tour.name}
          className='header__hero-img'
        />
      </div>
      <div className='heading-box'>
        <h1 className='heading-primary'>
          <span>{tour.name}</span>
        </h1>
        <div className='heading-box__group'>
          <div className='heading-box__detail'>
            <svg className='heading-box__icon'>
              <use xlinkHref='/img/icons.svg#icon-clock'></use>
            </svg>
            <span className='heading-box__text'>{tour.duration} days</span>
          </div>
          <div className='heading-box__detail'>
            <svg className='heading-box__icon'>
              <use xlinkHref='/img/icons.svg#icon-map-pin'></use>
            </svg>
            <span className='heading-box__text'>
              {tour.startLocation.description}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TourDetailsHeader;
