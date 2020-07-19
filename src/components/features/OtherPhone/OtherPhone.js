import React from 'react';
import styles from './OtherPhone.scss';

class OtherPhone extends React.Component {
  
  getPhoneInRightTime(){
    const employees = [
      {name: 'Amanda', phone: '678.243.8455'},
      {name: 'Tobias', phone: '278.443.6443'},
      {name: 'Helena', phone: '167.280.3970'},
      {text: 'Closed, we back to work at 8.00'},
    ];
    const currentTime = new Date();
    if((currentTime.getHours() > 8) && (currentTime.getHours() < 12) ){
      return (employees[0].name + ',' + employees[0].phone);
    } else if((currentTime.getHours() > 12) && (currentTime.getHours() < 16)){
      return (employees[1].name + ',' + employees[1].phone);
    } else if((currentTime.getHours() > 16) && (currentTime.getHours() < 22) ){
      return (employees[2].name + ',' + employees[2].phone);
    } else {
      return (employees[3].text);
    }
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