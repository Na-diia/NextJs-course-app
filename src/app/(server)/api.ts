import articles from './db.json';
import { delayed } from './delay';

export function getAllArticles () {
    return delayed(articles, {timeout: 0, shouldFail: false});
};

export function getArticlesByName (articleName: string) {
   const article = articles.find((x) => x.name === articleName);

   if(!article) {
    throw new Error('This article does not exist.');
   }
   return delayed(article);
};