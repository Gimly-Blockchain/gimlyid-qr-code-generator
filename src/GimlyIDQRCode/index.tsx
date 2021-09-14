import React, { FC } from 'react';
import QRCode from 'react-qr-code';
import { v4 as uuidv4 } from 'uuid';

import { QRProps } from '../types';

export const GimlyIDQRCode: FC<QRProps> = (QRProps) => {
  const nonce = uuidv4();
  const value = `nonce=${nonce},type=${QRProps.type},did=${QRProps.did},mode=${QRProps.mode},redirectUrl=${QRProps.redirectUrl}`;

  if (QRProps.onGenerate) {
    QRProps.onGenerate({
      nonce: nonce,
      type: QRProps.type,
      did: QRProps.did,
      mode: QRProps.mode,
      redirectUrl: QRProps.redirectUrl,
      qrValue: value,
    })
  }

  return (
    <QRCode
      value={value}
      bgColor={QRProps.bgColor}
      fgColor={QRProps.fgColor}
      level={QRProps.level}
      size={QRProps.size}
      title={QRProps.title}
    />
  );
};
