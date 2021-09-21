const React = require('react');
const Enzyme = require('enzyme');
const {shallow} = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');

import QRCodeSurface from '../src/components/QRCodeSurface';

Enzyme.configure({ adapter: new Adapter() });

describe('<QRCodeSurface /> shallow rendering', () => {
  it('should render component', () => {
    const wrapper = shallow(
        <QRCodeSurface size={128}>
          {}
        </QRCodeSurface>);

    expect(wrapper.find('svg')).toHaveLength(1);
  });

  it('should set tittle when provided', () => {
    const title = 'title';
    const wrapper = shallow(
        <QRCodeSurface title={title} size={128}>
          {}
        </QRCodeSurface>);

    expect(wrapper.find('svg').props().title).toEqual(title);
  });
});

