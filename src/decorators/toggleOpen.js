import React, {Component as ReactComponent}from 'react';

export default (OriginalComponent) => class WrappedComponent extends ReactComponent {
    state = {
        isOpen: false,
        isCommentOpen: false
    };

    render() {
        // ... спрэд-оператор
        return <OriginalComponent {...this.props} isOpen = {this.state.isOpen} isCommentOpen = {this.state.isCommentOpen} toggleOpen = {this.toggleOpen} commentToggle = {this.commentToggle}/>
    }
    toggleOpen = (ev) => {
        ev && ev.preventDefault && ev.preventDefault();
        // так делать нельзя!!! Только через setState!
        // this.state.isOpen = true;
        // меняем state. setState - команда перестроения вирт. DOM. Эта операциа асинхронная
        this.setState({
            isOpen: !this.state.isOpen
        });
    };

    commentToggle = (ev) => {
        ev && ev.preventDefault && ev.preventDefault();
        this.setState({
            isCommentOpen: !this.state.isCommentOpen
        });
    }
}
