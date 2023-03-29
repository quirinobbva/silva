import React from 'react';
import './App.css';


function Option(props) {

  return (
    <option className='select_option'>{props.solution}</option>
  );
}

export default Option;
