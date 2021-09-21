const React = require('react');
const Enzyme = require('enzyme');
const {shallow} = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');

import QRCodeCell from '../src/components/QRCodeCell';

Enzyme.configure({ adapter: new Adapter() });

describe('<QRCodeCell /> shallow rendering', () => {
  it('should render component', () => {
    const wrapper = shallow(
        <QRCodeCell
            key={`rectangle-${1}-${1}`}
            d={'a'}
            fill={'b'}
            transformX={1}
            transformY={1}
        />);

    expect(wrapper.find('path')).toHaveLength(1);
  });
});
