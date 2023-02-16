import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  InputGroup,
  ProgressBar,
  Row,
  Tab,
  Tabs,
} from "react-bootstrap";
import "../style/addrecipe.css";
import addRecipe from "../images/addRecipe.jpg";
import { userGet } from "../utils/API";
import { userCookieFilter } from "../utils/UserFilter";

const myStyle = {
  bgImage: {
    backgroundImage: `url(${addRecipe})`,
    height: "auto",
    backgroundSize: "cover",
    backgroundBlendMode: "darken",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
};
function AddRecipes({ cookies }) {
  const [user, setUser] = useState();
  const [recipeForm, setRecipeForm] = useState([]);
  const [userData, setUserData] = useState();
  const [recipeSocialMedia, setRecipeSocialMedia] = useState({
    socialMedia: "",
  });
  const [now, setNow] = useState(25);
  const [key, setKey] = useState(1);

  useEffect(() => {
    userGet(setUserData);
  }, []);
  useEffect(() => {
    filterData();
  }, [userData]);

  const filterData = async () => {
    await userCookieFilter(userData, cookies, setUser);
  };

  const handleprogressbarPrevious = (e) => {
    if (now > 25 && key > 1) {
      setNow(now - 25);
      setKey(key - 1);
    }
  };

  const handleprogressbarNext = (e) => {
    if (now < 100 && key < 4) {
      setNow(now + 25);
      setKey(key + 1);
    }
  };

  const handleTabsSelecct = (k) => {
    setNow(k * 25);
    setKey(k);
  };

  const handleRecipeForm = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setRecipeForm({ ...recipeForm, [key]: value });
  };
  console.log("====================================");
  console.log(recipeSocialMedia, recipeForm,user, "recipeFormrecipeForm");
  console.log("====================================");

  return (
    <>
      <div>
        <Container fluid>
          <Card className="addrecipe-global-card my-4">
            <div className="addrecipe-progressbar-div">
              <ProgressBar
                variant="success"
                className="addrecipe-progressbar my-5"
                now={now}
                label={`${Math.round(now)}% Complate`}
                animated
              />
            </div>
            <div className="tabs-section-div">
              <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => handleTabsSelecct(k)}
                className="mb-3 tabs-section"
              >
                <Tab eventKey={1} title="Intro" className="tab-class">
                  <Card
                    className="addrecipe-global-card my-4"
                    style={myStyle.bgImage}
                  >
                    <Form className="addrecipe-form-1 my-5">
                      <Row>
                        <Col>
                          <Form.Group className="mb-3">
                            <Form.Label className="recipe-form-label">
                              Recipe Name
                            </Form.Label>

                            <Form.Control
                              placeholder="Recipe Name"
                              name="name"
                              onChange={(e) => handleRecipeForm(e)}
                            />
                          </Form.Group>
                        </Col>
                        <Col>
                          <Form.Group className="mb-3">
                            <Form.Label className="recipe-form-label">
                              Category
                            </Form.Label>

                            <Form.Select
                              className="addrecipe-selectbox"
                              defaultValue="Choose Category"
                              name="category"
                              onChange={(e) => handleRecipeForm(e)}
                            >
                              <option value="">Choose Category</option>
                              <option value="breakFast">BreakFast</option>
                              <option value="lunch">Lunch</option>
                              <option value="dinner">Dinner</option>
                              <option value="dessert">Dessert</option>
                            </Form.Select>
                          </Form.Group>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <Form.Group className="mb-3">
                            <Form.Label className="recipe-form-label">
                              Chef Name
                            </Form.Label>
                            <Form.Control
                              placeholder="Chef Name"
                              name="chefName"
                              value={`${user?.fname} ${user?.lname}`}
                              onChange={(e) => handleRecipeForm(e)}
                            />
                          </Form.Group>
                        </Col>
                        <Col>
                          <Form.Group className="mb-3">
                            <Form.Label className="recipe-form-label">
                              Video Link
                            </Form.Label>
                            <Form.Control
                              placeholder="Enter Video Link"
                              name="videoLink"
                              onChange={(e) => handleRecipeForm(e)}
                            />
                          </Form.Group>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <Row>
                            <div key="checkbox" className="mb-3">
                              <Form.Check
                                type="checkbox"
                                id={`check-api-$"checkbox"`}
                              >
                                <Form.Check.Input type="checkbox" isValid />
                                <Form.Check.Label>{`Custom api "checkbox"`}</Form.Check.Label>
                                <Form.Control.Feedback type="valid">
                                  You did it!
                                </Form.Control.Feedback>
                              </Form.Check>
                            </div>
                            {/* <Form.Group className="mb-3">
                              <Form.Label className="recipe-form-label">
                                SocialMedia
                              </Form.Label>
                              <Form.Select
                                className="addrecipe-selectbox"
                                defaultValue="Choose SocialMedia"
                                name="socialMedia"
                                onChange={(e) =>
                                  setRecipeSocialMedia({
                                    [e.target.name]: e.target.value,
                                  })
                                }
                              >
                                <option value="">Choose SocialMedia</option>
                                <option value="faceBook">FaceBook</option>
                                <option value="twiter">Twiter</option>
                                <option value="instagram">Instagram</option>
                              </Form.Select>
                            </Form.Group> */}
                            {/* <Col>
                              <InputGroup className="mb-3 d-flex align-items-center">
                                <Form.Control
                                  className="me-3"
                                  placeholder="Recipient's username"
                                  aria-label="Recipient's username"
                                  aria-describedby="basic-addon2"
                                />
                                <Button
                                  variant="outline-secondary"
                                  className="circul-btn"
                                  id="button-addon2"
                                >
                                  <i className="bi bi-plus-lg"></i>
                                </Button>
                              </InputGroup>
                            </Col> */}
                          </Row>
                          {/* {recipeSocialMedia?.socialMedia !== "" && (
                            <Row>
                              <div className="addrecipe-global-card recipe-socialMedia">
                                <div className="recipe-socialMedia-heading">
                                  <h2>
                                    {recipeSocialMedia?.socialMedia.toUpperCase()}
                                  </h2>
                                </div>
                                <div>
                                  <Row>
                                    <Col>
                                      <Form.Label className="recipe-form-label">
                                        {recipeSocialMedia?.socialMedia} Link
                                      </Form.Label>
                                      <Form.Control
                                        placeholder={`Enter ${recipeSocialMedia?.socialMedia} Link`}
                                        name={recipeSocialMedia?.socialMedia}
                                        onChange={(e) => handleRecipeForm(e)}
                                      />
                                    </Col>
                                  </Row>
                                </div>
                              </div>
                            </Row>
                          )} */}
                        </Col>
                      </Row>
                    </Form>
                  </Card>
                </Tab>
                <Tab
                  eventKey={2}
                  title="Time & Ingredients"
                  className="tab-class"
                >
                  <Card className="addrecipe-global-card my-4">
                    <h2>Time & Ingredients</h2>
                  </Card>
                </Tab>
                <Tab
                  eventKey={3}
                  title="Direction & Description"
                  className="tab-class"
                >
                  <Card className="addrecipe-global-card my-4">
                    <h2>Direction & Description</h2>
                  </Card>
                </Tab>
                <Tab
                  eventKey={4}
                  title="Nutration & Preserving"
                  className="tab-class"
                >
                  <Card className="addrecipe-global-card my-4">
                    <h2>Nutration & Preserving</h2>
                  </Card>
                </Tab>
              </Tabs>
            </div>
            <div className="addrecipe-button-div">
              <Button
                className="m-2 global-btn"
                onClick={(e) => handleprogressbarPrevious(e)}
              >
                <i className="bi bi-caret-left"></i> Previous
              </Button>
              <Button
                className="m-2 global-btn"
                onClick={(e) => handleprogressbarNext(e)}
              >
                Save & Next <i className="bi bi-caret-right"></i>
              </Button>
            </div>
          </Card>
        </Container>
      </div>
    </>
  );
}

export default AddRecipes;
