import "../style/signup.css";
import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import signUpBG from "../images/signUpBG.jpg";
import { userSignUp } from "../utils/API";
import { InputGroup } from "react-bootstrap";
import { useNavigate } from "react-router";

const myStyle = {
  bgImage: {
    backgroundImage: `url(${signUpBG})`,
    height: "auto",
    backgroundSize: "cover",
    backgroundBlendMode: "soft-light",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
};

function Signup() {
  const [usersignUpData, setUsersignUpData] = useState({
    fname: "",
    lname: "",
    email: "",
    mobile: "",
    gender: "",
    dob: "",
    address: "",
    facebook: "",
    instagram: "",
    twiter: "",
    city: "",
    state: "",
    password: "",
    cpassword: "",
  });
  const [signUpValidation, setSignUpValidation] = useState([]);
  const [showHide, setShowHide] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&");
    console.log(signUpValidation, "testValidation");
    console.log(usersignUpData, "usersignUpData");
    console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&");
  }, [usersignUpData]);

  const handleShowHide = () => {
    if (showHide) {
      setShowHide(!showHide);
    } else {
      setShowHide(!showHide);
    }
  };

  const handleChangeForm = (e) => {
    var fieldName = e.target.name;
    var fieldValue = e.target.value;
    setUsersignUpData({ ...usersignUpData, [fieldName]: fieldValue });
    console.log({ [fieldName]: fieldValue }, "usersignUpData");

    handleValidation(fieldName, fieldValue);
  };

  const testRegEx = (fieldName, fieldValue) => {
    const fname = new RegExp(/^[a-zA-Z\-]+$/);
    const email = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
    const mobile = new RegExp(/^\d{10}$/);
    const password = new RegExp(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/
    );
    const dob = new RegExp(/[12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])/);
    const address = new RegExp(/\d{1,}(\s{1}\w{1,})(\s{1}?\w{1,})+/);

    let testValidation = false;

    if (
      fieldName === "fname" ||
      fieldName === "lname" ||
      fieldName === "city" ||
      fieldName === "state"
    ) {
      testValidation = fname.test(fieldValue);
    } else if (fieldName === "email") {
      testValidation = email.test(fieldValue);
    } else if (fieldName === "mobile") {
      testValidation = mobile.test(fieldValue);
    } else if (fieldName === "dob") {
      testValidation = dob.test(fieldValue);
    } else if (fieldName === "address") {
      testValidation = address.test(fieldValue);
    } else if (fieldName === "password") {
      testValidation = password.test(fieldValue);
    } else if (fieldName === "cpassword") {
      if (fieldValue === usersignUpData?.password) {
        testValidation = true;
      } else {
        testValidation = false;
      }
    } else if (fieldName === "gender" && fieldValue !== "") {
      testValidation = true;
    } else if (
      (fieldName === "facebook" && fieldValue !== "") ||
      (fieldName === "instagram" && fieldValue !== "") ||
      (fieldName === "twiter" && fieldValue !== "")
    ) {
      testValidation = true;
    } else {
      testValidation = false;
    }

    return testValidation;
  };

  const handleValidation = (fieldName, fieldValue) => {
    debugger;
    if (fieldName === undefined && fieldValue === undefined) {
      return;
    }

    if (testRegEx(fieldName, fieldValue)) {
      setSignUpValidation({
        ...signUpValidation,
        [fieldName]: { error: false },
      });
    } else {
      let errorMessage = "";

      if (fieldName === "mobile") {
        errorMessage = `${fieldName} number must be 10 digit.*`;
      } else if (fieldName === "cpassword") {
        if (fieldValue !== usersignUpData?.cpassword) {
          errorMessage = `can not match to Password.*`;
        }
      } else {
        errorMessage = `${fieldName} is invalid.*`;
      }

      setSignUpValidation({
        ...signUpValidation,
        [fieldName]: {
          error: true,
          errorMessage: errorMessage,
        },
      });
    }
  };

  const handlesignupForm = async (e) => {
    e.preventDefault();

    let apiData;
    if (
      usersignUpData?.fname === "" &&
      usersignUpData?.lname === "" &&
      usersignUpData?.email === "" &&
      usersignUpData?.mobile === "" &&
      usersignUpData?.dob === "" &&
      usersignUpData?.address === "" &&
      usersignUpData?.gender === "" &&
      usersignUpData?.facebook === "" &&
      usersignUpData?.instagram === "" &&
      usersignUpData?.twiter === "" &&
      usersignUpData?.city === "" &&
      usersignUpData?.state === "" &&
      usersignUpData?.password === "" &&
      usersignUpData?.cpassword === ""
    ) {
      setSignUpValidation({
        ...signUpValidation,
        fname: {
          error: true,
          errorMessage: "Enter First Name.*",
        },
        lname: {
          error: true,
          errorMessage: "Enter Last Name.*",
        },
        email: {
          error: true,
          errorMessage: "Enter Email.*",
        },
        gender: {
          error: true,
          errorMessage: "Selcet gender.*",
        },
        mobile: {
          error: true,
          errorMessage: "Enter mobile Number.*",
        },
        dob: {
          error: true,
          errorMessage: "Enter Date Of Birth.*",
        },
        address: {
          error: true,
          errorMessage: "Enter Address.*",
        },
        city: {
          error: true,
          errorMessage: "Enter City.*",
        },
        facebook: {
          error: true,
          errorMessage: "Enter FaceBook URL.*",
        },
        instagram: {
          error: true,
          errorMessage: "Enter Instagram URL.*",
        },
        twiter: {
          error: true,
          errorMessage: "Enter Twiter URL.*",
        },
        state: {
          error: true,
          errorMessage: "Enter State.*",
        },
        password: {
          error: true,
          errorMessage: "Enter Password.*",
        },
        cpassword: {
          error: true,
          errorMessage: "Enter Confirm password.*",
        },
      });
    } else if (
      signUpValidation?.fname.error === true ||
      signUpValidation?.lname.error === true ||
      signUpValidation?.email.error === true ||
      signUpValidation?.mobile.error === true ||
      signUpValidation?.dob.error === true ||
      signUpValidation?.address.error === true ||
      signUpValidation?.gender.error === true ||
      usersignUpData?.facebook === true ||
      usersignUpData?.instagram === true ||
      usersignUpData?.twiter === true ||
      signUpValidation?.city.error === true ||
      signUpValidation?.state.error === true ||
      signUpValidation?.password.error === true ||
      signUpValidation?.cpassword.error === true
    ) {
      handleValidation();
    } else {
      apiData = await userSignUp(usersignUpData);
      console.log("apiData", apiData);
      navigate("/lopgin");
    }
  };

  return (
    <div className="main-sign-up-div">
      <Card className="bg-dark text-white sign-up-card" style={myStyle.bgImage}>
        <Container fluid className="sign-up-container">
          <Form className=" my-5" onSubmit={(e) => handlesignupForm(e)}>
            <Card.Title className="heading my-1 mb-5">Sign-Up</Card.Title>
            {/* First Name || Last Name */}
            <Row className="mb-3 " xs={1} sm={1} md={2} lg={2}>
              <Form.Group as={Col} controlId="fname">
                <Form.Label>First Name*</Form.Label>
                {signUpValidation?.fname?.error === true && (
                  <span className="error">
                    {" "}
                    {signUpValidation?.fname?.errorMessage}
                  </span>
                )}
                <Form.Control
                  type="text"
                  autoComplete="off"
                  placeholder="First Name"
                  name="fname"
                  onChange={(e) => handleChangeForm(e)}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="lname">
                <Form.Label>Last Name*</Form.Label>
                {signUpValidation?.lname?.error && (
                  <span className="error">
                    {" "}
                    {signUpValidation?.lname?.errorMessage}
                  </span>
                )}
                <Form.Control
                  type="text"
                  autoComplete="off"
                  placeholder="Last Name"
                  name="lname"
                  onChange={(e) => handleChangeForm(e)}
                />
              </Form.Group>
            </Row>
            {/* Email || Mobile */}
            <Row className="mb-3" xs={1} sm={1} md={2} lg={2}>
              <Form.Group as={Col} controlId="email">
                <Form.Label>Email*</Form.Label>
                {signUpValidation?.email?.error && (
                  <span className="error">
                    {" "}
                    {signUpValidation?.email?.errorMessage}
                  </span>
                )}
                <Form.Control
                  type="email"
                  autoComplete="off"
                  placeholder="Enter email"
                  name="email"
                  onChange={(e) => handleChangeForm(e)}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="mobile">
                <Form.Label>Mobile*</Form.Label>
                {signUpValidation?.mobile?.error && (
                  <span className="error">
                    {" "}
                    {signUpValidation?.mobile?.errorMessage}
                  </span>
                )}
                <Form.Control
                  type="number"
                  autoComplete="off"
                  placeholder="Mobile"
                  name="mobile"
                  onChange={(e) => handleChangeForm(e)}
                />
              </Form.Group>
            </Row>
            {/* DOB || Gender */}
            <Row className="mb-3" xs={1} sm={1} md={2} lg={2}>
              <Form.Group as={Col} className="" controlId="formGridDOB">
                <Form.Label>DOB*</Form.Label>
                {signUpValidation?.dob?.error && (
                  <span className="error">
                    {" "}
                    {signUpValidation?.dob?.errorMessage}
                  </span>
                )}
                <Form.Control
                  type="date"
                  autoComplete="off"
                  placeholder="Date of Birth"
                  name="dob"
                  onChange={(e) => handleChangeForm(e)}
                />
              </Form.Group>
              <Form.Group
                as={Col}
                controlId="gender"
                className="gender-col"
                onChange={(e) => handleChangeForm(e)}
              >
                <div>
                  <Form.Label>Gender*</Form.Label>
                  {signUpValidation?.gender?.error && (
                    <span className="error">
                      {" "}
                      {signUpValidation?.gender?.errorMessage}
                    </span>
                  )}
                </div>
                <div className="gender-div my-auto">
                  <Form.Check
                    className="gender-btn"
                    type="radio"
                    label="Male"
                    name="gender"
                    value="Male"
                    id="default-radio"
                  />
                  <Form.Check
                    className="gender-btn"
                    type="radio"
                    label="Female"
                    name="gender"
                    value="Female"
                    id="default-radio"
                  />
                </div>
              </Form.Group>
            </Row>
            {/* Address */}
            <Row className="mb-3">
              <Form.Group as={Col} className="" controlId="address">
                <Form.Label>Address*</Form.Label>
                {signUpValidation?.address?.error && (
                  <span className="error">
                    {" "}
                    {signUpValidation?.address?.errorMessage}
                  </span>
                )}
                <Form.Control
                  autoComplete="off"
                  name="address"
                  onChange={(e) => handleChangeForm(e)}
                  placeholder="1234 Main St"
                />
              </Form.Group>
            </Row>
            {/* City || State */}
            <Row className="mb-3" xs={1} sm={1} md={2} lg={2}>
              <Form.Group as={Col} controlId="city">
                <Form.Label>City*</Form.Label>
                {signUpValidation?.city?.error && (
                  <span className="error">
                    {" "}
                    {signUpValidation?.city?.errorMessage}
                  </span>
                )}
                <Form.Control
                  autoComplete="off"
                  name="city"
                  onChange={(e) => handleChangeForm(e)}
                  placeholder="City"
                />
              </Form.Group>

              <Form.Group as={Col} controlId="state">
                <Form.Label>State*</Form.Label>
                {signUpValidation?.state?.error && (
                  <span className="error">
                    {" "}
                    {signUpValidation?.state?.errorMessage}
                  </span>
                )}
                <Form.Control
                  autoComplete="off"
                  name="state"
                  onChange={(e) => handleChangeForm(e)}
                  placeholder="State"
                />
              </Form.Group>
            </Row>
            {/* FaceBook || Instagram || Twiter */}
            <Row
              className="mb-3 socialmedia-signup"
              xs={1}
              sm={1}
              md={3}
              lg={3}
            >
              <Form.Group as={Col} controlId="fname">
                <div>
                  {signUpValidation?.facebook?.error && (
                    <span className="error">
                      {" "}
                      {signUpValidation?.facebook?.errorMessage}
                    </span>
                  )}
                  <InputGroup className="mb-3 signup-input-group">
                    <InputGroup.Text
                      id="basic-addon3"
                      className="signup-input-label"
                    >
                      FaceBook URL
                    </InputGroup.Text>
                    <Form.Control
                      name="facebook"
                      placeholder="FaceBook URL"
                      id="basic-url"
                      aria-describedby="basic-addon3"
                      onChange={(e) => handleChangeForm(e)}
                    />
                  </InputGroup>
                </div>
                <div>
                  {signUpValidation?.instagram?.error && (
                    <span className="error">
                      {" "}
                      {signUpValidation?.instagram?.errorMessage}
                    </span>
                  )}
                  <InputGroup className="mb-3 signup-input-group">
                    <InputGroup.Text
                      id="basic-addon3"
                      className="signup-input-label"
                    >
                      Instagram URL
                    </InputGroup.Text>
                    <Form.Control
                      name="instagram"
                      placeholder="Instagram URL"
                      id="basic-url"
                      aria-describedby="basic-addon3"
                      onChange={(e) => handleChangeForm(e)}
                    />
                  </InputGroup>
                </div>
                <div>
                  {signUpValidation?.twiter?.error && (
                    <span className="error">
                      {" "}
                      {signUpValidation?.twiter?.errorMessage}
                    </span>
                  )}
                  <InputGroup className="mb-3 signup-input-group">
                    <InputGroup.Text
                      id="basic-addon3"
                      className="signup-input-label"
                    >
                      Twiter URL
                    </InputGroup.Text>
                    <Form.Control
                      name="twiter"
                      placeholder="Twiter URL"
                      id="basic-url"
                      aria-describedby="basic-addon3"
                      onChange={(e) => handleChangeForm(e)}
                    />
                  </InputGroup>
                </div>
              </Form.Group>
              {/* <Form.Group as={Col} controlId="fname">
                <Form.Label>FaceBook</Form.Label>
                <Form.Control
                  type="text"
                  autoComplete="off"
                  placeholder="FaceBook"
                  name="facebook"
                  onChange={(e) => handleChangeForm(e)}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="lname">
                <Form.Label>Instagram</Form.Label>
                <Form.Control
                  type="text"
                  autoComplete="off"
                  placeholder="Instagram"
                  name="istagram"
                  onChange={(e) => handleChangeForm(e)}
                />
              </Form.Group>
              <Form.Group as={Col} controlId="lname">
                <Form.Label>Twiter</Form.Label>
                <Form.Control
                  type="text"
                  autoComplete="off"
                  placeholder="Twiter"
                  name="twiter"
                  onChange={(e) => handleChangeForm(e)}
                />
              </Form.Group> */}
            </Row>
            {/* Password || Confirm Password */}
            <Row className="mb-3" xs={1} sm={1} md={2} lg={2}>
              <Form.Group as={Col} controlId="password">
                <Form.Label>Password*</Form.Label>
                {signUpValidation?.password?.error && (
                  <span className="error">
                    {" "}
                    {signUpValidation?.password?.errorMessage}
                  </span>
                )}
                <div className="signup-input-icons">
                  <i
                    className={`bi ${
                      !showHide ? "bi-eye-slash-fill" : "bi-eye-fill"
                    }  signup-icon`}
                    onClick={() => handleShowHide()}
                  ></i>
                  <Form.Control
                    className="signup-input-field"
                    type={!showHide ? "password" : "text"}
                    autoComplete="off"
                    placeholder="Password"
                    name="password"
                    onChange={(e) => handleChangeForm(e)}
                  />
                </div>
              </Form.Group>

              <Form.Group as={Col} controlId="cpassword">
                <Form.Label>Confirm Password*</Form.Label>
                {signUpValidation?.cpassword?.error && (
                  <span className="error">
                    {" "}
                    {signUpValidation?.cpassword?.errorMessage}
                  </span>
                )}
                <div className="signup-input-icons">
                  <i
                    className={`bi ${
                      !showHide ? "bi-eye-slash-fill" : "bi-eye-fill"
                    }  signup-icon`}
                    onClick={() => handleShowHide()}
                  ></i>
                  <Form.Control
                    type={!showHide ? "password" : "text"}
                    autoComplete="off"
                    placeholder="Confirm Password"
                    name="cpassword"
                    onChange={(e) => handleChangeForm(e)}
                  />
                </div>
              </Form.Group>
            </Row>

            <Button className="btn global-btn" type="submit">
              Submit
            </Button>
          </Form>
        </Container>
      </Card>
      {/* </Card> */}
    </div>
  );
}

export default Signup;
