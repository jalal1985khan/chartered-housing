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
          original: '/assets/images/woodpicker/1-banner.jpeg',
          thumbnail: '/assets/images/woodpicker/1-banner.jpeg',
        },
        {
          original: '/assets/images/woodpicker/2-banner.webp',
          thumbnail: '/assets/images/woodpicker/2-banner.webp',
        },
        {
          original: '/assets/images/woodpicker/3-banner.webp',
          thumbnail: '/assets/images/woodpicker/3-banner.webp',
        },
        {
          original: '/assets/images/woodpicker/4-banner.webp',
          thumbnail: '/assets/images/woodpicker/4-banner.webp',
        },
      ];  
      


  return (
    <>
    <Yoast pageTitle="Chartered Woodpecker - Chartered Housing" pageDesc="Invest in residential plots in Kasaba Hobli near Devanahalli at Chartered Woodpecker The authority approved sites that are equipped with modern amenities Enquire now" pageKeyword="plots for sale in devanahalli, sites for sale in devanahalli, residential plots for sale in kasaba hobli"/>
   <Header/>
   <Container className="p-3 banner-img" fluid style={{ 
      backgroundImage: `url("/assets/images/about-banner.jpeg")` 
    }}>
<Container>
    <h2 className='text-white'>Ongoing Projects</h2>
    <nav aria-label="breadcrumb">
        <ol class="breadcrumb"><li class="breadcrumb-item">
            <Link href="/ongoing">Ongoing Projects</Link></li>
            <li class="breadcrumb-item active" aria-current="page">Chartered Woodpecker</li></ol></nav>

</Container>
    
        </Container>   
<Container className='mt-5 mb-5'>
<h2 className='mb-4'>Chartered Woodpecker</h2>
<p> Devanahalli – Dodaballapur Road</p>
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
<h4>Limited period offer: Book a plot and get a free gold coin .</h4>
<p className='fs-5'>Chartered Woodpecker is is all set to be developed in a locality tucked away from the hustle and bustle of the city, and promises to cater to all the requirements of a new plot owner in the city. Located just off Devanahalli- Dodaballapur Road, these 213 residential plots are comfortably spread across 13.70 acres.</p>
<p className='fs-5'>Each of these plots range from 1200 sq.ft to 2000 sq.ft., and offer a host of amenities like a swimming pool, club house with gym facilities, parks etc. The location is close to Nandi Hills, Devanahalli DC office, several high profile educational institutions, and more! These RERA approved plots have wide 30’ and 50’ access roads. Your search for some of the best plots in Bangalore ends here!</p>
<p className='fs-5 fw-bold'>Effort is to create eco-friendly and healthier atmosphere</p>
<p className='fs-5'>By selecting health-centric plants aiming to generate cleaner air & healthier environment</p>
<p className='fs-5'>By choosing plants with potential to trap minute allergic dust particles</p>
<p className='fs-5'>By selecting plants with the potential to reduce the decibel levels</p>

<p className='fs-5 fw-bold'>CHARTERED – stands for exceptional quality standards. A visit to our past projects will prove it</p>
<p className='fs-5'>High qualitylong lasting roads</p>
<p className='fs-5'>Thoughtfully planned underground services to minimise road digging</p>
<p className='fs-5'>Scientifically designed and well engineered drainage systems to avoid flooding</p>
</Container>
<Container className='pt-5'>
<Row><Col><h2>Highlights</h2></Col></Row>
<hr/>
<Row>
<Col><h6 className="fw-bold">Year Built: </h6>2019</Col>    
<Col></Col>    
</Row>
<hr/>
<Row>
<Col><h6 className="fw-bold">Type:</h6>Plot</Col>    
<Col><h6 className="fw-bold">Location:</h6> Devanahalli – Dodaballapur Road</Col>
</Row>
</Container>
<Container className='pt-5'>
<Row><Col><h2>Address</h2></Col><Col className="d-flex justify-content-end"><a href="https://maps.google.com/maps?q=Bidalur+Village+-+Kasaba+Hobli%2C+Devanahalli%2C+Bangaluru+rural%2C+Karnataka+562110.+Next+to+Chartered+Windsong%2FFireflies+%26+Godrej+Reserve+wood&zoom=14&size=512x512&maptype=roadmap&sensor=false" _blank className="eq-btn">Open On Google Map</a></Col></Row>
<hr/>
<p className='fs-5'><b>Address:</b> Bidalur Village - Kasaba Hobli, Devanahalli, Bangaluru rural, Karnataka 562110. Next to Chartered Windsong/Fireflies & Godrej Reserve wood</p>
<p className='fs-5'><b>Location:</b>  Devanahalli – Dodaballapur Road</p>
</Container>
<Container className='pt-5'>
<h2>Location Advantages</h2>
<hr/>
<Row>
<Col>
<Card className='a-card'>
      <Card.Img variant="top" className="amenities" src="/assets/images/woodpicker/woodpeckericon-03.png" />
      <Card.Body>
        <Card.Text className='fs-6'>Close to Devanahalli D C Office, Bangalore rural</Card.Text>
      </Card.Body>
    </Card>
</Col>
<Col>
<Card className='a-card'>
<Card.Img variant="top" className="amenities" src="/assets/images/woodpicker/woodpeckericon-04.png" />
      <Card.Body>
        <Card.Text className='fs-6'>Close to Godrej Reserve, a 100 acre residential plotted development</Card.Text>
      </Card.Body>
    </Card>
</Col>
<Col>
<Card className='a-card'>
<Card.Img variant="top" className="amenities" src="/assets/images/woodpicker/woodpeckericon-05.png" />
      <Card.Body>
        <Card.Text className='fs-6'>Swimming pool</Card.Text>
      </Card.Body>
    </Card>
</Col>
<Col>
<Card className='a-card'>
<Card.Img variant="top" className="amenities" src="/assets/images/woodpicker/woodpeckericon-06.png" />
      <Card.Body>
        <Card.Text className='fs-6'>Clubhouse with Gym and Party Area</Card.Text>
      </Card.Body>
    </Card>
</Col>
</Row>

<Row>
<Col>
<Card className='a-card'>
<Card.Img variant="top" className="amenities" src="/assets/images/woodpicker/woodpeckericon-07.png" />
      <Card.Body>
        <Card.Text className='fs-6'>Parks</Card.Text>
      </Card.Body>
    </Card>
</Col>  
<Col>
<Card className='a-card'>
<Card.Img variant="top" className="amenities" src="/assets/images/woodpicker/woodpeckericon-08.png" />
      <Card.Body>
        <Card.Text className='fs-6'>Close to Nandi Hills</Card.Text>
      </Card.Body>
    </Card>
</Col>  
<Col>
<Card className='a-card'>
<Card.Img variant="top" className="amenities" src="/assets/images/woodpicker/woodpeckericon-01.png" />
      <Card.Body>
        <Card.Text className='fs-6'>Just off Devanahalli – Dodaballapur Road Which is a 300 feet 6 lane Satellite Town Ring Road</Card.Text>
      </Card.Body>
    </Card>
</Col>  
<Col>
<Card className='a-card'>
<Card.Img variant="top" className="amenities" src="/assets/images/woodpicker/woodpeckericon-02.png" />
      <Card.Body>
        <Card.Text className='fs-6'>Educational Institutions near by Poorna Pragna Institute of Scientific Research, Gitam University and Govt. PU collage</Card.Text>
      </Card.Body>
    </Card>
</Col>    
    </Row>
</Container>
<Container className='pt-5'>
<h2>Layout Plans</h2>
<hr/>
<img src="/assets/images/woodpicker/woodpecker-layout.jpeg" className="img-width"/>

</Container>

</Container>



   <Footer/>
    </>
  )
}

export default about
