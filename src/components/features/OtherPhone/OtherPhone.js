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
   
    function addZero(i) {
      if (i < 10) {
        i = '0' + i;
      }
      return i;
    }
    
    const currentTime = new Date();

    /*settings for actualyTime*/
    const actualyHour = addZero(currentTime.getHours());
    const actualyMinute = addZero(currentTime.getMinutes());
    const actualySecond = addZero(currentTime.getSeconds());
    const actualyTime = actualyHour + ':' + actualyMinute + ':' + actualySecond; 
  
    /*settings for employees time work */
    const employeTime = [
      (currentTime.setHours(8,0,0)),
      (currentTime.setHours(12,0,0)),
      (currentTime.setHours(12,0,1)),
      (currentTime.setHours(16,0,0)),
      (currentTime.setHours(16,0,1)),
      (currentTime.setHours(22,0,0)),
      (currentTime.setHours(0,0,0)),
      (currentTime.setHours(7,59,59)),
      (currentTime.setHours(22,0,1)),
      (currentTime.setHours(23,59,59)),
    ];
    
    const employeTime2 = [];
    for (let employe of employeTime) {
      let hours = `0${new Date(employe).getHours()}`.slice(-2);
      let minutes = `0${new Date(employe).getMinutes()}`.slice(-2);
      let seconds = `0${new Date(employe).getSeconds()}`.slice(-2);
      let time = `${hours}:${minutes}:${seconds}`;
      employeTime2.push(time);
    }
    
    if(actualyTime >= employeTime2[6] && actualyTime <= employeTime2[7]){
      return (employees[3].text);
    }
    if(actualyTime >= employeTime2[4] && actualyTime <= employeTime2[5]){
      return (employees[2].name + ',' + employees[2].phone);
    }
    if(actualyTime >= employeTime2[2] && actualyTime <= employeTime2[3]){
      return (employees[1].name + ',' + employees[1].phone);
    }
    if(actualyTime >= employeTime2[0] && actualyTime <= employeTime2[1]){
      return (employees[0].name + ',' + employees[0].phone);
    }
    if(actualyTime >= employeTime2[8] && actualyTime <= employeTime2[9]){
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