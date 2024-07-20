import Image from "next/image";
import ErrorImg from './error-img.png';

export default function ErrorPage () {
    return <>
    <Image alt='Cute dog' src={ErrorImg}  />
    Sorry, we did not find anything.</>
};