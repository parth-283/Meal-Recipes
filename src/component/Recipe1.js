import React, { useEffect, useState } from "react";
import contact from "../images/DemoRecipe.jpg";
import "../style/recipe.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Col, Figure, Row } from "react-bootstrap";
import { useParams } from "react-router";
import { recipeGet } from "../service/RecipeGet";

function Recipe1() {
  const [recipeData, setRecipeData] = useState();
  const { recipeId } = useParams();
  const recipe = recipeData?.items?.filter((item) => item?._id == recipeId);

  useEffect(() => {
    recipeGet(setRecipeData);
  }, []);

  console.log(recipe);

  return (
    <>
      {recipe && (
        <div>
          <Card>
            <Card.Body style={{ width: "57%" }}>
              <Card.Title className="card-title-our">
                {recipe[0]?.name}
              </Card.Title>
              <Card.Text>
                <Card.Link href="#1">3 Ratings</Card.Link> |
                <Card.Link href="#2">3 Reviews</Card.Link>
              </Card.Text>
              <Card.Text>{recipe[0]?.description}</Card.Text>
              <Figure>
                <Figure.Image
                  width={50}
                  height={50}
                  alt="171x180"
                  className="rounded-circle"
                  src={recipe[0]?.image}
                />
                <Figure.Caption className="ms-2">
                  Recipe by{" "}
                  <Card.Link href="#1">{recipe[0]?.chefName}</Card.Link>
                </Figure.Caption>
              </Figure>
            </Card.Body>
            <Row style={{ width: "57%" }}>
              <Col xs={12} md={9}>
                <Card.Img variant="top" src={recipe[0]?.image} />
              </Col>
              <Col xs={6} md={3} className="mx-auto mt-1">
                <div className="time-border parent-div">
                  <div className="child-div" style={{ fontSize: "25px" }}>
                    {/* <i className="bi bi-stopwatch-fill"></i> */}
                    <img
                      src="https://img.icons8.com/glyph-neue/64/FAB005/stopwatch.png"
                      alt="icon"
                    />
                  </div>
                  <p>
                    <b>Prep:</b> {recipe[0]?.prep} mins
                  </p>
                  <p>
                    <b>Cook:</b> {recipe[0]?.cookMins} mins
                  </p>
                  <p>
                    <b>Additional:</b> {recipe[0]?.additionalMins} mins
                  </p>
                  <p>
                    <b>Total:</b>{" "}
                    {recipe[0]?.prep +
                      recipe[0]?.cookMins +
                      recipe[0]?.additionalMins}{" "}
                    mins
                  </p>
                  <p>
                    <b>Servings:</b> {recipe[0]?.servings}
                  </p>
                  <p>
                    <b>Yield:</b> {recipe[0]?.yield} servings
                  </p>
                  <p style={{ textAlign: "center" }}>
                    <Card.Link href="#nutrition">Nutrition Info</Card.Link>
                  </p>
                </div>
                <div></div>
              </Col>
            </Row>

            <Card.Body style={{ width: "57%" }}>
              <hr />
              <Card.Title className="card-heading">Ingredients 🛍️</Card.Title>
              <Card.Text>
                <ul>
                  {recipe[0]?.ingredients.map((item) => {
                    return <li>{item}</li>;
                  })}
                </ul>
              </Card.Text>
            </Card.Body>
            <Card.Body style={{ width: "57%" }}>
              <hr />
              <Card.Title className="card-heading">Directions 👇</Card.Title>
              <Card.Text>
                {recipe[0]?.directions.map((item, index) => {
                  return (
                    <>
                      <p>
                        <b>Step {index + 1}</b>
                      </p>
                      <p>{item}</p>
                    </>
                  );
                })}
              </Card.Text>
            </Card.Body>
            <Card.Body style={{ width: "57%" }}>
              <hr />
              <Card.Title className="card-heading">Chef's Note 👨‍🍳</Card.Title>
              <Card.Text>{recipe[0]?.chefNote}</Card.Text>
            </Card.Body>
            <Card.Body style={{ width: "57%" }}>
              <hr />
              <Card.Title className="card-heading">
                Nutrition Facts (per serving)
              </Card.Title>
              <Card.Text id="nutrition">
                {recipe[0]?.nutrition.map((item) => {
                  return <li>{item}</li>;
                })}
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      )}
    </>
  );
}

export default Recipe1;
