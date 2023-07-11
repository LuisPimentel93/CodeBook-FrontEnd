import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import Container from 'react-bootstrap/Container'
import Pagination from 'react-bootstrap/Pagination'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import logo from './codebookbanner.png'
import picture from './codepic.jpeg'
import Form from 'react-bootstrap/Form';
import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";


function Home() {
  return (
    <div style={{ margin: "auto" }}>
      <Container style={{ marginTop: "50px", textAlign: "center" }}>
        <Image style={{ width: "100%",border: "1px solid #E8E9EB", marginTop: "0px", marginBottom: "5px"  }} src={logo}/>
        <Row style={{ borderBottom: "1px solid #E8E9EB", display: "flex", justifyContent: "space-evenly"}} />
        <Row>
          
          <Col  xs lg="4" style={{ border:"1px solid #E8E9EB", borderRadius:"10px", marginRight: " 50px",marginTop: "20px"}}>
            <Image style={{ width: "425px" ,border: "1px solid #E8E9EB", marginTop: "0px", marginBottom: "5px"  }} src={picture}/>
            <h4 style={{color: " #564256",}}>Today News</h4> 
            <h5>* GitHub research highlights the impact of AI on developers</h5>
            <h6>To gain deeper insights into how new AI tools and existing workflows impact the overall developer experience, GitHub partnered with Wakefield Research to survey 500 developers from enterprise companies across the US.</h6>
          </Col>

          <Col style={{border:"2px solid #E8E9EB",borderRadius:"10px", marginTop: "20px", marginBottom: "5px", justifyItems:"center"}}>
          <Form style={{ width: '800px', display:"inline-block", marginTop: "20px", }}>
            <h4 style={{color: " #564256",}} >Have any questions?</h4>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Control as="textarea" rows={6}></Form.Control>
                <Button variant="secondary">Post</Button>
              </Form.Group>
          </Form>
          </Col>
          <Row>
            <Col style={{border:"2px solid #E8E9EB",borderRadius:"10px", marginTop: "20px", marginBottom: "5px", justifyItems:"center"}}>
              <h5 style={{ }}> Our comprehensive guide to CSS flexbox layout. This complete guide explains everything about flexbox, focusing on all the different possible properties for the parent element (the flex container) and the child elements (the flex items). It also includes history, demos, patterns, and a browser support chart. </h5>
            </Col>
          </Row>

          <Row>
            <Col style={{border:"2px solid #E8E9EB",borderRadius:"10px", marginTop: "20px", marginBottom: "5px", justifyItems:"center"}}>
              <h4 style={{ color: " #564256"}}>Top 10 Secret Coding Tips to Make Your Programming Journey Easier</h4>
              <h5 style={{ }}> </h5>
            </Col>
          </Row>

          <Row>
            <Col style={{border:"2px solid #E8E9EB",borderRadius:"10px", marginTop: "20px", marginBottom: "5px", justifyItems:"center"}}>
              <h5 style={{ }}> Our comprehensive guide to CSS flexbox layout. This complete guide explains everything about flexbox, focusing on all the different possible properties for the parent element (the flex container) and the child elements (the flex items). It also includes history, demos, patterns, and a browser support chart. </h5>
            </Col>
          </Row>

          <h4 style={{color: " #564256", marginTop: "10px", marginBottom: "10px"}}> Resources </h4>

          <CardGroup fluid> 
            <Card>
              <Card.Body>
                <Card.Title style={{color: " #564256"}}>W3Schools</Card.Title>
                  <Card.Text>
                    W3Schools is optimized for learning and training. Examples might be simplified to improve reading and learning. Tutorials, references, and examples.
                  </Card.Text>
              </Card.Body>
              <Card.Footer>
                <Card.Link href='https://www.w3schools.com/'>W3Schools </Card.Link>
              </Card.Footer>
            </Card>

            <Card>
              <Card.Body>
                <Card.Title style={{color: " #564256"}}>Stack Overflow</Card.Title>
                  <Card.Text>
                    Empower Your Teams and Start Collaborating, Sharing Knowledge, & Scaling Productivity. Learn How Stack Overflow for Teams Can Empower Teams In Your Organization. Manage Data Sprawl. Data Stays Fresh. Attract & Retain Talent.{' '}
                  </Card.Text>
              </Card.Body>
              <Card.Footer>
                <Card.Link href='https://stackoverflow.com/'> Stack Overflow </Card.Link>
              </Card.Footer>
            </Card>

            <Card>
              <Card.Body>
                <Card.Title style={{color: " #564256"}}>MDN</Card.Title>
                  <Card.Text>
                    The MDN Web Docs site provides information about Open Web technologies including HTML, CSS, and APIs for both Web sites and progressive web apps.
                  </Card.Text>
              </Card.Body>
              <Card.Footer>
                <Card.Link href='https://developer.mozilla.org/en-US/'>MDN</Card.Link>
              </Card.Footer>
            </Card>
          </CardGroup>
        </Row>
        <Pagination style={{  marginTop: "20px", marginRight:"300px "}}>
          <Pagination.First />
          <Pagination.Prev />
          <Pagination.Item>{1}</Pagination.Item>
          <Pagination.Ellipsis />
         {/* <Pagination.Item>{10}</Pagination.Item>
          <Pagination.Item>{11}</Pagination.Item>
          <Pagination.Item active>{12}</Pagination.Item>
          <Pagination.Item>{13}</Pagination.Item>
          <Pagination.Item disabled>{14}</Pagination.Item>

         <Pagination.Ellipsis />
         <Pagination.Item>{20}</Pagination.Item>
         <Pagination.Next />
         <Pagination.Last /> */}
        </Pagination>
        <Row style={{ borderBottom: "1px solid #E8E9EB", display: "flex", justifyContent: "space-evenly"}} />
      </Container>
      <Navbar className="main-footer d-flex justify-content-center navbarContainer">
        <Nav>
          <Nav.Link href="#">About us</Nav.Link>
          <Nav.Link href="#">Contact us</Nav.Link>
          <Nav.Link href="#">Join us</Nav.Link>
        </Nav>
        <Nav className="justify-content-end">
          <Nav.Link href="">
            finish the footer here 
          </Nav.Link>
        </Nav>
      </Navbar>

    </div >
  );
}

export default Home;
