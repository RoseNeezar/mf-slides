import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './index.scss';

const useMount = (el: ReactDOM.Container, title: string) => {
  ReactDOM.render(
    <React.StrictMode>
      <App title={title} />
    </React.StrictMode>,
    el
  );
};

const devRoot = document.querySelector('#chat_app');

if (devRoot) {
  useMount(devRoot, 'no mf');
}

export { useMount };
