import React from 'react';
import {shallow} from 'enzyme';
import OtherPhone from './OtherPhone';

describe('Component OtherPhone', () => {
  it('should render without crashing', () => {
    const component = shallow(<OtherPhone/>);
    expect(component).toBeTruthy();
  }); 
});

const trueDate = Date;
const mockDate = customDate => class extends Date {
  constructor(...args) {
    if(args.length){
      super(...args);
    } else {
      super(customDate);
    }
    return this;
  }
  static now(){
    return (new Date(customDate)).getTime();
  }
};

const checkPhoneAtTime = (time, expectedDescription) => {
  it(`should show correct at ${time}`, () => {
    global.Date = mockDate(`2019-05-14T${time}`);

    const component = shallow(<OtherPhone/>);
    const renderedTime = component.find('div div').text();
    expect(renderedTime).toEqual(expectedDescription);

    global.Date = trueDate;
  });
};

describe('Component HappyHourAd with mocked Date', () => {
  checkPhoneAtTime('08:00:00', 'Amanda,678.243.8455');
  checkPhoneAtTime('12:00:00', 'Amanda,678.243.8455');
  checkPhoneAtTime('12:00:01', 'Tobias,278.443.6443');
  checkPhoneAtTime('16:00:00', 'Tobias,278.443.6443');
  checkPhoneAtTime('16:00:01', 'Helena,167.280.3970');
  checkPhoneAtTime('22:00:00', 'Helena,167.280.3970');
  checkPhoneAtTime('07:59:59', 'Closed, we back to work at 8.00');
  checkPhoneAtTime('22:00:01', 'Closed, we back to work at 8.00');
  checkPhoneAtTime('23:00:00', 'Closed, we back to work at 8.00');
});