import React from 'react';
import { expect } from 'chai';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {GimlyIDQRCode} from '../src/GimlyIDQRCode';
import {QRMode, QRType} from '../src';

Enzyme.configure({ adapter: new Adapter() });

describe("<GimlyIDQRCode /> shallow rendering", () => {
  it("should have props", () => {
    const wrapper = shallow(<GimlyIDQRCode type={QRType.AUTHENTICATION} did={'did:example:123456789abcdefghi'} mode={QRMode.DID_AUTH_SIOP_V2} />);
    expect(wrapper.props().value).includes('type=auth,did=did:example:123456789abcdefghi,mode=didauth')
  });
});



