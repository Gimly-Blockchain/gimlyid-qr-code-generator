import React from 'react';

import { QRCodeSurfaceProps } from '../../types';

const QRCodeSurface = (props: QRCodeSurfaceProps) => (
  <svg {...props} height={props.size} width={props.size}>
    {props.title ? <title>{props.title}</title> : null}
    {props.children}
  </svg>
);

export default QRCodeSurface;
