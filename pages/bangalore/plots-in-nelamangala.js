import {Breadcrumb,Button ,Container, Row, Col,Card} from 'react-bootstrap';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Image from 'next/image';
import Link from 'next/link';
import Yoast from '../../components/Head';

function bangalore() {
  return (
    <>
    <Yoast pageTitle="Plots In Nelamangala - Chartered Housing" pageDesc="Find the best plots in Nelamangala at Chartered Housing Authority approved sites that are in a prime locality, close proximity to public transportation, shopping complexes and other amenities" pageKeyword="plots in nelamangala, sites for sale in nelamangala"/>
      <Header/>
      <Container className="p-3 banner-img" fluid style={{ 
      backgroundImage: `url("/assets/images/nelamangala-banner.jpeg")` 
    }}>
<Container>
    <h2 className='text-white'>Nelamangala</h2>
    <nav aria-label="breadcrumb">
        <ol class="breadcrumb"><li class="breadcrumb-item">
            <Link href="/">Home</Link></li>
            <li class="breadcrumb-item active" aria-current="page">Nelamangala</li></ol></nav>

</Container>
</Container> 
<Container className='mt-5 mb-5'>
<h2 className='text-center mb-4'>Plots In Nelamangala</h2>
<p className='fs-5'>Today, the city of Bangalore is expanding and one of the most promising localities is Nelamangala. Located close to two National Highways, NH-48 (Bangalore-Mangalore) and NH-4 (Mumbai-Chennai), Nelamanagala has developed a lot in a short span of time.</p>
<p className='fs-5'>The expressway project between Nelamangala and Yeshwantpur has also fuelled more developments and helped ease the strain on the roadways. This project has also helped connect the area to the airport and has significantly reduced the travel time. It has also helped attract industrial developments and the government has identified the area as having the potential to house small-scale industry projects. It is already home to a number of warehouses.</p>
<p className='fs-5'>The value of land in Nelamangala has already begun to show steady appreciation. Many developers have chosen the locality for their next projects as it offers easy connectivity to other areas, schools, colleges and industrial areas. Chartered Housing offers plots in Nelamangala, in an eco-friendly environment, and with all modern amenities. The area offers pleasant green cover unlike other areas in Bangalore and by investing in these plots in Bangalore, enjoy easy access to the city while enjoying the peace and quiet that comes with the locality.</p>

<Container>
<Row>
<Col sm={4}><Image src="/assets/images/nelamangala.jpeg" width={400} height={200}/></Col>    
<Col>
<h3>Chartered Veda</h3>
<p>A plotted community set in Nelamangala town, Chartered Veda consists of 188 plots ranging from 1200 - 1500 sq.ft, in a Sital layout.</p>
<Link href="/completed/plot-in-bangalore-veda" className='readmore'>read more</Link>
</Col>    
</Row>

</Container>

</Container>  
      <Footer/>
    </>
  )
}

export default bangalore
