import PropTypes from "prop-types";
import React from 'react';
import css from './Filter.module.css'

const Filter = ({value, onFilter}) => (
  <label>
   <span className={css.filterSpan}>Find contacts by name</span> 
    <input type="text" value={value} onChange={onFilter} />
  </label>
);

export default Filter;

Filter.propTypes = {
  value: PropTypes.string,
  onFilter: PropTypes.func,
}