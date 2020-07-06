import React from 'react';
import styles from './OrderOption.scss';


const OrderOptionTextArea = (key) => (
  <div className={styles.input}>
    <input type="text" key={key}></input>
  </div>
);

export default OrderOptionTextArea;