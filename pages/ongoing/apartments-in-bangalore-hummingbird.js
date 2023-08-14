import {Breadcrumb,Button ,Container, Row, Col,Card} from 'react-bootstrap';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Image from 'next/image';
import Link from 'next/link';
import Yoast from '../../components/Head';
import ImageGallery from "react-image-gallery";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import "react-image-gallery/styles/css/image-gallery.css";

function about() {

    const images = [
        {
          original: '/assets/images/hummingbird/hummingbird-1.jpg',
          thumbnail: '/assets/images/hummingbird/hummingbird-1.jpg',
        },
        {
          original: '/assets/images/hummingbird/hummingbird-2.jpg',
          thumbnail: '/assets/images/hummingbird/hummingbird-2.jpg',
        },
        {
          original: '/assets/images/hummingbird/hummingbird-3.jpg',
          thumbnail: '/assets/images/hummingbird/hummingbird-3.jpg',
        },
        {
          original: '/assets/images/hummingbird/hummingbird-4.jpg',
          thumbnail: '/assets/images/hummingbird/hummingbird-4.jpg',
        },
        {
          original: '/assets/images/hummingbird/hummingbird-5.jpg',
          thumbnail: '/assets/images/hummingbird/hummingbird-5.jpg',
        },

      ];  
      


  return (
    <>
    <Yoast pageTitle="Chartered Hummingbird - Luxury Apartments On Kanakapura Road, Bangalore - Chartered Housing"  pageDesc="Buy 2 3 BHK flat in Bangalore at Chartered Hummingbird Apartments located in Kanakapura Road Close to public transportation, schools, hospitals, shopping malls and more" pageKeyword="luxury apartments in bangalore, flats for sale in bangalore, 2 bhk flat in bangalore"/>
   <Header/>
   <Container className="p-3 banner-img" fluid style={{ 
      backgroundImage: `url("/assets/images/about-banner.jpeg")` 
    }}>
<Container>
    <h2 className='text-white'>Ongoing Projects</h2>
    <nav aria-label="breadcrumb">
        <ol class="breadcrumb"><li class="breadcrumb-item">
            <Link href="/ongoing">Ongoing Projects</Link></li>
            <li class="breadcrumb-item active" aria-current="page">Chartered Hummingbird – Luxury Apartments On Kanakapura Road, Bangalore</li></ol></nav>

</Container>
    
        </Container>   
<Container className='mt-5 mb-5'>
<h2 className='mb-4'>Chartered Hummingbird – Luxury Apartments On Kanakapura Road, Bangalore</h2>
<p>Kanakapura Road</p>
</Container>
<Container fluid>

<ImageGallery
        items={images}
        showBullets={false}
        showIndex={false}
        showThumbnails={true}
        lazyLoad={false}
        showPlayButton={false}
        showNav={true}
        showFullscreenButton={true}
        thumbnailPosition={"bottom"}
        // renderLeftNav={renderLeftNav}
        // renderRightNav={renderRightNav}
      />

</Container>
<Container className='grey' fluid>
<Container className='pt-5'>
<h2>About</h2>
<hr/>
<h4>Chartered Hummingbird - Luxury Apartments On Kanakapura Road, Bangalore</h4>
<p className='fs-5'>Located on Kanakapura Road, close to the Metro Station, D-mart, renowned schools (Kumarans, BGS, JSS, and DPS) and hospitals (Apollo, Fortis, BGS) yet far from the hustle and bustle, Chartered Hummingbird consists of 2 & 3 BHK apartments. These apartments are well within reach, from an investment perspective too.</p>
<p className='fs-5'>Built on 1.5 acres of land with ample open spaces, the 117 apartments ranging from 1042-1513 sq.ft., offer all modern amenities. A gym, swimming pool, play area, clubhouse with multi-purpose hall and surrounding landscape gardens, ensure a luxury living for all age groups.</p>
<p className='fs-5'>Welcome to a new home in Kanakapura.</p>
</Container>
<Container className='pt-5'>
<Row><Col><h2>Highlights</h2></Col></Row>
<hr/>
<Row>
<Col><h6 className="fw-bold">Area:</h6> 1042-1513 sq. ft.</Col>    
<Col><h6 className="fw-bold">Area:</h6> 1042-1513 sq. ft.</Col>
<Col></Col>    
</Row>
<hr/>
<Row>
<Col><h6 className="fw-bold">Type:</h6>Apartment</Col>    
<Col><h6 className="fw-bold">Location:</h6> Kanakapura Road</Col>
<Col><h6 className="fw-bold">RERA Number:</h6>PRM/KA/RERA/1251/310/PR/170824/000049</Col>    
</Row>
</Container>
<Container className='pt-5'>
<Row><Col><h2>Address</h2></Col><Col className="d-flex justify-content-end"><a href="https://maps.google.com/maps?q=Balaji+Layout%2C+Vajarahalli%2C+BWSSB+Service+Rd%2C+Raghuvanahalli%2C+Bangalore+City+Municipal+Corporation+Layout%2C+Vajarahalli%2C+Karnataka+560062&zoom=14&size=512x512&maptype=roadmap&sensor=false" target='_blank' className="eq-btn">Open On Google Map</a></Col></Row>
<hr/>
<p className='fs-5'><b>Address:</b> Balaji Layout, Vajarahalli, BWSSB Service Rd, Raghuvanahalli, Bangalore City Municipal Corporation Layout, Vajarahalli, Karnataka 560062</p>
<p className='fs-5'><b>Location:</b> Kanakapura Road</p>
</Container>
<Container className='pt-5'>
<h2>Location Advantages</h2>
<hr/>
<Row>
<Col>
<Card className='a-card'>
      <Card.Img variant="top" className="amenities" src="/assets/images/amenities-01.png" />
      <Card.Body>
        <Card.Text className='fs-6'>About 950 meters from Metro station</Card.Text>
      </Card.Body>
    </Card>
</Col>
<Col>
<Card className='a-card'>
<Card.Img variant="top" className="amenities" src="/assets/images/amenities-04.png" />
      <Card.Body>
        <Card.Text className='fs-6'>Close to Nice Road: Connecting Electronic City, Global Village</Card.Text>
      </Card.Body>
    </Card>
</Col>
<Col>
<Card className='a-card'>
<Card.Img variant="top" className="amenities" src="/assets/images/amenities-05.png" />
      <Card.Body>
        <Card.Text className='fs-6'>Close to tourists spots: Sangama, Mekedatu, Wonderla</Card.Text>
      </Card.Body>
    </Card>
</Col>
<Col>
<Card className='a-card'>
<Card.Img variant="top" className="amenities" src="/assets/images/amenities-09.png" />
      <Card.Body>
        <Card.Text className='fs-6'>Close to DMart, Metro Cash, Carry</Card.Text>
      </Card.Body>
    </Card>
</Col>
</Row>

<Row>
<Col>
<Card className='a-card'>
<Card.Img variant="top" className="amenities" src="/assets/images/amenities-06.png" />
      <Card.Body>
        <Card.Text className='fs-6'>Close to schools: Kumarans, BGS, JSS, DAV, DPS</Card.Text>
      </Card.Body>
    </Card>
</Col>  
<Col>
<Card className='a-card'>
<Card.Img variant="top" className="amenities" src="/assets/images/amenities-02.png" />
      <Card.Body>
        <Card.Text className='fs-6'>Opposite a beautiful park</Card.Text>
      </Card.Body>
    </Card>
</Col>  
<Col>
<Card className='a-card'>
<Card.Img variant="top" className="amenities" src="/assets/images/amenities-07.png" />
      <Card.Body>
        <Card.Text className='fs-6'>Close to hospitals: Apollo, Fortis</Card.Text>
      </Card.Body>
    </Card>
</Col>  
<Col>
<Card className='a-card'>
<Card.Img variant="top" className="amenities" src="/assets/images/amenities-08.png" />
      <Card.Body>
        <Card.Text className='fs-6'>Close to Sri Sri Ravishankar Ashram and ISKON</Card.Text>
      </Card.Body>
    </Card>
</Col>    
    </Row>
</Container>
<Container className='pt-5'>
<h2>Specifications</h2>
<hr/>
<ul className="a-list fs-5">
<li ><img src="/assets/images/bathrooms.png" class="a-icon"/> Bathrooms: Sanitaryware & Fittings (CERA)</li>
<li><img src="/assets/images/electrical.png" class="a-icon" /> Electrical: Switches (Anchor) & Wires (KEI)</li>
<li><img src="/assets/images/flooring.png" class="a-icon" /> Flooring: Vitrified Tiles (RAK Ceramics)</li>
<li><img src="/assets/images/windows.png" class="a-icon" /> Window Glasses: Saint Gobain</li>
<li><img src="/assets/images/windows.png" class="a-icon" /> Windows: UPVC (LG Hausys Brand)</li>
</ul>

</Container>
<Container className='pt-5'>
<h2>Floor Plans</h2>
<hr/>
<img src="/assets/images/hummingbird/hummingbird-layout-plan.jpg" className="img-width"/>

</Container>

</Container>



   <Footer/>
    </>
  )
}

export default about
