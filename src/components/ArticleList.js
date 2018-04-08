import React from 'react';
import Article from './Article';

export default function ArticleList({articles}) {
    // map - аналог foreach, при рендеринге массива обязательно устанавливаем уникальные ключи. Это нужно для связи данных с компонентами react
    const articleElements = articles.map((article) => <li key = {article.id}><Article article = {article}/></li>);
    return (
        <ul>
            {articleElements}
        </ul>
    )
}
