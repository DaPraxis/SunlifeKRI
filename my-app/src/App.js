import "./App.css";
import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaRegUserCircle } from "react-icons/fa";
import { RiAdminFill } from "react-icons/ri";
export default function App() {
return (
  <div className="App">
    <Container style={{marginTop:'15px' }}>
      <Row>
        <Col sm={8}>
          <iframe width="100%" height="700px" src="https://public.tableau.com/views/Regional_16766597857820/GlobalTemperatures?:showVizHome=no&:tabs=no">
      </iframe>
      </Col>
        <Col height="700px" sm={4}>
          <Container align='left'>
            <h4>All Comments</h4>
            <Card style={{ width: '28rem'}} bg='success' text='white'>
              <Card.Body>
                <Card.Title>Flagging This! Interesting Data!</Card.Title>
                <Card.Subtitle >May 8th 2024</Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <FaRegUserCircle /> Max Jiang

                
              </Card.Body>
            </Card>
            <Card style={{ width: '28rem', marginTop:'10px' }}bg='danger' text='white'>
              <Card.Body>
                <Card.Title>Bad Sign for Toronto</Card.Title>
                <Card.Subtitle>May 9th 2024</Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <RiAdminFill />Max Jiang
              </Card.Body>
            </Card>
          </Container>
        </Col>
      </Row>
    </Container>

  </div>
);
}