import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import picture from './codepic.jpeg'

function Home() {
  return (
    <div style={{ margin: "auto" }}>
    <h2 style={{ fontSize: "36px", lineHeight: "50px", marginTop: "20px", textAlign: "center", fontWeight: "normal" }}>CodeBook</h2>
    <Container style={{ marginTop: "50px", textAlign: "center" }}>
    <Row style={{ borderBottom: "1px solid #E8E9EB", display: "flex", justifyContent: "space-evenly"}} />
        <Row>
            <Col xs=".5" >
                <Image style={{ height: "200px", width: "700px", border: "1px solid #E8E9EB" }} src={picture} />
                  </Col>
                      <Col style={{textAlign: "center"}}>
                        <h5 style={{ fontWeight: "bold" }}></h5>
                       <p> display our content here </p>
                      </Col>
          </Row>
    <CardGroup>
      <Card>
        <Card.Body>
          <Card.Title>W3D School</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Card.Link href='https://www.w3schools.com/'>W3D School </Card.Link>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title>Stack Overflow</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        <Card.Link href='https://stackoverflow.com/'> Stack Overflow </Card.Link>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title>MDN</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        <Card.Link href='https://developer.mozilla.org/en-US/'>MDN</Card.Link>
        </Card.Footer>
      </Card>
    </CardGroup>
    </Container>
        </div >
  );
}

export default Home;
