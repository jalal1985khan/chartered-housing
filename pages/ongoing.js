import {Breadcrumb,Button ,Container, Row, Col,Card,Badge} from 'react-bootstrap';
import Footer from '../components/Footer'
import Header from '../components/Header'
import Image from 'next/image'
import Link from 'next/link';
import Yoast from '../components/Head';
import ImageGallery from "react-image-gallery";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import "react-image-gallery/styles/css/image-gallery.css";

function ongoing() {

  return (
    <>
    <Yoast pageTitle="Ongoing Projects - Chartered Housing" pageDesc="Looking for your dream luxury apartments in Bangalore Find a comfortable abode that is close to all amenities that is well within your reach at Chartered Housing" pageKeyword="best apartments in bangalore, premium villas in bangalore, best flats in bangalore" />
   <Header/>
   <Container className="p-3 banner-img" fluid style={{ 
      backgroundImage: `url("/assets/images/ongoing-banner.jpeg")` 
    }}>
<Container>
    <h2 className='text-white'>Ongoing Projects</h2>
    <nav aria-label="breadcrumb">
        <ol class="breadcrumb"><li class="breadcrumb-item">
            <Link href="/">Ongoing Projects</Link></li>
            <li class="breadcrumb-item active" aria-current="page">Ongoing Projects</li></ol></nav>

</Container>
    
        </Container>   
<Container className='mt-5 mb-5'>
<h2 className='mb-4'>Ongoing Projects</h2>
<p className='fs-5'>Our list of projects is a balanced mix of villas, apartments and plots. All our ongoing residential projects in Bangalore offer the best of quality. Not to mention, come with transparent documentation. So, whether its villas, plots or apartments in Bangalore, you can expect the best of amenities and location with each of our projects.</p>
</Container>
<Container className='properties'>
<h2>Our Properties</h2>
<Row>
        <Col md={6} className="mt-3">
  <Card>
      <Card.Img variant="top" src="assets/images/woodpeckericon-09.png" />
      <Card.Body>
      <Badge bg="secondary">Plot</Badge>
        <Card.Title>Chartered Woodpecker<br/><br></br><br></br></Card.Title>
        <Card.Text>Devanahalli – Dodaballapur Road</Card.Text>
        <hr/>
        <Row>
<Col>
<p>Year</p>
<p>2019</p>
</Col>
</Row>
        <Link href="/ongoing/chartered-woodpecker" className="k-btn btn text-white">know more</Link>
      </Card.Body>
    </Card> 
    </Col>
    <Col md={6} className="mt-3">
    <Card>
    <Card.Img variant="top" src="assets/images/hummingbird.jpeg" />
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
    </Row>

</Container>





   <Footer/>
    </>
  )
}

export default ongoing
