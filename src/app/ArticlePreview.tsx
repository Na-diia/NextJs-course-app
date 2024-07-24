'use client';
import { ROUTING } from "./routing";
import { ReactNode, useState } from "react";
import AppLink from "./shared/components/app-link";
import { articleStorage } from "./ArticleStorage";

type ArticlePreviewProps = {
    name: string,
    text: string,
};

export const getLikeKey = (articleName: string) => `nadiiaBlog_${articleName}`;

export function ArticlePreview ({name, text}: ArticlePreviewProps): ReactNode {
    const [liked, setLiked] = useState(articleStorage.liked(name));

    const like = () => {
        articleStorage.like(name);
        setLiked(true);
    };
    console.log('LIKE_VALUE: ', liked);

    return  (
      <>
    <AppLink href={ROUTING.article(name)} >{text}</AppLink>
    <button type="button" onClick={like}>{liked ? '👍' : 'like'} </button>
    </>
    )
};


