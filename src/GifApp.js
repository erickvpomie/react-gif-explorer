import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';
import 'bootstrap/dist/css/bootstrap.css'

function GifApp() {

  const [ brands, setBrands ] = useState(['Apple']);

  // const handleAdd = () => {
  //   setBrands([...brands, 'Hola']);
  //   // setBrands( brand => [...brand, 'hola'] )
  // }

  return (
    <div className="container bg-dark bg-opacity-60 text-white">
      <h2 className="fs-1 fw-bold pb-lg-3 d-flex align-items-center justify-content-center">GIF EXPLORER</h2>
      <AddCategory setBrands = { setBrands }/>
      <hr />

      <ol>
        { 
        
        brands.map(  brand => (
          <GifGrid 
            key={ brand }
            brand = { brand }
        /> 
        ))     
        }
      </ol>

    </div>
  );
}

GifApp.propTypes = {};

export default GifApp;
