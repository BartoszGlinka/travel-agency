import React from 'react';
import styles from './OtherPhone.scss';

class OtherPhone extends React.Component {
  
  
  getPhoneInRightTime(){

    const employees = [
      { from: 0, to: 8,text: 'Closed, we back to work at 8.00'},
      { from: 8, to: 12, name: 'Amanda', phone: '678.243.8455'},
      { from: 12, to: 16, name: 'Tobias', phone: '278.443.6443'},
      { from: 16, to: 22, name: 'Helena', phone: '167.280.3970'},
      { from: 22, to: 24,text: 'Closed, we back to work at 8.00'},
    ]; 
    
    const currentTime = new Date();
    const currentHour = currentTime.getUTCHours() + 1; 
    
    const employee = employees.find(empl => empl.from <= currentHour && empl.to > currentHour);
    return employee.text ? employee.text : employee.name + ',' + employee.phone;
  }
  render() {  
    let showPhone = this.getPhoneInRightTime();
    
    return (
      <div className={styles.component}>
        <div className={styles.promoDescription}>{showPhone}</div>
      </div>
    );
  }
}

export default OtherPhone;