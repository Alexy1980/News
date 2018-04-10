import React, {Component}from 'react';
// import PropTypes from 'prop-types';

class ArticleCharts extends Component {
    /*static propTypes = {

    };*/
    // методы жизненного цикла нужны для работы с реальным DOMом, работают только с классами
    componentDidMount(){
        // jquery with this.refs.chart
    }

    componentWillReceiveProps(nextProps){
        // update chart for new articles
    }

    render() {
        return (
            // ref позволяет работать с реальным DOMом
            <div ref = 'chart' />
        )
    }

    componentWillUnmount(){
        // do some cleanup
    }
}

export default ArticleCharts;
