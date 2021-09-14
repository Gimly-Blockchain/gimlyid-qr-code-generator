import { memo } from 'react';

import { GimlyIDQRCode } from './GimlyIDQRCode/index';

export { QRType, QRMode } from './types';
export default memo(GimlyIDQRCode);
