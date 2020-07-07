import React from 'react';
import {shallow} from 'enzyme';
import {Link} from 'react-router-dom';

describe('Component TripSummary', () => {
  
  it('should render correct link', () => { 
    
    const expectedId = 'abc'; 
    const component = shallow(<Link to={`/trip/${expectedId}`} />);
    
    expect(component).toBeTruthy();
  });
  
  it('should render correct img', () => {
    const expectedSrc = 'image.jpg';
    const expectedAlt = 'Lorem ipsum';
    const component = shallow(<img src={expectedSrc} alt={expectedAlt} />);
    expect(component).toBeTruthy();   
  });
  
  it('should render correct name, cost, days ', () => {
    const expectedName = 'Pleasant travel in cool Turkey';
    const expectedCost = '$51,380.61';
    const expectedDays = '3';
    const component = shallow(<Link to='abc' name={expectedName} cost={expectedCost} days={expectedDays} />);
    
    expect(component).toBeTruthy();
  });

  it('should throw error without required props', () => {
    expect(() => shallow(<Link />)).toThrow();
  });
  
});