import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {GimlyIDQRCode} from '../src/GimlyIDQRCode';
import {QRMode, QRType} from '../src';

Enzyme.configure({ adapter: new Adapter() });

describe("<GimlyIDQRCode /> shallow rendering", () => {
  it("should have props", () => {
    const wrapper = shallow(<GimlyIDQRCode type={QRType.AUTHENTICATION} did={'did:eosio:example'} mode={QRMode.DID_AUTH_SIOP_V2} />);
    expect(wrapper.props().value).toContain(`"type":"auth","did":"did:eosio:example","mode":"didauth"`)
  });
});



