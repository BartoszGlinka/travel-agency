import React from 'react';
import {shallow} from 'enzyme';
import OrderOption from './OrderOption';
import DatePicker from 'react-datepicker';

describe('Component OrderOption', () => {
  it('should render without crashing', () => {
    const component = shallow(<OrderOption name='Trip Option' type='dropdown' />);
    expect(component).toBeTruthy();
  });
  
  it('should return empty object if called without required props', () => {
    const component = shallow(<OrderOption />);
    expect(component).toEqual({});
  });
  
  it('should render with title equal to props `name`', () => {

    const expectedName = 'Lorem ipsum';
    const component = shallow(<OrderOption name={expectedName} type='dropdown'/>); 
    const title = component.find('h3');
    
    expect(title.text()).toEqual(expectedName);
  });
});

const optionTypes = {
  dropdown: 'OrderOptionDropdown',
  icons: 'OrderOptionIcons',
  checkboxes: 'OrderOptionCheckboxes',
  number: 'OrderOptionNumber',
  text: 'OrderOptionTextArea',
  date: 'OrderOptionDate',
};
const mockProps = {
  id: 'abc',
  name: 'Lorem',
  values: [
    {id: 'aaa', icon: 'h-square', name: 'Lorem A', price: 0},
    {id: 'xyz', icon: 'h-square', name: 'Lorem X', price: 100},
  ],
  required: false,
  currentValue: 'aaa',
  price: '50%',
  limits: {
    min: 0,
    max: 6,
  },
};

const mockPropsForType = {
  dropdown: {},
  icons: {},
  checkboxes: {currentValue: [mockProps.currentValue]},
  number: {currentValue: 1},
  text: {},
  date: {},
};

const testValue = mockProps.values[1].id;
const testValue2 = mockProps.values[0].id;
const testValueNumber = 3;

for(let type in optionTypes){
  describe(`Component OrderOption with type=${type}`, () => {
    /* test setup */
    let component;
    let subcomponent;
    let renderedSubcomponent;
    let mockSetOrderOption; /* 1 */

    beforeEach(() => {
      mockSetOrderOption = jest.fn();
      component = shallow(
        <OrderOption
          type={type}
          setOrderOption={mockSetOrderOption} 
          {...mockProps}
          {...mockPropsForType[type]}
        />
      );
      subcomponent = component.find(optionTypes[type]);
      renderedSubcomponent = subcomponent.dive();
    });
    
    /* common tests */
    it(`renders ${optionTypes[type]}`, () => {
      expect(subcomponent).toBeTruthy();
      expect(subcomponent.length).toBe(1);
    });

    /* type-specific tests */
    switch (type) {
      case 'dropdown': {
        /* tests for dropdown */
        it('contains select and options', () => {
          const select = renderedSubcomponent.find('select');
          expect(select.length).toBe(1);

          const emptyOption = select.find('option[value=""]').length;
          expect(emptyOption).toBe(1);

          const options = select.find('option').not('[value=""]');
          expect(options.length).toBe(mockProps.values.length);
          expect(options.at(0).prop('value')).toBe(mockProps.values[0].id);
          expect(options.at(1).prop('value')).toBe(mockProps.values[1].id);
        });
        
        it('should run setOrderOption function on change', () => {
          renderedSubcomponent.find('select').simulate('change', {currentTarget: {value: testValue}});
          expect(mockSetOrderOption).toBeCalledTimes(1);
          expect(mockSetOrderOption).toBeCalledWith({ [mockProps.id]: testValue });
        });
        break;
      }
      case 'icons': {
        it('contains 1st div and 2nd div', () => {
          const div = renderedSubcomponent.find('.icon');
          expect(div.length).toBe(4);
          expect(div.at(0).type()).toBe('div');
          expect(div.at(1).type()).toBe('div');
        });
        it('should run setOrderOption function on click', () => {
          renderedSubcomponent.find('div div').at(1).simulate('click');
          expect(mockSetOrderOption).toBeCalledTimes(1);
          expect(mockSetOrderOption).toBeCalledWith({[mockProps.id]: testValue2});
        });
        break;
      }
      case 'checkboxes': {
        it('contains div, label and input', () => {
          const checkboxes = renderedSubcomponent.find('.checkboxes');
          const label = renderedSubcomponent.find('label');
          const input = renderedSubcomponent.find('input');
          expect(checkboxes.length).toBe(1);
          expect(checkboxes.at(0).type()).toBe('div');
          expect(label.at(0).type()).toBe('label');
          expect(input.at(0).type()).toBe('input');
        });
        it('should run setOrderOption function on change', () => {
          renderedSubcomponent.find('input').at(0).simulate('change', {currentTarget: {checked: true}});
          expect(mockSetOrderOption).toBeCalledTimes(1);
          expect(mockSetOrderOption).toBeCalledWith({[mockProps.id]: [mockProps.currentValue, testValue2]});
        });
        break;
      }
      case 'number': { 
        it('contains div and input', () => {
          const number = renderedSubcomponent.find('.number');
          const input = renderedSubcomponent.find('input');

          expect(number.length).toBe(1);
          expect(number.at(0).type()).toBe('div');
          expect(input.at(0).type()).toBe('input');
        });
        it('should run setOrderOption function on change', () => {
          renderedSubcomponent.find('input').simulate('change', {currentTarget: {value: testValueNumber}});
          expect(mockSetOrderOption).toBeCalledTimes(1);
          expect(mockSetOrderOption).toBeCalledWith({ [mockProps.id]: testValueNumber});
        });
        break;
      }
      case 'text': {
        it('contains div and input', () => {
          const div = renderedSubcomponent.find('.input');
          const input = renderedSubcomponent.find('input');

          expect(div.length).toBe(1);
          expect(div.at(0).type()).toBe('div');
          expect(input.at(0).type()).toBe('input');
        });
        it('should run setOrderOption function on change', () => {
          renderedSubcomponent.find('input').simulate('change', {currentTarget: {value: testValue}});
          expect(mockSetOrderOption).toBeCalledTimes(1);
          expect(mockSetOrderOption).toBeCalledWith({[mockProps.id]: testValue});
        });
        break;
      }
      case 'date': {
        it('contains DatePicker', () => {
          const datepicker = renderedSubcomponent.find(DatePicker);

          expect(DatePicker.length).toBe(1);
          expect(datepicker.at(0).type()).toBe(DatePicker);
        });
        it('should run setOrderOption function on change', () => {
          renderedSubcomponent.find(DatePicker).simulate('change', testValue);
          expect(mockSetOrderOption).toBeCalledTimes(1);
          expect(mockSetOrderOption).toBeCalledWith({[mockProps.id]: testValue});
        });
        break;
      }
    }
  });
}