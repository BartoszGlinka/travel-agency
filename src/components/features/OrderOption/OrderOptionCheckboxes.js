import React from 'react';
import styles from './OrderOption.scss';
import {formatPrice} from '../../../utils/formatPrice.js';
import PropTypes from 'prop-types';

const newValueSet = (currentValue, id, checked) => {
  if(checked){
    return [
      ...currentValue,
      id,
    ];
  } else {
    return currentValue.filter(value => value != id);
  }
};

const OrderOptionCheckboxes = ({values, key, setOptionValue, currentValue}) => (
  <div className={styles.checkboxes}>
    {values.map(value => (
      <label key={key} name={value.name}>
        <input type="checkbox" value={value.id} checked={(currentValue.includes(value.id))} key={key} onChange={event => setOptionValue(newValueSet(currentValue, value.id, event.currentTarget.checked))}></input>
        {value.name} ({formatPrice(value.price)})
      </label>
    ))}
  </div>
);

OrderOptionCheckboxes.propTypes = {
  values: PropTypes.object,
  key: PropTypes.string,
  setOptionValue: PropTypes.func,
  currentValue: PropTypes.number,
};

export default OrderOptionCheckboxes;