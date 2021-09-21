const React = require('react');
const Enzyme = require('enzyme');
const {shallow} = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');

import {GimlyIDQRCode} from '../src/GimlyIDQRCode';
import {QRMode, QRType, QRContent} from '../src';

Enzyme.configure({ adapter: new Adapter() });

describe('<GimlyIDQRCode /> shallow rendering', () => {
  const did = 'did:eosio:example';
  let qrContent: QRContent;
  const testOnGenerate = (content: QRContent) => {
    qrContent = content;
  };

  it('should render component', () => {
    const wrapper = shallow(
        <GimlyIDQRCode
            type={QRType.AUTHENTICATION}
            did={did}
            mode={QRMode.DID_AUTH_SIOP_V2}
            redirectUrl={'https://example.com'}
        />);

    expect(wrapper).toHaveLength(1);
  });

  it('should present qr content in onGenerate', () => {
    shallow(
        <GimlyIDQRCode
          type={QRType.AUTHENTICATION}
          did={did}
          mode={QRMode.DID_AUTH_SIOP_V2}
          redirectUrl={'https://example.com'}
          onGenerate={content => testOnGenerate(content)}
        />);

    expect(qrContent.did).toEqual(did);
  });
});
