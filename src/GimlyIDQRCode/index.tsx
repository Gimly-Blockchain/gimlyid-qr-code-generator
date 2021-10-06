import React, { FC } from 'react';
import QRCode from 'react-qr-code';
import shortUUID from 'short-uuid';

import { QRProps } from '../types';

export const GimlyIDQRCode: FC<QRProps> = (props: QRProps) => {
  const { type, did, mode, redirectUrl, onGenerate, bgColor, fgColor, level, size, title } = props;
  const state = shortUUID.generate();
  const value = `{"state":"${state}","type":"${type}","did":"${did}","mode":"${mode}","redirectUrl":"${redirectUrl}"}`;

  if (onGenerate) {
    onGenerate({
      state,
      type,
      did,
      mode,
      redirectUrl,
      qrValue: value,
    });
  }

  return <QRCode value={value} bgColor={bgColor} fgColor={fgColor} level={level} size={size} title={title} />;
};
