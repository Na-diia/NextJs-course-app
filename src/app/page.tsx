import { getAllArticles } from "./(server)/api";

export default async function Home() {
  const allArticles = await getAllArticles();

  return (
    <>
    <h1>Articles : </h1>
    <ul>
    {allArticles.map((article) => (
      <li key={article.name}>{article.header}</li>
    ))}
    </ul>
    </>
  );
}
