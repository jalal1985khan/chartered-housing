import {Breadcrumb,Button ,Container, Row, Col,Card} from 'react-bootstrap';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Image from 'next/image';
import Link from 'next/link';
import Yoast from '../../components/Head';

function bangalore() {
  return (
    <>
    <Yoast pageTitle="Villas In Electronic City - Chartered Housing" pageDesc="A wide range of villas in Electronic City, Bangalore from Chartered Housing Sporting a stunning architecture, located in a prime area of the city and close to all necessary amenities" pageKeyword="villas for sale in electronic city, villas in electronic city bangalore"/>
      <Header/>
      <Container className="p-3 banner-img" fluid style={{ 
      backgroundImage: `url("/assets/images/ec-banner.jpeg")` 
    }}>
<Container>
    <h2 className='text-white'>Electronic City</h2>
    <nav aria-label="breadcrumb">
        <ol class="breadcrumb"><li class="breadcrumb-item">
            <Link href="/">Home</Link></li>
            <li class="breadcrumb-item active" aria-current="page">Electronic City</li></ol></nav>

</Container>
</Container> 
<Container className='mt-5 mb-5'>
<h2 className='text-center mb-4'>Villas In Electronic City</h2>
<p className='fs-5'>Electronics City, known as the Information Technology Hub of Bangalore, is strategically located between Koramangala and Whitefield. Home to over 200 IT/ITES companies, the locale is well-connected to the rest of Bangalore. Known for its reputed schools like DPS, VIBGYOR and Ebenezer International and renowned hospitals like Sparsh, Narayana, and Fortis, Electronics City has the best of everything. When it comes to shopping centers, restaurants and malls, some of the city’s best are located in and near Electronics City. The presence of automobile showrooms of Audi, BMW and Porsche add to the glamour of the area.</p>
<p className='fs-5'>Offers the advantage of the proximity to workplaces, Electronics City ideal for those who work in the IT hubs nearby. It promises the best of homes, both apartments, and villas, as it is a preferred locale for many real estate players. Among the top row villas in Electronics City is Chartered Grasshopper – a 3&4 BHK row villa project, consisting of just 56 units amidst 5-acres of serene surroundings.</p>


<Container>
<Row>
<Col sm={4}><Image src="/assets/images/grasshopper.jpeg" width={400} height={200}/></Col>    
<Col>
<h3>Chartered Grasshopper</h3>
<p>Among the top row villas in Electronics City is Chartered Grasshopper - a 3&4 BHK row villa project, consisting of just 56 units amidst 5-acres of serene surroundings.</p>
<Link href="/completed/villas-in-bangalore-grasshopper-2" className='readmore'>read more</Link>
</Col>    
</Row>

</Container>

</Container>  
      <Footer/>
    </>
  )
}

export default bangalore
