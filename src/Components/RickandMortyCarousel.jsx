import React from "react";
import { Carousel, Card, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const RandMCarousel = () => {
  const characters = [
    {
      id: 1,
      name: "Rick Sanchez",
      image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
      details: "Mad scientist and the grandfather of Morty.",
    },
    {
      id: 2,
      name: "Morty Smith",
      image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
      details: "Grandson of Rick and often dragged into his crazy adventures.",
    },
    {
      id: 3,
      name: "Summer Smith",
      image: "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
      details: "Morty's older sister, dealing with typical teenage issues.",
    },
    {
      id: 4,
      name: "Beth Smith",
      image: "https://rickandmortyapi.com/api/character/avatar/4.jpeg",
      details:
        "Morty and Summer's mom, a skilled horse surgeon and clone creator.",
    },
    {
      id: 5,
      name: "Jerry Smith",
      image: "https://rickandmortyapi.com/api/character/avatar/5.jpeg",
      details: "Morty's dad, often the Silly of jokes, works in advertising.",
    },
    {
        id: 6,
        name: "Birdperson",
        image: "https://rickandmortyapi.com/api/character/avatar/47.jpeg",
        details: "He has known Rick for a long time and his bestfiend.",
      },
      {
        id: 7,
        name: "Squanchy",
        image: "https://rickandmortyapi.com/api/character/avatar/47.jpeg",
        details: "Squanchy is a cat-like anthropomorphic creature.",
      },
      {
        id: 8,
        name: "Dr. Wong",
        image: "https://rickandmortyapi.com/api/character/avatar/47.jpeg",
        details: "Dr. Wong is a perceptive, even-tempered and intelligent woman.",
      },
  ];
  const chunckArrat = (arr, chucksize) => {
    const result = [];
    for (let i = 0; i < arr.length; i += chucksize) {
      result.push(arr.slice(i, i + chucksize));
    }
    return result;
  };

  const chunckedCharacter = chunckArrat(characters, 4);
  return (
    <Carousel nextLabel="" prevLabel="" indicators={false}>
      {chunckedCharacter.map((chunck, index) => (
        <Carousel.Item key={index}>
          <Container>
          <div className="row" style={{margin: "0px"}}>
            <Row style={{margin:"0px"}}>
              {chunck.map((character) => (
                <div className="col-md-3" key={character.id}>
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={character.image} />
                    <Card.Body>
                      <Card.Title>{character.name}</Card.Title>
                      <Card.Text>{character.details}</Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              ))}
            </Row>
            </div>
          </Container>
        </Carousel.Item>
      ))}
    </Carousel>

  );
};
export default RandMCarousel;
