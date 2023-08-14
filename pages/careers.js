import {Breadcrumb,Button ,Container, Row, Col,Card} from 'react-bootstrap';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Image from 'next/image';
import Link from 'next/link';
import Yoast from '../components/Head';

function careers() {


  return (
    <>
    <Yoast pageTitle="Careers - Chartered Housing" />
   <Header/>
   <Container className="p-3 banner-img" fluid style={{ 
      backgroundImage: `url("/assets/images/careers-banner.jpeg")` 
    }}>
<Container>
    <h2 className='text-white'>Careers</h2>
    <nav aria-label="breadcrumb">
        <ol class="breadcrumb"><li class="breadcrumb-item">
            <Link href="/">Home</Link></li>
            <li class="breadcrumb-item active" aria-current="page">Careers</li></ol></nav>

</Container>
    
        </Container>   
<Container className='mt-5 mb-5'>
<p className='fs-55'>In 25 years, we’ve built homes for the world and a remarkable reputation for ourselves. Simply put, we’ve grown tremendously. With us, many careers have taken flight and we’re glad they did.</p>
<p className='fs-55'>Work ethics, professionalism, commitment and the passion to outdo ourselves; these beliefs have contributed to our growth.</p>
<p className='fs-55'>Though we’re serious about work, we take life easy – it’s a balance that helps us win. We’re a bunch of young and committed professionals working against the clock to set new benchmarks. Not for the world but for ourselves. And together, we’ve created a work environment that offers a lot of learning and some fun too.</p>
<p className='fs-55'>If you think real estate is your passion and you’re prepared to join us in as we move to the next level, talk to us.</p>
<p className='fs-55 fw-bold'>We are currently looking for:</p>
<p className='fs-55'>– Sales Executive</p>
<p className='fs-55'>– Sales Manager</p>
<p className='fs-55'>– Pre-sales Officer</p>
<p className='fs-55'>Send your resume to <span className="chartered">info@charteredhousing.com</span></p>
</Container>



   <Footer/>
    </>
  )
}

export default careers
