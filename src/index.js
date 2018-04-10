import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
// import ArticleList from './components/ArticleList';
import {articles} from './fixtures';
import registerServiceWorker from './registerServiceWorker';

// в {} передаем javascript код
ReactDOM.render(<App articles = {articles}/>, document.getElementById('root'));
registerServiceWorker();
