/* eslint-disable @typescript-eslint/no-explicit-any */
import 'vite/client';
declare module '*.svg?react' {
  const content: any;
  export const ReactComponent: any;
  export default content;
}