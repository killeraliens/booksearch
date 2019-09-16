import React from 'react';
import ReactDOM from 'react-dom';
import { mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import SearchBar from './SearchBar';

describe('SearchBar Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SearchBar />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('triggers onChange event', () => {
    const wrapper = mount(<SearchBar />);
    const input = wrapper.find('input');
    input.simulate('change', { target: {value: 'changed'} });
    console.log(input.value);

  });
})

