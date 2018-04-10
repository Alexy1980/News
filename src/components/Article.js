import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import toggleOpen from '../decorators/toggleOpen';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

class Article extends Component {
    // https://reactjs.org/docs/typechecking-with-proptypes.html
    // https://habrahabr.ru/post/319358/
    /*static propTypes = {
        article: PropTypes.shape({
           id: PropTypes.string.isRequired,
           title: PropTypes.string.isRequired,
           text: PropTypes.string
        }).isRequired
    };*/

    /*componentWillMount(){
        //debugger;
    }*/

    render() {
        // т.к. используем декоратор, то читаем isCommentOpen, isOpen, toggleOpen, commentToggle не из state а из props. state спрятан в декоратор
        const {article, isOpen, isCommentOpen, toggleOpen, commentToggle} = this.props;
        // по-хорошему, для комментария нужно завести отдельный компонент
        return (
            <div>
                <h3>{article.title}</h3>
                <button className="btn btn-primary" onClick={toggleOpen}>{isOpen ? 'Закрыть' : 'Открыть'}</button>
                {this.getBody()}<br/>
                {isOpen ? <button className="btn btn-info" onClick={commentToggle}>{isCommentOpen ? 'Скрыть комментарий' : 'Показать комментарий'}</button> : null}
                {isOpen ? this.getComments() : null}
            </div>
        );
    }

    /*componentDidMount(){
        //debugger;
    }*/

    // при использовании данного синтаксиса this можно не бандить
    getBody = () => {
        const {article, isOpen} = this.props;
        if(!isOpen) return null;
        return <section>{article.text}</section>
    };

    getComments = () => {
        const {article, isCommentOpen} = this.props;
        if(!isCommentOpen) return null;
        // console.log(this.props);
        if(!article.comments || !article.comments.length) return <p className = "text-muted">Нет комментариев!</p>;
        return (
            <section>
            <h4>Комментарии:</h4>
            <br/>{article.comments.map((comment) => <blockquote className = "text-muted bg-info" key = {comment.id}>{comment.text}<footer className = "text-primary">{comment.user}</footer></blockquote>)}
            </section>
        );
    };
}

// экспортить будем уже обернутый компонент. Article будет обернут во WrappedComponent
// export default toggleOpen(Article)
export default Article;
