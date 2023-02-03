import React, { useEffect, useState } from "react";
import { Button, Card, Container, Nav } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Link, useNavigate } from "react-router-dom";
import contact from "../images/DemoRecipe.jpg";
import RecipeHeader from "../images/RecipeHeader.jpg";
import { recipeGet } from "../utils/API";
import "../style/recipe.css";
import { RecipeCategoryFilter } from "../utils/RecipeFilter";

function Recipe(params) {
  const [recipeData, setRecipeData] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    recipeGet(setRecipeData);
  }, []);

  const recipe = RecipeCategoryFilter(recipeData, params?.headervalue);

  console.log("reciperecipe", recipe);

  let displayRecipe = recipe && recipe.length ? recipe : recipeData?.items;

  return (
    <>
      <Card className="bg-dark text-white main-header mx-1">
        <Card.Img
          src={params?.headerImg ? params.headerImg : RecipeHeader}
          alt="Card image"
        />
        <Card.ImgOverlay className="text-content">
          <Card.Title>
            <h2 className="main-img-header">
              {params?.headervalue ? params.headervalue : "Recipes"}
            </h2>
          </Card.Title>
        </Card.ImgOverlay>
      </Card>

      <Container>
        <Row xs={1} sm={1} md={2} lg={3} xl={3} xxl={3} className="g-4 my-5">
          {displayRecipe?.map((item, idx) => (
            <Col key={idx}>
              <Card className="card-border recipe-card-height">
                <Card.Img variant="top img-size-card" src={item?.image} />
                <Card.Body className="card-body-width">
                  <Card.Title>
                    <h2 className="card-title-our card-body-our">
                      {item?.name}
                    </h2>
                  </Card.Title>
                  <Card.Text>
                    <p className="my-3 recipe-card-servings-time">
                      <span>🍴 {item?.servings} Servings</span>{" "}
                      <span>
                        🕛 {item?.prep + item?.cookMins + item?.additionalMins}{" "}
                        Minutes
                      </span>
                    </p>
                    <p className="card-text card-p-textoverflow my-2 ">
                      {item?.shortDes}{" "}
                    </p>
                  </Card.Text>

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
