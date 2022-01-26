import { useState } from 'react/cjs/react.development';
import PropTypes from "prop-types";


export const AddCategory = ( { setBrands } ) => {

  const [ inputValue, setInputValue ] = useState('');
  
  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if( inputValue.trim().length > 2 ){
      setBrands( brands => [ inputValue, ...brands] );
      setInputValue('');
    }
  }

  return (
  <form className="d-flex justify-content-center" onSubmit={ handleSubmit } >
    <input type="text" className="form-control w-25 bg-white d-flex justify-content-center text-white bg-dark bg-opacity-10" placeholder="Search Gif" aria-label="Username"
           value={ inputValue }
           onChange={ handleInputChange } />
  </form>
  );
};

AddCategory.propTypes = {
  setBrands : PropTypes.func.isRequired
};
