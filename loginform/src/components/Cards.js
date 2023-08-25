import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default class Cards extends Component {
    constructor(props) {
        super(props);
        this.state = {
            card: [
                "./fresh-fruits-vegetables-colored-background-flat-lay.jpg",
                "./fresh-carrots.jpg"
            ]
        }
    }
    

  render() {
    return (
        <Row xs={1} md={2} className="g-4">
        {Array.from({ length: 9 }).map((_, idx) => (
          <Col key={idx}>
            <Card>
              <Card.Img variant="top" src="./fresh-fruits-vegetables-colored-background-flat-lay.jpg" />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    )
  }
}
