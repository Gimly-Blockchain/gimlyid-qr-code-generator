import React, { FC } from 'react';
import shortUUID from 'short-uuid';

import QRCodeCell from '../components/QRCodeCell';
import QRCodeSurface from '../components/QRCodeSurface';
import { QRProps } from '../types';

const ErrorCorrectLevel = require('qr.js/lib/ErrorCorrectLevel');
const QRCodeImpl = require('qr.js/lib/QRCode');

export const GimlyIDQRCode: FC<QRProps> = (props: QRProps) => {
  const {
    type,
    did,
    mode,
    redirectUrl,
    onGenerate,
    bgColor = '#FFFFFF',
    fgColor = '#000000',
    size = 128,
    title,
  } = props;
  const state = shortUUID.generate();
  const value = `"state":"${state}","type":"${type}","did":"${did}","mode":"${mode}","redirectUrl":"${redirectUrl}"`;

  const qr = new QRCodeImpl(-1, ErrorCorrectLevel['H']);
  qr.addData(value);
  qr.make();
  const cells = qr.modules;
  const tileSize = size / cells.length;

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

  return (
    <QRCodeSurface title={title} size={size}>
      {cells.map((row: [], rowIndex: number) =>
        row.map((cell: number, cellIndex: number) => {
          const fill = cell ? fgColor : bgColor;
          const transformX = Math.round(cellIndex * tileSize);
          const transformY = Math.round(rowIndex * tileSize);
          const qrItemWidth = Math.round((cellIndex + 1) * tileSize) - transformX;
          const qrItemHeight = Math.round((rowIndex + 1) * tileSize) - transformY;
          const d = `M 0 0 L ${qrItemWidth} 0 L ${qrItemWidth} ${qrItemHeight} L 0 ${qrItemHeight} Z`;
          return (
            <QRCodeCell
              key={`rectangle-${rowIndex}-${cellIndex}`}
              d={d}
              fill={fill}
              transformX={transformX}
              transformY={transformY}
            />
          );
        })
      )}
    </QRCodeSurface>
  );
};
