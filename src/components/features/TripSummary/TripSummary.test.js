import React from 'react';
import {shallow} from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {
  
  it('should render correct link', () => { 
    const component = shallow(<TripSummary tags={[]} id={`{expectedId}`} image='test' name='test' cost='324' days={1} />);
    const link = component.find('.link');
    
    expect(component).toBeTruthy();
    expect(link.prop('to')).toEqual(`/trip/{expectedId}`);
  });
  
  it('should render correct img', () => { 
    const expectedSrc = 'image.jpg';
    const expectedAlt = 'Lorem ipsum';
    
    const component = shallow(<TripSummary tags={[]} id='test' image={expectedSrc} name={expectedAlt} cost='324' days={1} />);
    
    const image = component.find('img');
    
    expect(image.prop('src')).toEqual(expectedSrc);
    expect(image.prop('alt')).toEqual(expectedAlt);
  });
  
  it('should render with props name, cost, days', () => { 
    const expectedName = 'Marvelous travel in fantastic Timor-Leste';
    const expectedCost = '$139,398.25';
    const expectedDays = 14;
    
    const component = shallow(<TripSummary tags={[]} image='test' name={expectedName} cost={expectedCost} days={expectedDays} />);
    
    const title = component.find('.title');
    const details = component.find('.details span');
    
    expect(title.text()).toEqual(expectedName);
    expect((details).at(0).text()).toEqual(expectedDays + ' ' + 'days');
    expect((details).at(1).text()).toEqual('from' + ' ' + expectedCost);
  });
  
  it('should render correct tags', () => { 
    const component = shallow(<TripSummary tags={['a', 'b', 'c']} image='test' name='test' cost='324' days={1} />);
    
    const tags = component.find('.tags span');
    
    expect((tags).at(0).text()).toEqual(`a`);
    expect((tags).at(1).text()).toEqual(`b`);
    expect((tags).at(2).text()).toEqual(`c`);
  });
  
  it('should throw error without required tags', () => {
    const component = shallow(<TripSummary tags={['a', 'b', 'c']} />);
      
    expect(component).toBeTruthy();
  });
});


