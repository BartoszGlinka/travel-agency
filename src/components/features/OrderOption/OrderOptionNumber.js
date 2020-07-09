import React from 'react';
import styles from './OrderOption.scss';
import {formatPrice} from '../../../utils/formatPrice.js';
import PropTypes from 'prop-types';

const OrderOptionNumber = ({currentValue, key, setOptionValue, limits, price}) => (
  <div className={styles.number}>
    <input type="number" className={styles.inputSmall} value={currentValue} max={limits.max} min={limits.min} key={key} onChange={event => setOptionValue(event.currentTarget.value)}>
    </input>
    {(formatPrice(price))}
  </div>
);

OrderOptionNumber.propTypes = {
  currentValue: PropTypes.number,
  key: PropTypes.string,
  setOptionValue: PropTypes.func,
  limits: PropTypes.object,
  price: PropTypes.string,
};

export default OrderOptionNumber;