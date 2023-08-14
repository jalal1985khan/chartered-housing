import {Button ,Container,Card,Badge,Row ,Col} from 'react-bootstrap';
import Link from 'next/link';
import Image from 'next/image';

function HomeProperties() {
  return (
    <>
    <Container className="mt-5 properties">
      <h2 className="text-center">Our Ongoing Properties</h2>
      <Row>
        <Col md={6} className="mt-3">
  <Card>
              <Image
                class="card-img-top"
                src="/assets/images/hummingbird.jpeg"
                width="500"
                height="250"
              />
      <Card.Body>
      <Badge bg="secondary">Apartment</Badge>
        <Card.Title>Chartered Hummingbird – Luxury Apartments On Kanakapura Road, Bangalore</Card.Title>
        <Card.Text>Kanakapura Road 
        </Card.Text>
        <hr/>
        <Row>
<Col>
<p>Area</p>
<p>1042-1513 sq. ft.</p>
</Col>
<Col>
<p>Bedrooms</p>
<p>2/3 BHK</p>
</Col>
        </Row>
        <Link href="/ongoing/apartments-in-bangalore-hummingbird" className="k-btn btn text-white">know more</Link>
      </Card.Body>
    </Card> 
    </Col>
    <Col md={6} className="mt-3">
            <Card>
              <Image
                class="card-img-top"
                src="/assets/images/woodpeckericon-09.png"
                width="500"
                height="250"
              />
      
      <Card.Body>
      <Badge bg="secondary">Plot</Badge>
        <Card.Title style={{height:70}}>Chartered Woodpecker</Card.Title>
        <Card.Text>Devanahalli – Dodaballapur Road</Card.Text>
        <hr/>
        <Row>
<Col>
<p>Year Built</p>
<p>2019</p>
</Col>
<Col>
</Col>
        </Row>
        <Link href="/ongoing/chartered-woodpecker" className="k-btn btn text-white">know more</Link>
      </Card.Body>
    </Card>  
    </Col>
    </Row>   
    </Container>
    </>
  )
}

export default HomeProperties
