import {Breadcrumb,Button ,Container, Row, Col,Card} from 'react-bootstrap';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Image from 'next/image';
import Link from 'next/link';
import Yoast from '../components/Head';

function sitemap() {


  return (
    <>
    <Yoast pageTitle="Sitemap - Chartered Housing" />
   <Header/>
   <Container className="p-3 banner-img" fluid style={{ 
      backgroundImage: `url("/assets/images/careers-banner.jpeg")` 
    }}>
<Container>
    <h2 className='text-white'>Sitemap</h2>
    <nav aria-label="breadcrumb">
        <ol class="breadcrumb"><li class="breadcrumb-item">
            <Link href="/">Home</Link></li>
            <li class="breadcrumb-item active" aria-current="page">Sitemap</li></ol></nav>

</Container>
    
        </Container>   
<Container className='mt-5 mb-5'>
<h2>Projects</h2>
<br/>
<h3>Ongoing</h3>
<ul className="sitemap">
<li><Link href="/ongoing/apartments-in-bangalore-hummingbird" className="site_link">Chartered Hummingbird</Link></li>
<li><Link href="/completed/villas-in-bangalore-grasshopper-2" className="site_link">Chartered Grasshopper</Link></li>
<li><Link href="/completed/plot-in-bangalore-veda" className="site_link">Chartered Veda</Link></li>    
</ul>
<hr/>
<h3>Completed</h3>
<ul className="sitemap">
<li className="sitemapli li-right" ><Link href="/completed/plot-in-bangalore-fireflies" className="site_link">Chartered Fireflies</Link></li>
<li className="sitemapli li-right" ><Link href="/completed/plot-in-bangalore-windsong" className="site_link">Chartered Windsong</Link></li>
<li className="sitemapli li-right"><Link href="/completed/apartments-in-bangalore-jardin" className="site_link">Chartered Jardin</Link></li>    
<li className="sitemapli li-right"><Link href="/completed/apartments-in-bangalore-karthika" className="site_link">Chartered Karthika</Link></li>
<li className="sitemapli li-right"><Link href="/completed/apartments-in-bangalore-madhura" className="site_link">Chartered Madhura</Link></li>
<li className="sitemapli "><Link href="/completed/apartments-in-bangalore-beverly-hills" className="site_link">Chartered Beverly Hills</Link></li>
<li className="sitemapli li-right"><Link href="/completed/apartments-in-bangalore-samskruti" className="site_link">Chartered Samskruti</Link></li>
<li className="sitemapli li-right"><Link href="/completed/apartments-in-bangalore-coronet" className="site_link">Chartered Coronet</Link></li>
<li className="sitemapli li-right"><Link href="/completed/apartments-in-bangalore-gruha" className="site_link">Chartered Gruha</Link></li>
<li className="sitemapli li-right"><Link href="/completed/apartments-in-bangalore-rathna" className="site_link">Chartered Rathna</Link></li>
<li className="sitemapli li-right"><Link href="/completed/apartments-in-bangalore-raaga" className="site_link">Chartered Raaga</Link></li>
<li className="sitemapli li-right"><Link href="/completed/apartments-in-bangalore-kuteer" className="site_link">Chartered Kuteer</Link></li>
<li className="sitemapli li-right"><Link href="/completed/apartments-in-bangalore-ambaprasad" className="site_link">Chartered Ambaprasad</Link></li>
<li className="sitemapli li-right"><Link href="/completed/apartments-in-bangalore-alcove" className="site_link">Chartered Alcove</Link></li>
<li className="sitemapli li-right" ><Link href="/completed/apartments-in-bangalore-court" className="site_link">Chartered Court</Link></li>
<li className="sitemapli li-right"><Link href="/completed/apartments-in-bangalore-cottage" className="site_link">Chartered Cottage</Link></li>
<li className="sitemapli li-right"><Link href="/completed/apartments-in-bangalore-resort-2" className="site_link">Charter Resort 2</Link></li>
<li className="sitemapli li-right"><Link href="/completed/apartments-in-bangalore-resorts" className="site_link">Charter Resorts</Link></li>
</ul>
<hr/>
<h3>Completed</h3>
<ul className="sitemap">
<li><Link href="/bangalore/apartments-on-kanakapura-road" className="site_link">Kanakapura Road</Link></li>
<li><Link href="/bangalore/luxury-villas-in-electronic-city" className="site_link">Electronic City</Link></li>
<li><Link href="/bangalore/plots-in-nelamangala" className="site_link">Nelamangala</Link></li>
</ul>
<hr/>
<h3><Link href="/about" className="site_head">About</Link></h3>
<h3><Link href="/media" className="site_head">Media</Link></h3>
<h3><Link href="/csr-activities" className="site_head">CSR Activities</Link></h3>
<h3><Link href="/blogs" className="site_head">Blog</Link></h3>
<h3><Link href="/contact" className="site_head">Contact Us</Link></h3>
<h3><Link href="/careers" className="site_head">Careers</Link></h3>
<h3><Link href="/privacy-policy" className="site_head">Privacy Policy</Link></h3>

</Container>



   <Footer/>
    </>
  )
}

export default sitemap
