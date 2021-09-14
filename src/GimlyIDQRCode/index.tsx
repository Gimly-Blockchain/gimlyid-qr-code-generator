import React, { FC } from 'react';
import QRCode from 'react-qr-code';
import { v4 as uuidv4 } from 'uuid';

import { QRProps } from '../types';

export const GimlyIDQRCode: FC<QRProps> = (QRProps) => {
  const {type, did, mode, redirectUrl, onGenerate, bgColor, fgColor, level, size, title} = QRProps;
  const nonce = uuidv4();
  const value = `nonce=${nonce},type=${type},did=${did},mode=${mode},redirectUrl=${redirectUrl}`;

  if (onGenerate) {
    onGenerate({
      nonce: nonce,
      type: type,
      did: did,
      mode: mode,
      redirectUrl: redirectUrl,
      qrValue: value,
    })
  }

  return (
    <QRCode
      value={value}
      bgColor={bgColor}
      fgColor={fgColor}
      level={level}
      size={size}
      title={title}
    />
  );
};
