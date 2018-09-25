import React from 'react';
import ReactDOM from 'react-dom';
import NoRoutes from './NoRoutes';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NoRoutes />, div);
  ReactDOM.unmountComponentAtNode(div);
});
