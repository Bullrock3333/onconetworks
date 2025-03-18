// src/custom.d.ts
import 'react';

declare module 'react' {
  interface CSSProperties {
    '--product-color'?: string;
  }
}