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
      .create(<SearchBar updateInput={updateInput} searchTerm='test-term'/>)
      .toJSON();
    // console.log(tree)
    expect(tree).toMatchSnapshot();
  })

  // it('contains necessary props', () => {
  //   const updateInput = jest.fn();
  //   const wrapper = mount(<SearchBar updateInput={updateInput} searchTerm='killeraliens'/>);
  //   console.log(wrapper.instance().props.searchTerm);
  //   const instSearchTerm = wrapper.instance().props.searchTerm;
  //   expect(wrapper).toMatchSnapshot()
  // })

  it('input value matches components searchTerm prop', () => {
    const tree = renderer
      .create(<SearchBar searchTerm='test-term' />)
      .toJSON();

    const inputValue = tree.children[1].props.value;
    expect(inputValue).toEqual('test-term');
  })

  it('input change calls updateInput function with target value', () => {
    const updateInput = jest.fn();
    const event = { target: { value: 'the-value' }  };
    const wrapper = shallow(<SearchBar updateInput={updateInput} />);
    wrapper.find('#searchInput').simulate('change', event);

    expect(updateInput).toHaveBeenCalledWith('the-value');
  });

})

