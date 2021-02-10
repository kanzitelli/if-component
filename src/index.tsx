import React from 'react';
type IfProps = {
  _: boolean;
  _then: JSX.Element;
  _else?: JSX.Element;
}
export const If = ({_,_then,_else}: IfProps) => (_ ? _then : _else || null);