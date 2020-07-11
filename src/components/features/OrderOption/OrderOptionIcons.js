import React from 'react';
import styles from './OrderOption.scss';
import {formatPrice} from '../../../utils/formatPrice.js';
import Icon from '../../../components/common/Icon/Icon.js';
import PropTypes from 'prop-types';

const OrderOptionIcons = ({values, setOptionValue, currentValue, required}) => (
  <div className={styles.icon} >
    {required ? '' : (
      <div className={styles.icon + (currentValue === '' ? ' ' + styles.iconActive : '')} onClick={value => setOptionValue(value.name)}>
        <Icon name="times-circle"/>
        none
      </div>
    )}
    {values.map(value => (
      <div className={styles.icon + (currentValue === value.id ? ' ' + styles.iconActive : '')} key={value.id} onClick={() => { setOptionValue(value.id); }}>
        <Icon name={value.icon}></Icon>
        {value.name} ({formatPrice(value.price)})
      </div>
    ))}
  </div>
);

OrderOptionIcons.propTypes = {
  value: PropTypes.object,
  key: PropTypes.string,
  setOptionValue: PropTypes.func,
  currentValue: PropTypes.string,
  required: PropTypes.bool,
  values: PropTypes.node,
};

export default OrderOptionIcons;
