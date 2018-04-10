import React, { Component } from 'react';
// import logo from '../logo.svg';
import ArticleList from './ArticleList';
import ArticlesChart from './ArticleCharts';
import '../App.css';

class App extends Component {
  render() {
    return (
      <div>
          <ArticleList articles = {this.props.articles}/>
          <ArticlesChart articles = {this.props.articles}/>
      </div>
    );
  }
}

export default App;
