import {Breadcrumb,Button ,Container, Row, Col,Card} from 'react-bootstrap';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Yoast from '../components/Head';
import Image from 'next/image';
import Link from 'next/link';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function about() {

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]

  };



  return (
    <>
    <Yoast pageTitle="About - Chartered Housing" pageDesc="Chartered Housing is among the top property developers in Bangalore Offering luxury 2BHKs, 3BHKs and villas in top localities of the city"/>
   <Header/>
   <Container className="p-3 banner-img" fluid style={{ 
      backgroundImage: `url("/assets/images/about-banner.jpeg")` 
    }}>
<Container>
    <h2 className='text-white'>About</h2>
    <nav aria-label="breadcrumb">
        <ol class="breadcrumb"><li class="breadcrumb-item">
            <Link href="/">Home</Link></li>
            <li class="breadcrumb-item active" aria-current="page">About</li></ol></nav>

</Container>
</Container>   
<Container className='mt-5 mb-5'>
<h2 className='text-center mb-4'>One Of The Leading Real Estate Builders In Bangalore</h2>
<p className='fs-55'>A growing list of delighted customers, many successful projects and some accolades, are proof enough that our passion continues to be rock-solid. </p>
<p className='fs-55'>While building homes is our passion, building a better world is our responsibility. We take corporate social responsibility seriously and contribute to the society and planet, as much as we can. Hoping to give back to the world that has given us everything, in the last three decades.</p>
<p className='fs-55'>As we set foot into another decade, we wish to aim higher, deliver better and delight more, by offering Quality through Transparency.</p>
</Container>
<Container>
<Row>
<Col sm={4}><Card className='members'>
      <Card.Img  src="/assets/images/teams/balakrishna.jpeg" />
      <Card.Body>
        <Card.Title className='chartered title'>Mr Balakrishna Hegde</Card.Title>
        <Card.Title className='position'>Founder and Managing Director</Card.Title>
        <Card.Text className='fs-55'>
         A banker, Mr. Balakrishna Hegde decided to take the plunge into the world of entrepreneurship. He founded Chartered Leasing – a financial company, in 1983. Six years on, he set foot in the real estate world with Chartered Housing. Today, it is an integral part of the Chartered Group, which includes Chartered Properties. Currently, he is an executive member of the National Governing Council of CREDAI.
        </Card.Text>
      </Card.Body>
    </Card></Col>   
    <Col sm={4}><Card className='members'>
    <Card.Img src="/assets/images/teams/bimal.jpeg" />
      <Card.Body>
        <Card.Title className='chartered title'>Mr Bimal Hegde</Card.Title>
        <Card.Title className='position'>Chief Executive Officer</Card.Title>
        <Card.Text className='fs-55'>
Bimal Hegde is the driving force behind Chartered Housing’s strong credibility. Joining the team in 2007, it took him just 8 years to make Chartered Housing a reputed name. Well versed in Architecture and Marketing, Bimal’s portfolio includes various specialties. As for recognition, he was chosen as President of the CREDAI Youth Wing (Karnataka Chapter). His recent initiatives include spearheading Chartered Hummingbird and Chartered Grasshoppers.
        </Card.Text>
      </Card.Body>
    </Card></Col>   
    <Col sm={4}><Card className='members'>
    <Card.Img src="/assets/images/teams/bhakti.jpeg" />
      <Card.Body>
        <Card.Title className='chartered title'>Ms Bhakti Hegde Shetty</Card.Title>
        <Card.Title className='position'>Director</Card.Title>
        <Card.Text className='fs-55'>
Spearheading Chartered Interiors – a division that offers a complete dream-home experience, Ms. Bhakti has helped Chartered Interiors reach new heights. Dynamic in her approach, she’s recognized for consumer understanding. Other skills include eye-for-detail, craft, quality enhancement and maintaining relationships. What’s more, her experience, knowledge, and eagerness to know about the latest trends in interior design have propelled Chartered Interiors to great heights.
        </Card.Text>
      </Card.Body>
    </Card></Col>   
        
</Row>    
</Container>
<Container className='mt-5'>
<h3 className='text-center fs-2'>Chartered Housing <span className='chartered'>Vision And Mission</span></h3> 
<p className='fs-5'>After a journey of three decades, multiple challenging projects, and dealing with the volatile real estate market, we believe a strong foundation results in success and excellence.</p>   
<h4 className='fs-2 chartered'>Vision</h4>
<ul>
    <li className='fs-5'>To be recognised among the leading real estate firms in the country by building quality residential and commercial structures.</li>
</ul>
<h4 className='fs-2 chartered'>Mission</h4>
<ul>
<li className='fs-5'>To strive and build high-quality residential structures and pursue commercial spaces as well.</li>
<li className='fs-5'>To offer the best services for sale and lease.</li>
<li className='fs-5'>To work towards enhancing the quality by incorporating proper systems.</li>
<li className='fs-5'>To grow and expand our reach to other cities outside Bangalore.</li>
<li className='fs-5'>To diversify into the Hospitality sector and establish ourselves in Infrastructure development.</li>
<li className='fs-5'>To look into backward integration in construction-related products.</li>
</ul>
</Container>
<Container className='mt-5'>
 <h3 className='text-center'>Our <span className='chartered'>Awards</span></h3>   
 <p className='fs-5'>Our work and customer delight have been our biggest inspiration. But when the journey spans 30 years, rewards are bound to come your way. Ours came in many ways, one of which are the multiple awards we’ve won over the years.</p>

<Row>
<Col sm={3} className="mb-3">
<Card className='text-center align-items-center a-height pt-3'>
      <Card.Img variant="top" className="rounded-circle awards" src="/assets/images/charterd-veda-award.jpeg"/>
      <Card.Body>
        <Card.Title className='fs-6 fw-bold'>Winner of CARE AWARDS 2019 by Credai</Card.Title>
        <Card.Text>Chartered Veda - Best Plotted Development Karnataka 2019</Card.Text>
      </Card.Body>
    </Card>
</Col>
<Col sm={3} className="mb-3">
<Card className='text-center align-items-center a-height pt-3'>
<Card.Img variant="top" className="rounded-circle awards" src="/assets/images/credai.png" />
      <Card.Body>
        <Card.Title className='fs-6 fw-bold'>Winner of CREDAI Real Estate Award(Karnataka)</Card.Title>
        <Card.Text>2015 for the "BEST plotted Development" - Chartered fireflies</Card.Text>
      </Card.Body>
    </Card>
</Col>
<Col sm={3} className="mb-3">
<Card className='text-center align-items-center a-height pt-3'>
<Card.Img variant="top" className="rounded-circle awards" src="/assets/images/ndtv-profit.png" />
      <Card.Body>
        <Card.Title className='fs-6 fw-bold'>Winner of NDTV profit & Brand Academy Award for the</Card.Title>
        <Card.Text>Leading Residential Real Estate Developer (Bangalore)" for the year 2015</Card.Text>
      </Card.Body>
    </Card>
</Col>
<Col sm={3} className="mb-3">
<Card className='text-center align-items-center a-height pt-3'>
<Card.Img variant="top" className="rounded-circle awards" src="/assets/images/awards.png" />
      <Card.Body>
        <Card.Title className='fs-6 fw-bold'>Our Managing Director Mr. A Balakrishna Hegde</Card.Title>
        <Card.Text>felicitated with the "Scroll of Honour" by Reality plus conclave & Awards, 2015</Card.Text>
      </Card.Body>
    </Card>
</Col>
</Row>

</Container>
<Container className='mt-5'>
<h3 className='text-center fs-1'>Our <span className='chartered'>Testimonials</span></h3>   
 <p className='fs-5'>It gives us immense satisfaction when our work is appreciated. We feel good that we are surrounded by people who constantly vouch for us, and that gives us the energy to create something better and even bigger.</p>
 <div className="mainContainer container text-center mt-5">
        <Slider {...settings}>
          <div className="container">
          <h3 className='chartered'>Mr V Mahadevan</h3>
          <p>Consultant</p>
          <p>CHARTERED Sannidhi</p>
          <p>Choosing a “Chartered-built” apartment for my residence, is one of the wisest decisions I have made.</p>
          </div>
          <div className="container">
          <h3 className='chartered'>Mr Srishchandra Arya</h3>
          <p>Technocrat</p>
          <p>CHARTERED AMBAPRASAD</p>
          <p>I admire and salute Chartered for their commitment to quality and trustworthiness.</p>
          </div>
          <div className="container">
          <h3 className='chartered'>Prof S K Bhagawan</h3>
          <p>Principal Consultant</p>
          <p>CHARTERED KUTEER</p>
          <p>High in quality and very professional in service. Highly satisfying. Creates pleasurable places to live in.</p>
          </div>
        
        </Slider>
      </div>

</Container>


   <Footer/>
    </>
  )
}

export default about
