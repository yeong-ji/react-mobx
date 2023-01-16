import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'mobx-react'; // MobX 에서 사용하는 Provider
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import IndexStore from './stores/index';

const rootStore = new IndexStore(); // *** root 스토어 생성

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider {...rootStore}>
      {/* *** ...root 으로 스토어 모두 자동으로 설정 */}
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
