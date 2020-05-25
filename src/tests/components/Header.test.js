//react-test-render
// Shallow Render: render superficialy without render children
// Snapshot: a image of a component redered
// Jest + u: update snapshot
// enzy-adapter-react-16
import React from 'react';
import Header from '../../components/Header';
import {shallow} from 'enzyme';
// import ReactShallowRenderer from 'react-test-renderer/shallow';

// test('should render Header correctly', () => {
//     const renderer = new ReactShallowRenderer();
//     renderer.render(<Header/>);
//     expect(renderer.getRenderOutput()).toMatchSnapshot();
//     console.log(renderer.getRenderOutput());
// });
test('should render Header correctly', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
    // expect(wrapper.find('h1').text()).toBe(1);
});
