import  Image from 'next/image';
import myImg from './image_for_blog.jpg';

import styles from './about.module.css';

export default function AboutPage () {

    return (
        <article className={styles.root}>
       <Image alt='My Photo' src={myImg} width={250} height={300} loading='eager' />
       <div>
       I dived into the world of coding.
       I always thought that being a doctor was all I needed, and that the mysteries of human disease and their solutions were all I cared about. I was wrong and realized it when I first saw my code working. Since then I can not stop! Coding contains my creative and scrupulously scientific side at the same time, allowing me to combine creativity, problem solving and attention to detail.
       I am a Full-Stack Developer. I mastered Node.js, JavaScript, React, REST API, HTML, CSS/SASS, GitHub/Git, Figma, responsive design principles, SCRUM methodology, BEM. I enthusiastically improve the acquired knowledge, study new frameworks, methodologies, libraries and principles in order to use them with benefit for the company in which I will work.
       </div>
        </article>
    )
}