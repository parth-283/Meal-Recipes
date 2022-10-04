import "../style/about.css";
import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import chef_1 from "../images/chef_1.jpg";
import chef_2 from "../images/chef_2.jpg";
import chef_3 from "../images/chef_3.jpg";
import chef_4 from "../images/chef_4.jpg";
import aboutus1 from "../images/aboutus1.jpg";
import HeaderImg from "../utils/HeaderImg";

function About() {
  return (
    <>
      {/* Header IMG */}
      {/*     <Card className="bg-dark text-white main-header mx-1">
        <Card.Img src={aboutus1} alt="Card image" />
        <Card.ImgOverlay className="text-content">
          <Card.Title>
            <h2 className="main-img-header">About Us</h2>
          </Card.Title>
        </Card.ImgOverlay>
      </Card> */}
      <HeaderImg value={"About Us"} img={aboutus1} />
      {/* About Us Content */}
      <Card className="mx-1 my-2 ">
        <Row xs={1} md={2} className="my-2 container">
          <Col className="card-img-col">
            <Card.Img variant="top" src={chef_1} className="my-2 " />
          </Col>
          <Col className="card-content-col">
            <Card.Body>
              <Card.Title>Sanjeev Kapoor</Card.Title>
              <Card.Text>
                Sanjeev Kapoor is an Indian celebrity chef, entrepreneur and
                television personality. Kapoor hosted the TV show Khana Khazana,
                the longest running show of its kind in Asia which was broadcast
                in 120 countries and in 2010 had more than 500 million viewers.
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
        <Row xs={1} md={2} className="my-2 container">
          <Col className="card-content-col">
            <Card.Body>
              <Card.Title>Ranveer Singh Brar</Card.Title>
              <Card.Text>
                Ranveer Singh Brar is a Lucknow-born and bred Indian celebrity
                chef, Masterchef India judge, author and restaurateur. He is
                well known as the host of popular Television food shows and as a
                judge in two seasons of MasterChef India, alongside fellow chefs
                Sanjeev Kapoor, Vikas Khanna & Vineet Bhatia.
              </Card.Text>
            </Card.Body>
          </Col>
          <Col className="card-img-col">
            <Card.Img variant="top" src={chef_2} className="my-2 " />
          </Col>
        </Row>
        <Row xs={1} md={2} className="my-2 container">
          <Col className="card-img-col">
            <Card.Img variant="top" src={chef_4} className="my-2 " />
          </Col>
          <Col className="card-content-col">
            <Card.Body>
              <Card.Title>Pankaj Bhadouria</Card.Title>
              <Card.Text>
                Pankaj Bhadouria is the winner of MasterChef India Season 1. She
                was a school teacher who quit a 16-year-old job to participate
                in the first season of MasterChef India. She has hosted the TV
                shows Chef Pankaj Ka Zayka, Kifayati Kitchen, 3 Course with
                Pankaj, Rasoi se- Pankaj Bhadouria ke Saath, Sales Ka Baazigar.
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
        <Row xs={1} md={2} className="my-2 container">
          <Col className="card-content-col">
            <Card.Body>
              <Card.Title>Vikas Khanna</Card.Title>
              <Card.Text>
                Vikas Khanna is an Indian chef, restaurateur, cookbook writer,
                filmmaker and humanitarian. He is one of the judges of Star Plus
                series MasterChef India. He is based in New York City.
              </Card.Text>
            </Card.Body>
          </Col>
          <Col className="card-img-col">
            <Card.Img variant="top" src={chef_3} className="my-2 " />
          </Col>
        </Row>
      </Card>
    </>
  );
}

export default About;
