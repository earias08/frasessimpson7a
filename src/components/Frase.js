import React from "react";
import Card from "react-bootstrap/Card";

const Frase = () => {
  return (
    <Card className='w-100'>
      <Card.Body>
        <div className="row">
          <div className="col-sm-12 col-md-4">
            <img src="" alt="" />
          </div>
          <div className="col-sm-12 col-md-8">
            <Card.Title>Personaje</Card.Title>
            <Card.Text>Frase aleatoria del personaje</Card.Text>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Frase;
