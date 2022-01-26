export const GifGridItem = ( { id, title, url } ) => {

  return (
  <div className='card animate__animated animate__fadeIn bg-dark bg-opacity-10 shadow d-flex align-items-center rounded'>
      <img src={ url } alt={ title } />
      <p>{ title }</p>
  </div>
  );

};
