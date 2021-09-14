# Gimlyid-qr-code
A GimlyID QR code component. This library works with React and React Native (using [React Native SVG](https://github.com/react-native-svg/react-native-svg)).

### Example
 ```js
import React from 'react';
import ReactDOM from 'react-dom';
import GimlyIDQRCode, {QRType, QRMode} from 'gimlyid-qr-code';

ReactDOM.render(<GimlyIDQRCode type={QRType.AUTHENTICATION} did={'did:example:123456789abcdefghi'} mode={QRMode.DID_AUTH_SIOP_V2}/>);
 ```

### API
| prop                 | type                         | default value |
| -------------------- | ---------------------------- | ------------- |
| `type`               | `QRType`                     |               |
| `did`                | `string`                     |               |
| `mode`               | `QRMode`                     |               |
| `bgColor (optional)` | `string`                     | '#FFFFFF'     |
| `fgColor (optional)` | `string`                     | '#000000'     |
| `level (optional)`   | `string` (`'L' 'M' 'Q' 'H'`) | 'L'           |
| `size (optional)`    | `number`                     | 256           |
| `title (optional)`   | `string`                     |               |

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
