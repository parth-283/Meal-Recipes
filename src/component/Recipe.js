import React from "react";
import { Button, Card, Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import contact from "../images/DemoRecipe.jpg";
import RecipeHeader from "../images/RecipeHeader.jpg";
import "../style/recipe.css";

function Recipe() {
  return (
    <>
      <Card className="bg-dark text-white main-header mx-1">
        <Card.Img
          //   src="https://source.unsplash.com/random/1600x300/?food"
          src={RecipeHeader}
          alt="Card image"
        />
        <Card.ImgOverlay className="text-content">
          <Card.Title>
            <h2 className="main-img-header">Recipes</h2>
          </Card.Title>
        </Card.ImgOverlay>
      </Card>

      <Container>
        <Row xs={1} md={4} className="g-4 mt-5">
          {Array.from({ length: 4 }).map((_, idx) => (
            <Col key={idx}>
              <Card>
                <Card.Img variant="top" src={contact} />
                <Card.Body>
                  <Card.Title>
                    <h2 className="card-title-our">Sitafal Basundi</h2>
                  </Card.Title>
                  <Card.Text>
                    <p className="my-3">
                      <span>🍴 2 Servings</span> <span>🕛 15 Minutes</span>
                    </p>
                    <p className="card-text my-5">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                  </Card.Text>
                  <Button variant="outline-info">Info</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default Recipe;
