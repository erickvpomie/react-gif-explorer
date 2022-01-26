import { useState, useEffect } from "react";
import { getGifs }  from '../helpers/getGifs'

export const useFetchGifs = ( brand ) => {
 const [state, setstate] = useState({
   data : [],
   loading : true
 });

  useEffect( () => {
    getGifs( brand ).then( imgs => { 
      setstate({ data: imgs, loading : false }) 
    } )
  }, [ brand ] )

 return state;

}