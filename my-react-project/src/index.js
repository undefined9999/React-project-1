import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // 组件
import registerServiceWorker from './registerServiceWorker'; // 提高访问速度的代码,不用关心
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import reducersOption from './reducers/index';

const reducers = combineReducers(reducersOption);
const store = createStore(reducers, {});

// JSX渲染dom
function renderPage() {
	ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
}
renderPage();

store.subscribe(renderPage);

registerServiceWorker();
