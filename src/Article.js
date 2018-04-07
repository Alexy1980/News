import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

export default class Article extends Component {
    constructor(props){
        super(props);
        // state - то, что можно изменять
        this.state = {
            isOpen: false,
            isCommentOpen: false
        }
    }
    render() {
        const {article} = this.props;
        const {isOpen} = this.state;
        const {isCommentOpen} = this.state;
        return (
            <div>
                <h3>{article.title}</h3>
                <button className="btn btn-primary" onClick={this.toggleOpen}>{isOpen ? 'Закрыть' : 'Открыть'}</button>
                {this.getBody()}<br/>
                {isOpen ? <button className="btn btn-info" onClick={this.commentToggle}>{isCommentOpen ? 'Скрыть комментарий' : 'Показать комментарий'}</button> : null}
                {isOpen ? this.getComments() : null}
            </div>
        );
    }
    // при использовании данного синтаксиса this можно не бандить
    getBody = () => {
        if(!this.state.isOpen) return null;
        const {article} = this.props;
        return <section>{article.text}</section>
    };

    getComments = () => {
        if(!this.state.isCommentOpen) return null;
        // console.log(this.props);
        const {article} = this.props;
        return (
            <section>
            <h4>Комментарии:</h4>
            <br/>{article.comments.map((comment) => <blockquote className = "text-muted bg-info" key = {comment.id}>{comment.text}<footer className = "text-primary">{comment.user}</footer></blockquote>)}
            </section>
        );
    };

    toggleOpen = () => {
        // так делать нельзя!!! Только через setState!
        // this.state.isOpen = true;
        // меняем state. setState - команда перестроения вирт. DOM. Эта операциа асинхронная
        this.setState({
            isOpen: !this.state.isOpen
        });
    };

    commentToggle = () => {
        this.setState({
            isCommentOpen: !this.state.isCommentOpen
        });
    }
}
