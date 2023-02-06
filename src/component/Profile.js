import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import User from "../images/User.gif";
import "../style/profile.css";
import userProfileBg from "../images/userProfile.jpg";
import userImage from "../images/user-image.jpg";
import StarsRating from "react-star-rate";
import { userGet } from "../utils/API";
import { userCookieFilter } from "../utils/UserFilter";

function Profile({ cookies }) {
  debugger;
  const [userData, setUserData] = useState();
  const [user, setUser] = useState();
  const [userRecipeIds, setUserRecipeIds] = useState({
    recipeId: "",
    userId:""
  })

  useEffect(() => {
    userGet(setUserData);
  }, []);
  useEffect(() => {
    filterData();
  }, [userData]);

  const filterData = async () => {
    await userCookieFilter(userData, cookies, setUser);
  };

  return (
    <>
      <div>
        <div className="profile-main-div">
          <img
            src={userProfileBg}
            alt="ProfileBackground"
            className="profile-bg-image"
          />
          <div className="profile-Container">
            <Card className=" profile-card profile-card-1 mb-4">
              <div className="profile-first-tab" id="home">
                <Image
                  className="profile-image"
                  // roundedCircle
                  src={user?.image}
                  alt="User_Image"
                />
                <div className="profile-first-tab-info ">
                  <label className="profile-name">
                    {" "}
                    {`${user?.fname} ${user?.lname}`}
                  </label>
                  <label className="profile-email"> {user?.email}</label>
                </div>
              </div>
              <div>
                <Button className="profile-btn global-btn" type="submit">
                  Edit
                </Button>
              </div>
            </Card>
            <div className="profile-card-2">
              <Card className=" profile-card  my-4">
                <Container fluid>
                  <div className="profile-section-heading">
                    <label className=""> Profile Information</label>
                  </div>
                  <Row className="profile-section2-row">
                    <Col className="profile-col-1">
                      <div className="profile-info-section-text">
                        <p>{user?.summary}</p>
                      </div>
                    </Col>
                    <Col className="column-2">
                      <div>
                        <div className="profile-info-section-text">
                          <label className="profile-info-heading">
                            Full Name:
                          </label>
                          <label>{`${user?.fname} ${user?.lname}`}</label>
                        </div>
                        <div className="profile-info-section-text">
                          <label className="profile-info-heading">
                            Mobile:{" "}
                          </label>
                          <label> {user?.mobile}</label>
                        </div>
                        <div className="profile-info-section-text">
                          <label className="profile-info-heading">
                            Email:{" "}
                          </label>
                          <label>{user?.email}</label>
                        </div>
                        <div className="profile-info-section-text">
                          <label className="profile-info-heading">
                            Gender:{" "}
                          </label>
                          {user?.gender}
                        </div>
                        <div className="profile-info-section-text">
                          <label className="profile-info-heading">City: </label>
                          {user?.city}
                        </div>
                        <div className="profile-info-section-text">
                          <label className="profile-info-heading">
                            State:{" "}
                          </label>
                          {user?.state}
                        </div>
                        <div className="profile-info-section-text">
                          <label className="profile-info-heading">
                            Social:{" "}
                          </label>
                          <label>
                            <button
                              className="profile-info-icon-btn"
                              onClick={(e) => {
                                window.open(
                                  `https://www.facebook.com/${user?.facebook}`
                                );
                              }}
                            >
                              {/* href="https://www.facebook.com/parth.kathiriya-283" */}
                              <i className="bi bi-facebook"></i>{" "}
                            </button>
                            <button
                              className="profile-info-icon-btn"
                              onClick={(e) => {
                                window.open(
                                  `https://www.twiter.com/${user?.twiter}`
                                );
                              }}
                            >
                              <i className="bi bi-twitter px-2"></i>{" "}
                            </button>
                            <button
                              className="profile-info-icon-btn"
                              onClick={(e) => {
                                window.open(
                                  `https://www.instagram.com/${user?.instagram}`
                                );
                              }}
                            >
                              <i className="bi bi-instagram"></i>
                            </button>
                          </label>
                        </div>
                      </div>
                    </Col>
                    <Col>
                      <div className="profile-div-comment">
                        <div></div>
                        <input type="text" placeholder="Comment" />
                      </div>
                    </Col>
                  </Row>
                </Container>
              </Card>
            </div>
            <div className="profile-card-3 profile-recipe-card">
              <Card className=" profile-card  my-4">
                <Card className="  my-4" style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={userImage} />
                  <Card.Body>
                    <div>
                      <Card.Title className="profile-recipe-title">
                        Tomato Paneer Recipe
                      </Card.Title>
                      <div className="profile-racipe-rating">
                        <StarsRating
                          value={3.5}
                          // onChange={(value) => {
                          //   setValue(value);
                          // }}
                        />
                        <label>3.5</label>
                      </div>
                    </div>
                    <p className="my-3 profile-recipe-time ">
                      <span>🍴 9 Servings</span> <span>🕛 31 Minutes</span>
                    </p>
                    <Card.Text className="profile-recipe-dec">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <div>
                      <Button variant="btn global-btn ">View Reicpe</Button>
                    </div>
                  </Card.Body>
                </Card>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <div style={{ height: "18rem" }}></div>
    </>
  );
}

export default Profile;
