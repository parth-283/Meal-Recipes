import React from "react";
import { Card } from "react-bootstrap";
import "../style/headerimg.css";

function HeaderImg(value) {
  return (
    <>
      {value?.value && (
        <Card className="bg-dark text-white main-header mx-1">
          <Card.Img
            //   src="https://source.unsplash.com/random/1600x300/?food"
            src={value.img}
            className="img-fluid"
            alt="Card image"
          />
          <Card.ImgOverlay className="text-content">
            <Card.Title>
              <h2 className="main-img-header">{value?.value}</h2>
            </Card.Title>
          </Card.ImgOverlay>
        </Card>
      )}
    </>
  );
}

export default HeaderImg;
