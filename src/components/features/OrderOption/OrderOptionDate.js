import React from 'react';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import PropTypes from 'prop-types';


const OrderOptionDate = ({id}) => (
  <DatePicker selected={id} onChange={id} />
);

OrderOptionDate.propTypes = {
  id: PropTypes.string,
};

export default OrderOptionDate;