import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
// import picture from './codepic.jpeg'
import logo from './codebookbanner.png'


function Home() {
  return (
    <div style={{ margin: "auto" }}>
    
    <Container style={{ marginTop: "50px", textAlign: "center" }}>
    <Image style={{ width: "100%",border: "1px solid #E8E9EB", marginTop: "0px", marginBottom: "5px"  }} src={logo}/>
    {/* <Image style={{ height: "200px", width: "700px", border: "1px solid #E8E9EB", marginTop: "0px", marginBottom: "5px" }} src={picture} /> */}
    <Row style={{ borderBottom: "1px solid #E8E9EB", display: "flex", justifyContent: "space-evenly"}} />
        <Row>
            <Col xs=".5" >
                  </Col>
                      <Col style={{border:"1px solid #E8E9EB", marginTop: "50px", marginBottom: "5px", textAlign: "center"}}>
                        <h5 style={{ }}> Our comprehensive guide to CSS flexbox layout. This complete guide explains everything about flexbox, focusing on all the different possible properties for the parent element (the flex container) and the child elements (the flex items). It also includes history, demos, patterns, and a browser support chart. </h5>
                      </Col>
          </Row>
          <Row>
                  <Col style={{border:"1px solid #E8E9EB", marginTop: "5px", marginBottom: "5px", textAlign: "center"}}>
                        <h5 style={{ }}> Our comprehensive guide to CSS flexbox layout. This complete guide explains everything about flexbox, focusing on all the different possible properties for the parent element (the flex container) and the child elements (the flex items). It also includes history, demos, patterns, and a browser support chart. </h5>
                      </Col>
          </Row>
          <Row>
                  <Col style={{border:"1px solid #E8E9EB", marginTop: "5px", marginBottom: "50px", textAlign: "center"}}>
                        <h5 style={{ }}> Our comprehensive guide to CSS flexbox layout. This complete guide explains everything about flexbox, focusing on all the different possible properties for the parent element (the flex container) and the child elements (the flex items). It also includes history, demos, patterns, and a browser support chart. </h5>
                      </Col>
          </Row>
          <h5> Ressources </h5>
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
          <Card.Link href='https://www.w3schools.com/'>W3 School </Card.Link>
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
