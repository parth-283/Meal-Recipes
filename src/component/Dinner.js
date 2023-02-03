import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { Col, Container, Figure, Row, Button } from "react-bootstrap";
import { recipeGet } from "../utils/API";
import RecipeHeader from "../images/RecipeHeader.jpg";
import { useNavigate } from "react-router";
import { RecipeCategoryFilter } from "../utils/RecipeFilter";
import HeaderImg from "../utils/HeaderImg";
import Recipe from "./Recipe";

function Dinner() {
  // const [recipeData, setRecipeData] = useState();

  // const navigate = useNavigate();

  // const recipe = RecipeCategoryFilter(recipeData, "Dinner");

  // useEffect(() => {
  //   recipeGet(setRecipeData);
  // }, []);
  return (
    <>
      {/* {recipe && <HeaderImg value={"Dinner"} img={RecipeHeader} />} */}

      <div>
        <Recipe headervalue={"Dinner"} headerImg={RecipeHeader} />
      </div>

      {/* {recipe?.length !== 0 ? (
        <Container>
          <Row xs={1} md={3} className="g-4 my-5">
            {recipe?.map((item, idx) => (
              <Col key={idx}>
                <Card className="card-border">
                  <Card.Img variant="top img-size-card" src={item?.image} />
                  <Card.Body className="card-body-width">
                    <Card.Title>
                      <h2 className="card-title-our card-body-our">
                        {item?.name}
                      </h2>
                    </Card.Title>
                    <Card.Text>
                      <p className="my-3">
                        <span>🍴 {item?.servings} Servings</span>{" "}
                        <span>
                          🕛{" "}
                          {item?.prep + item?.cookMins + item?.additionalMins}{" "}
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
      ) : (
        <div></div>
      )}*/}
    </>
  );
}

export default Dinner;
