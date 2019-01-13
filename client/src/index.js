import React from 'react';
import ReactDOM from 'react-dom';

const title = 'This is the small change';

ReactDOM.render(
  <div>{title}</div>,
  document.getElementById('app')
);

module.hot.accept();