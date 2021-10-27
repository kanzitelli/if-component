import * as React from 'react';
type IfComponent = JSX.Element | React.FC<any>;
export type IfProps = {
  _: boolean;
  _then: IfComponent;
  _else?: IfComponent;
};
export const If = ({_, _then, _else}: IfProps): IfComponent | null =>
  _
    ? typeof _then === 'function'
      ? _then({})
      : _then
    : (typeof _else === 'function' ? _else({}) : _else) || null;
