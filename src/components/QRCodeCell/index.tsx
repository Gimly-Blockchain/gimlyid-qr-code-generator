import React from 'react';

import { QRCellContentProps } from '../../types';

const QRCodeCell = (props: QRCellContentProps) => (
  <path d={props.d} fill={props.fill} transform={`matrix(${[1, 0, 0, 1, props.transformX, props.transformY]})`} />
);

export default QRCodeCell;
