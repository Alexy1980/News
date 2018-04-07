import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import ArticleList from './ArticleList';
import {articles} from './fixtures';
import registerServiceWorker from './registerServiceWorker';

// в {} передаем javascript код
ReactDOM.render(<ArticleList articles = {articles} />, document.getElementById('root'));
registerServiceWorker();
