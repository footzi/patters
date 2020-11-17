import React from 'react';
import ReactDOM from 'react-dom';
import { FunctionAsChildren } from './Function-as-children';
import { RenderProps } from './Render-props';
import { Provider } from './Provider';

ReactDOM.render(
  <React.StrictMode>
    <FunctionAsChildren />
    <RenderProps />
    <Provider />
  </React.StrictMode>,
  document.getElementById('root')
);

