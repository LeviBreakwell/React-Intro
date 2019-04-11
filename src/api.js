import { useState, useEffect } from "react";

const API_KEY = "6c9af61497024a538b2bc9feb5ece8fd";

export function useNewsArticles() {
  const [loading, setLoading] = useState(true);
  const [headlines, setHeadlines] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getHeadlines()
      .then(headlines => {
        setHeadlines(headlines);
        setLoading(false);
      })
      .catch(e => {
        setError(e);
        setLoading(false);
      });
  }, []);

  return {
    loading,
    headlines,
    error
  };
}
function getHeadlines() {
  const url = `https://newsapi.org/v2/top-headlines?country=au&apiKey=${API_KEY}`;
  fetch(url)
    .then(res => res.json())
    .then(res => console.log(res))
    .then(articles =>
      articles.map(article => ({
        title: article.title,
        url: article.url
      }))
    );
}
