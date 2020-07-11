import React from 'react';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import PropTypes from 'prop-types';


const OrderOptionDate = ({ currentValue, setOptionValue }) => (
  <DatePicker selected={currentValue} onChange={date => setOptionValue(date)} />
);

OrderOptionDate.propTypes = {
  setOptionValue: PropTypes.func,
  currentValue:PropTypes.node,
};

export default OrderOptionDate;
