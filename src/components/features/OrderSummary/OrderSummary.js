import React from 'react';
import styles from './OrderSummary.scss';
import PropTypes from 'prop-types';
import {calculateTotal} from '../../../utils/calculateTotal.js';
import {formatPrice} from '../../../utils/formatPrice.js';

const OrderSummary = ({tripCost, options}) => {
  const totalPrice = calculateTotal(formatPrice(tripCost),options);
  return (
    <h2 className={styles.component}>Total: <strong>${(totalPrice).toFixed(2)}</strong></h2>
  );
};

OrderSummary.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
};

export default OrderSummary;