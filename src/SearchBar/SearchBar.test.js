import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import SearchBar from './SearchBar';
import renderer from 'react-test-renderer';

describe('SearchBar Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SearchBar />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected', () => {
    const updateInput = jest.fn();
    const tree = renderer
      .create(<SearchBar updateInput={updateInput} searchTerm='test-term' />)
      .toJSON();


    expect(tree).toMatchSnapshot();
  })

  it('input value matches components searchTerm prop', () => {
    const updateInput = jest.fn();
    const tree = renderer
      .create(<SearchBar searchTerm='test-term' />)
      .toJSON();

    expect(tree.children[1].props.value).toEqual('test-term');
  })

  it('props searchInput function called with target value', () => {
    const updateInput = jest.fn();
    const event = { target: { value: 'the-value' }  };
    const wrapper = shallow(<SearchBar updateInput={updateInput} />);
    wrapper.find('#searchInput').simulate('change', event);

    expect(updateInput).toHaveBeenCalledWith('the-value');
  });

})

