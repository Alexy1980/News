import React, {Component} from 'react';

export default Component => class Accordion extends React.Component {
    // map - аналог foreach, при рендеринге массива обязательно устанавливаем уникальные ключи. Это нужно для связи данных с компонентами react
    state = {
        openArticleId: false,
        openCommentId: false
    };


}
