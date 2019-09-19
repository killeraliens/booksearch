import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import ResultShow from './ResultShow';

describe('ResultShow', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ResultShow />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('has title, author, and description properties', () => {
    // const bookObj = { volumeInfo: {title: 'some title', authors: ['some author'], description: 'longer description'}};
    // const wrapper = shallow(<ResultShow book={bookObj}/>);
    // console.log(wrapper);
    // expect(wrapper.volumeInfo).toBeDefined();

  })
})
