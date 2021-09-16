# Gimlyid-qr-code
A GimlyID QR code component. This library works with React and React Native (using [React Native SVG](https://github.com/react-native-svg/react-native-svg)).

### Example
 ```js
import React from 'react';
import ReactDOM from 'react-dom';
import GimlyIDQRCode, {QRType, QRMode} from 'gimlyid-qr-code';

ReactDOM.render(<GimlyIDQRCode type={QRType.AUTHENTICATION} did={'did:eosio:example'} mode={QRMode.DID_AUTH_SIOP_V2}/>);
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
