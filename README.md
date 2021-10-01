<h1 style="text-align: center; vertical-align: middle">
  <div style="text-align: center;"><a href="https://www.gimly.io/"><img src="https://images.squarespace-cdn.com/content/v1/5eb2942c4ac101328fe42dc2/1588768338657-JXDRVS09OBP3CUROD2ML/Gimly+Logo_Wit_Transparant_geen+text.png?format=1500w" alt="Gimly" height="80" style="vertical-align: middle" > &nbsp;Gimly</a> &nbsp;</div>
</h1>

# Gimlyid-qr-code
A GimlyID QR code component. This library works with React and React Native (using [React Native SVG](https://github.com/react-native-svg/react-native-svg)).

### Example
 ```js
import React from 'react';
import ReactDOM from 'react-dom';
import GimlyIDQRCode, {QRType, QRMode} from 'gimlyid-qr-code';

ReactDOM.render(<GimlyIDQRCode 
                  type={QRType.AUTHENTICATION} 
                  did={'did:ethr:0xcBe71d18b5F1259faA9fEE8f9a5FAbe2372BE8c9'} 
                  mode={QRMode.DID_AUTH_SIOP_V2}
                  redirectUrl={'https://example.com'}
                  onGenerate={content => console.log(JSON.stringify(content))}
                />);

/*
Example output of onGenerate:
{"state":"vqKLNzmYYPDmt8YWs9ftYE","type":"auth","did":"did:ethr:0xcBe71d18b5F1259faA9fEE8f9a5FAbe2372BE8c9","mode":"didauth","redirectUrl":"https://example.com","qrValue":"{\"state\":\"vqKLNzmYYPDmt8YWs9ftYE\",\"type\":\"auth\",\"did\":\"did:ethr:0xcBe71d18b5F1259faA9fEE8f9a5FAbe2372BE8c9\",\"mode\":\"didauth\",\"redirectUrl\":\"https://example.com\"}"}
*/
 ```

### API
| prop                    | type                         | default value | description                                                                                                                                                                                              |
| ----------------------- | ---------------------------- | ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                  | `QRType`                     |               | This is the type stored within the QR code. Options: [AUTHENTICATION].                                                                                                                                   |
| `did`                   | `string`                     |               | This is the DID that the relying party (the party that integrated the authentication support on their website) will use to sign/encrypt data towards the client. This will be stored within the QR code. |
| `mode`                  | `QRMode`                     |               | This is the mode stored within the QR code. Options: [DID_AUTH_SIOP_V2].                                                                                                                                 |
| `redirectUrl`           | `string`                     |               | This is a redirect url that will be stored within the QR code.                                                                                                                                           |
| `bgColor (optional)`    | `string`                     | '#FFFFFF'     | This will set the background color of the QR code.                                                                                                                                                       |
| `fgColor (optional)`    | `string`                     | '#000000'     | This will set the foreground color of the QR code.                                                                                                                                                       |
| `level (optional)`      | `string` (`'L' 'M' 'Q' 'H'`) | 'L'           | This will set the level of the QR code.                                                                                                                                                                  |
| `size (optional)`       | `number`                     | 256           | This will set the size of the QR code.                                                                                                                                                                   |
| `title (optional)`      | `string`                     |               | This will set the title of the QR code.                                                                                                                                                                  |
| `onGenerate (optional)` | `Function`                   |               | onGenerate will be called when the QR code is generated and will have access to the QR content.                                                                                                          |

### DID Auth SIOP
The purpose of this QR code is to initiate the authentication between two parties by redirecting to an endpoint that returns an Authentication Request using using the [`DID Auth SIOP library`](https://github.com/Sphereon-Opensource/did-auth-siop).
The DID Auth SIOP library is an authentication library for having clients/people conforming to the Self Issued OpenID Provider v2 (SIOPv2) and OpenID Connect for Verifiable Presentations (OIDC4VP) as specified in the OpenID Connect working group.

### Installation
```shell
yarn add gimlyid-qr-code
```

When using this library with React Native, you will also need to have [`react-native-svg`](https://github.com/react-native-svg/react-native-svg#installation) installed.

```
yarn add react-native-svg
cd ios && pod install
```

### Build
```shell
yarn build
```

### Test
The test command runs:
* `eslint`
* `prettier`
* `jest`
* `coverage`

You can also run only a single section of these tests, using for example `yarn test:unit`.
```shell
yarn test
```

### Utility scripts
There are other utility scripts that help with development.

* `yarn fix` - runs `eslint --fix` as well as `prettier` to fix code style.
