import React, { useEffect, useState } from "react";
import { Button, Card, Container, Nav } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Link, useNavigate } from "react-router-dom";
import contact from "../images/DemoRecipe.jpg";
import RecipeHeader from "../images/RecipeHeader.jpg";
import { recipeGet } from "../service/RecipeGet";
import "../style/recipe.css";

function Recipe() {
  const [recipeData, setRecipeData] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    recipeGet(setRecipeData)
  }, []);
  console.log(recipeData, "recipeData");

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
          {recipeData?.items?.map((item, idx) => (
            <Col key={idx}>
              <Card className="card-border">
                <Card.Img variant="top" src={item?.image} />
                <Card.Body className="card-body-width">
                  <Card.Title>
                    <h2 className="card-title-our">{item?.name}</h2>
                  </Card.Title>
                  <Card.Text>
                    <p className="my-3">
                      <span>🍴 {item?.servings} Servings</span>{" "}
                      <span>
                        🕛 {item?.totalTime}{" "}
                        Minutes
                      </span>
                    </p>
                    <p className="card-text my-2">{item?.shortDes}</p>
                  </Card.Text>
                  {/* <Nav.Link as={Link} to='' className="mx-4 ">
                  </Nav.Link> */}
                  <Button
                    variant="outline-info"
                    onClick={() => {
                      navigate(`/recipe/${item?._id}`);
                    }}
                  >
                    Info
                  </Button>
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
