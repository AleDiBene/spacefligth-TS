import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

interface Article {
  id: number;
  title: string;
  summary: string;
  image_url: string;
  published_at: string;
  updated_at: string;
  url: string;
}

const ListaArticoli = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    fetch('https://api.spaceflightnewsapi.net/v4/articles')
      .then(response => response.json())
      .then(data => {
        console.log(data.results);
        setArticles(data.results);
      })
      .catch(error => {
        console.error('Errore nella fetch:', error);
      });
  }, []);

  return (
    <Container className="mt-4">
      <Row>
        {articles.map(article => (
          <Col key={article.id} md={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src={article.image_url} alt={article.title} />
              <Card.Body>
                <Card.Title>{article.title}</Card.Title>
                <Card.Text>
                  {article.summary.length > 100
                    ? article.summary.slice(0, 100) + '...'
                    : article.summary}
                </Card.Text>
                <Card.Text>Pubblicato il: {new Date(article.published_at).toLocaleDateString()}</Card.Text>
                <Card.Text>Aggiornato il: {new Date(article.updated_at).toLocaleDateString()}</Card.Text>
                <Link to={`/articolo/${article.id}`}>
                  <Button variant="primary">Leggi l'articolo</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ListaArticoli;
