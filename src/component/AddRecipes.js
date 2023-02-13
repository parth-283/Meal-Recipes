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

function AddRecipes() {
  const [now, setNow] = useState(25);
  const [key, setKey] = useState(1);

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
                  <Card className="addrecipe-global-card my-4">
                    {/* <iframe
                      width="560"
                      height="315"
                      src="https://www.youtube.com/embed/VBQ4d1GMOtk"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowfullscreen
                    ></iframe> */}
                    <Form className="addrecipe-form-1">
                      <Row>
                        <Col>
                          <Form.Control placeholder="Recipe Name" />
                        </Col>
                        <Col>
                          <Form.Select
                            className="addrecipe-selectbox"
                            defaultValue="Choose Category"
                          >
                            <option>Choose Category</option>
                            <option>BreakFast</option>
                            <option>Lunch</option>
                            <option>Dinner</option>
                            <option>Dessert</option>
                          </Form.Select>
                        </Col>
                      </Row>
                      <Row>
                        <InputGroup className="mb-3">
                          <Form.Control
                            placeholder="Recipient's username"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                          />
                          <Button
                            variant="outline-secondary"
                            id="button-addon2"
                          >
                            Add
                          </Button>
                        </InputGroup>
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
                  title="Direction & Description "
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
                Next <i className="bi bi-caret-right"></i>
              </Button>
            </div>
          </Card>
        </Container>
      </div>
    </>
  );
}

export default AddRecipes;
