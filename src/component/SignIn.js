import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Signin from "../images/Sign-in.gif";
import "../style/signIn.css";
import { userSignIn } from "../utils/API";
import { useNavigate } from "react-router-dom";

function SignIn({ setCookie }) {
  const [userLoginData, setUserLoginData] = useState({
    email: "",
    password: "",
  });
  const [signInValidation, setSignInValidation] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
    console.log(signInValidation, "signInValidation");
    console.log(userLoginData, "userLoginData");
    console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
  }, [signInValidation]);

  const handleSignInUser = (e) => {
    var fieldName = e.target.name;
    var fieldValue = e.target.value;
    setUserLoginData({ ...userLoginData, [fieldName]: fieldValue });
    handleValidation(fieldName, fieldValue);
  };

  const testRegEx = (fieldName, fieldValue) => {
    const email = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
    const password = new RegExp(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/
    );

    let testValidation = false;

    if (fieldName === "email") {
      testValidation = email.test(fieldValue);
    } else if (fieldName === "password") {
      testValidation = password.test(fieldValue);
    } else {
      testValidation = false;
    }

    return testValidation;
  };

  const handleValidation = (fieldName, fieldValue) => {
    if (fieldName === undefined && fieldValue === undefined) {
      return;
    }

    if (testRegEx(fieldName, fieldValue)) {
      setSignInValidation({
        ...signInValidation,
        [fieldName]: { error: false },
      });
    } else {
      setSignInValidation({
        ...signInValidation,
        [fieldName]: {
          error: true,
          errorMessage: `${fieldName} is invalid.*`,
        },
      });
    }
  };

  const handleLoginForm = async (e) => {
    e.preventDefault();

    let apiData;

    if (userLoginData?.email === "" && userLoginData?.password === "") {
      setSignInValidation({
        ...signInValidation,
        email: {
          error: true,
          errorMessage: "Enter Email.*",
        },
        password: {
          error: true,
          errorMessage: "Enter Password.*",
        },
      });
    } else if (
      signInValidation?.email?.error === true ||
      signInValidation?.password?.error === true
    ) {
      handleValidation();
    } else {
      apiData = await userSignIn(userLoginData);
      handleCookie(apiData);
      navigate("/profile");
    }
  };

  const handleCookie = (apiData) => {
    if (apiData?.isLoaded) {
      setCookie("loginToken", apiData.items.Token, {
        path: "/",
        maxAge: 86400,
      });
    }
    // navigate("/profile")
  };
  return (
    <Container>
      <Row className="my-2 signin-bg signin-border">
        <Col sm={12} xs={12} md={6} lg={8}>
          <Card className="signin-bg signin-border">
            <Card.Img variant="top signin-border " src={Signin} />
          </Card>
        </Col>
        <Col sm={12} xs={12} md={6} lg={4}>
          <Card className="signin-card-BG">
            <Card.Body className="signin-card-body">
              <Card.Title className="heading my-1 mb-5">Sign-In</Card.Title>
              <Form className="heightTop" onSubmit={(e) => handleLoginForm(e)}>
                <Form.Group className="mb-1_5" controlId="formBasicEmail">
                  <Form.Label>Email*</Form.Label>
                  {signInValidation?.email?.error && (
                    <span className="error">
                      {" "}
                      {signInValidation?.email?.errorMessage}
                    </span>
                  )}
                  <Form.Control
                    className="text-box"
                    name="email"
                    type="email"
                    autoComplete="off"
                    placeholder="Enter email"
                    onChange={(e) => handleSignInUser(e)}
                  />
                </Form.Group>

                <Form.Group className="mb-1_5" controlId="formBasicPassword">
                  <Form.Label>Password*</Form.Label>
                  {signInValidation?.password?.error && (
                    <span className="error">
                      {" "}
                      {signInValidation?.password?.errorMessage}
                    </span>
                  )}
                  <Form.Control
                    name="password"
                    type="password"
                    autoComplete="off"
                    placeholder="Password"
                    onChange={(e) => handleSignInUser(e)}
                  />
                </Form.Group>
                <Button
                  className="global-btn mt-5"
                  variant="primary"
                  type="submit"
                >
                  Login
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default SignIn;
