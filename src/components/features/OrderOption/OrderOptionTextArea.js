import React from 'react';
import styles from './OrderOption.scss';
import PropTypes from 'prop-types';

const OrderOptionTextArea = ({setOptionValue}) => (
  <div className={styles.input}>
    <input type="text" onChange={event => setOptionValue(event.currentTarget.value)}></input>
  </div>
);

OrderOptionTextArea.propTypes = {
  setOptionValue: PropTypes.func,
};
export default OrderOptionTextArea;