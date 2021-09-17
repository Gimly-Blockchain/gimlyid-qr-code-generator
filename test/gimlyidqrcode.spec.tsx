import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {GimlyIDQRCode} from '../src/GimlyIDQRCode';
import {QRMode, QRType, QRContent} from '../src';

Enzyme.configure({ adapter: new Adapter() });

describe("<GimlyIDQRCode /> shallow rendering", () => {
  const did = 'did:eosio:example';
  let qrContent: QRContent;

  it("should have props", () => {
    const wrapper = shallow(<GimlyIDQRCode type={QRType.AUTHENTICATION} did={did} mode={QRMode.DID_AUTH_SIOP_V2} />);
    expect(wrapper.props().value).toContain(`"type":"auth","did":"${did}","mode":"didauth"`)
  });

  it("should present qr content in onGenerate", () => {
    shallow(<GimlyIDQRCode type={QRType.AUTHENTICATION} did={did} mode={QRMode.DID_AUTH_SIOP_V2} onGenerate={content => testOnGenerate(content)}/>);
    expect(qrContent.did).toEqual(did);
  });

  const testOnGenerate = (content: QRContent) => {
    qrContent = content;
  }
});



