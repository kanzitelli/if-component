import * as React from 'react';
export type IfProps = {
  _: boolean;
  _then: JSX.Element | React.FC<any>;
  _else?: JSX.Element | React.FC<any>;
};
export const If = ({_, _then, _else}: IfProps) => (_ ? (typeof _then === 'function' ? _then({}) : _then) : (typeof _else === 'function' ? _else({}) : _else) || null);
