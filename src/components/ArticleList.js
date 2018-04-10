import React, {Component} from 'react';
import Article from './Article';

export default class ArticleList extends Component {
    // map - аналог foreach, при рендеринге массива обязательно устанавливаем уникальные ключи. Это нужно для связи данных с компонентами react
    state = {
        openArticleId: false,
        openCommentId: false
    };

    render(){
        const articleElements = this.props.articles.map((article) => <li key = {article.id}>
            <Article article = {article}
                     isOpen = {article.id === this.state.openArticleId}
                     isCommentOpen = {article.id === this.state.openCommentId}
                     toggleOpen = {this.toggleOpenArticle(article.id)}
                     commentToggle = {this.toggleOpenComment(article.id)}
            /></li>);
        return (
            <ul>
                {articleElements}
            </ul>
        )
    }

    toggleOpenArticle = (openArticleId) => ev => {
        this.setState({openArticleId});
    };

   toggleOpenComment = (openCommentId) => ev => {
        this.setState({openCommentId});
   }
}
