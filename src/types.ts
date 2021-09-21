export enum QRType {
  AUTHENTICATION = 'auth',
}

export enum QRMode {
  DID_AUTH_SIOP_V2 = 'didauth',
}

export interface QRContent {
  state: string;
  type: QRType;
  did: string;
  mode: QRMode;
  redirectUrl: string;
  qrValue: string;
}

export interface QRProps {
  type: QRType;
  did: string;
  mode: QRMode;
  redirectUrl: string;
  onGenerate?: (content: QRContent) => void;
  bgColor?: string;
  fgColor?: string;
  size?: number;
  title?: string;
}

export interface QRCellContentProps {
  d: string;
  fill: string;
  transformX: number;
  transformY: number;
}

export interface QRCodeSurfaceProps {
  children: [];
  size: number;
  title?: string;
}
