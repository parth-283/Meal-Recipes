import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import User from "../images/User.gif";
import "../style/profile.css";
import userProfileBg from "../images/userProfile.jpg";
import userImage from "../images/user-image.jpg";
import StarsRating from "react-star-rate";
import { userGet } from "../utils/API";
import { useLocation } from "react-router";
import { userCookieFilter } from "../utils/UserFilter";

// const myStyle = {
//   bgImage: {
//     backgroundImage: `url(${User})`,
//     height: "auto",
//     backgroundSize: "cover",
//     backgroundBlendMode: "soft-light",
//     backgroundRepeat: "no-repeat",
//     backgroundPosition: "center",
//   },
// };

function Profile({ cookies }) {
  debugger
  const [userData, setUserData] = useState();
  const [item, setItem] = useState();

  const location = useLocation();

  // const userCookieFilter = (data, searchItrem) => {
  //   console.log("data", data);
  //   data?.items?.filter((item) => {
  //     console.log(item, "vivek");
  //     if (item.tokens.token == searchItrem?.loginToken) {
  //       console.log("finall item should bee", item);
  //       setItem(item);
  //     } else {
  //       item?.tokens?.filter((tok) => {
  //         console.log(tok, "ttttttttttttttttt");
  //         if (tok?.token == searchItrem?.loginToken) {
  //           console.log("finall item should bee", item);
  //           setItem(item);
  //         }
  //       });
  //     }
  //   });
  // };

  useEffect(() => {
    userGet(setUserData);
  }, []);
  useEffect(async() => {
    // debugger;
     await userCookieFilter(userData, cookies,setItem);
    console.log("====================================");
    console.log(userData, item, "userDatauserData");
    
    console.log("====================================");
    // userData.items[0].tokens[0].token;
  }, [userData]);

  

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
                  src={location?.state?.items?.UserData?.image}
                  alt="User_Image"
                />
                <div className="profile-first-tab-info ">
                  <label className="profile-name">
                    {" "}
                    {`${location?.state?.items?.UserData?.fname} ${location?.state?.items?.UserData?.lname}`}
                  </label>
                  <label className="profile-email">
                    {" "}
                    {location?.state?.items?.UserData?.email}
                  </label>
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
                  <Row>
                    <Col className="profile-col-1">
                      <div className="profile-info-section-text">
                        <p>
                          Hi, I’m Alec Thompson, Decisions: If you can’t decide,
                          the answer is no. If two equally difficult paths,
                          choose the one more painful in the short term (pain
                          avoidance is creating an illusion of equality).
                        </p>
                      </div>
                    </Col>
                    <Col>
                      <div>
                        <div className="profile-info-section-text">
                          <label className="profile-info-heading">
                            Full Name:
                          </label>
                          <label>{`${location?.state?.items?.UserData?.fname} ${location?.state?.items?.UserData?.lname}`}</label>
                        </div>
                        <div className="profile-info-section-text">
                          <label className="profile-info-heading">
                            Mobile:{" "}
                          </label>
                          <label>
                            {" "}
                            {location?.state?.items?.UserData?.mobile}
                          </label>
                        </div>
                        <div className="profile-info-section-text">
                          <label className="profile-info-heading">
                            Email:{" "}
                          </label>
                          <label>
                            {location?.state?.items?.UserData?.email}
                          </label>
                        </div>
                        <div className="profile-info-section-text">
                          <label className="profile-info-heading">
                            Gender:{" "}
                          </label>
                          {location?.state?.items?.UserData?.gender}
                        </div>
                        <div className="profile-info-section-text">
                          <label className="profile-info-heading">City: </label>
                          {location?.state?.items?.UserData?.city}
                        </div>
                        <div className="profile-info-section-text">
                          <label className="profile-info-heading">
                            State:{" "}
                          </label>
                          {location?.state?.items?.UserData?.state}
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
                                  `https://www.facebook.com/${location?.state?.items?.UserData?.facebook}`
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
                                  `https://www.twiter.com/${location?.state?.items?.UserData?.twiter}`
                                );
                              }}
                            >
                              <i className="bi bi-twitter px-2"></i>{" "}
                            </button>
                            <button
                              className="profile-info-icon-btn"
                              onClick={(e) => {
                                window.open(
                                  `https://www.instagram.com/${location?.state?.items?.UserData?.instagram}`
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

      <div style={{ height: "61rem" }}></div>
    </>
  );
}

export default Profile;
