import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  InputGroup,
  Modal,
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
  const [now, setNow] = useState(25);
  const [key, setKey] = useState(1);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
                      {/*  Recipe's Name & Category */}
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
                          <Form.Group className="">
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
                      {/* Chef Name & Video Links */}
                      <Row>
                        <Col>
                          <Form.Group className="mb-3">
                            <Form.Label className="recipe-form-label">
                              Chef Name
                            </Form.Label>
                            <Form.Control
                              disabled
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
                      {/* Social Media */}
                      <Row>
                        <Col>
                          <Row>
                            <Form.Group className="mb-3">
                              <Form.Label className="recipe-form-label">
                                SocialMedia
                              </Form.Label>
                              <div className="addrecipe-socialMedia-div">
                                <div
                                  className="facebook-div"
                                  onClick={(e) => handleShow(e)}
                                >
                                  <i class="bi bi-facebook"></i>
                                </div>
                                <div className="instagram-div">
                                  <i class="bi bi-instagram"></i>
                                </div>
                                <div className="twitter-div">
                                  <i class="bi bi-twitter"></i>
                                </div>
                              </div>
                            </Form.Group>
                            <Modal
                              show={show}
                              onHide={handleClose}
                              className="socialMedia-modal"
                            >
                              <Modal.Header
                                className="socialMedia-modal-header"
                                closeButton
                              >
                                <Modal.Title>Social Media</Modal.Title>
                              </Modal.Header>
                              <Modal.Body>
                                <Form.Group className="mb-3">
                                  <Form.Label className="recipe-form-label">
                                    FaceBook
                                  </Form.Label>

                                  <Form.Control
                                    placeholder="FaceBook"
                                    name="faceBook"
                                    onChange={(e) => handleRecipeForm(e)}
                                  />
                                </Form.Group>{" "}
                              </Modal.Body>
                              <Modal.Footer>
                                <Button
                                  variant="secondary"
                                  onClick={handleClose}
                                >
                                  Close
                                </Button>
                                <Button variant="primary" onClick={handleClose}>
                                  Save Changes
                                </Button>
                              </Modal.Footer>
                            </Modal>
                          </Row>
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
