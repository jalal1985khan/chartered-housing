import {Breadcrumb,Button ,Container, Row, Col,Card} from 'react-bootstrap';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Image from 'next/image';
import Link from 'next/link';
import Yoast from '../../components/Head';

function bangalore() {
  return (
    <>
    <Yoast pageTitle="Apartments On Kanakapura Road - Chartered Housing" pageDesc="Affluent residential apartments in Kanakpura road that are equipped with modern amenities and close to local services Chartered Housing offers well thought of, and cozy housing option" pageKeyword="apartments for sale in kanakapura road, flats in kanakapura road"/>
      <Header/>
      <Container className="p-3 banner-img" fluid style={{ 
      backgroundImage: `url("/assets/images/kanakapura-banner.jpeg")` 
    }}>
<Container>
    <h2 className='text-white'>Kanakapura Road</h2>
    <nav aria-label="breadcrumb">
        <ol class="breadcrumb"><li class="breadcrumb-item">
            <Link href="/">Home</Link></li>
            <li class="breadcrumb-item active" aria-current="page">Kanakapura Road</li></ol></nav>

</Container>
</Container> 
<Container className='mt-5 mb-5'>
<h2 className='text-center mb-4'>Apartments On Kanakapura Road</h2>
<p className='fs-5'>Located towards the south of Bangalore, Kanakapura Road has developed to become a self-sufficient location, in the last few years – making it a preferred choice for real estate developers and homebuyers. Schools including Kumarans, BGS, JSS & DPS and hospitals like Apollo, Fortis, and BGS are some renowned names in this locale. A host of supermarkets ranging from Metro to D-Mart and Family Mart, situated within the vicinity of the residential areas add more value. Adventure sports centers like Dirt Mania and Raceway Motorsports are located in close proximity to the region.</p>
<p className='fs-5'>As for connectivity, Kanakapura Road is well-connected to the NICE Ring Road and Outer Ring Road. The upcoming metro promises to make commuting across the city, easy. Access to the IT hubs of Bannerghatta Road, Sarjapur Outer Ring Road & Electronic City and to well-developed localities like JP Nagar, Banashankari, and Jayanagar, make Kanakapura road an ideal location.</p>
<p className='fs-5'>Chartered Hummingbird consists of 2&3 BHK apartments, located on Kanakapura Road. Built on 1.5 acres of land with ample open spaces, the 118 apartments ranging from 1042-1513 sq.ft., offer all modern amenities.</p>

<Container>
  <hr/>
<Row>
<Col sm={4}><Image src="/assets/images/kanakapura-road.jpeg" width={400} height={200}/></Col>    
<Col>
<h3>Chartered Hummingbird</h3>
<p>Chartered Hummingbird consists of 2&3 BHK apartments, located on Kanakapura Road. Built on 1.5 acres of land with ample open spaces, the 118 apartments ranging from 1042-1513 sq.ft., offer all modern amenities.</p>
<Link href="/ongoing/apartments-in-bangalore-hummingbird" className='readmore'>read more</Link>
</Col>    
</Row>

</Container>

</Container>  
      <Footer/>
    </>
  )
}

export default bangalore
