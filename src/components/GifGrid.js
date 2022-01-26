import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';
import 'animate.css/animate.css'

export const GifGrid = ( { brand } ) => {

  const { data:images, loading } = useFetchGifs( brand );

  return (
    <>
        <h3>{ brand }</h3>

        { loading && <p className="animate__animated animate__flash">Loading...</p> }

        <div className="animate__animated card-grid justify-content-center">
         { 
      
          images.map( img => (
            <GifGridItem 
              key = { img.id }
              { ...img }
            />
          )) 
      
          }
        </div> 
    </>
  
  );
};
