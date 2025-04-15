import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const DettaglioArticolo: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Ottieni l'id dal parametro dell'URL
  const [article, setArticle] = useState<any>(null);

  useEffect(() => {
    if (id) {
      fetch(`https://api.spaceflightnewsapi.net/v4/articles/${id}`)
        .then(response => response.json())
        .then(data => setArticle(data))
        .catch(error => console.error('Errore nel recupero dei dati:', error));
    }
  }, [id]);

  if (!article) {
    return <div>Caricamento...</div>;
  }

  return (
    <div>
      <h1>{article.title}</h1>
      <p>{article.summary}</p>
      <p>Pubblicato il: {article.published_at}</p>
    </div>
  );
};

export default DettaglioArticolo;

