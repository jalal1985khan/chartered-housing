import {Breadcrumb,Button ,Container, Row, Col,Card} from 'react-bootstrap';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Image from 'next/image';
import Link from 'next/link';
import Yoast from '../components/Head';

function disclaimer() {


  return (
    <>
    <Yoast pageTitle="Disclaimer - Chartered Housing" />
   <Header/>
   <Container className="p-3 banner-img" fluid style={{ 
      backgroundImage: `url("/assets/images/careers-banner.jpeg")` 
    }}>
<Container>
    <h2 className='text-white'>Disclaimer</h2>
    <nav aria-label="breadcrumb">
        <ol class="breadcrumb"><li class="breadcrumb-item">
            <Link href="/">Home</Link></li>
            <li class="breadcrumb-item active" aria-current="page">Disclaimer</li></ol></nav>

</Container>
    
        </Container>   
<Container className='mt-5 mb-5'>
<p className='fs-55'>
By accessing this website, you unconditionally accept this disclaimer without limitation or qualification.</p>
<p className='fs-55'>The content on the Chartered Housing website is intended solely for general information, and isn’t to be construed, under any circumstances, by implication or otherwise, as an advertisement and/or an offer to sell or a solicitation to buy or sell or trade. In no event should the content of this website be construed as an expressed or implied promise, guarantee or implication by or from any of the organisation’s officers, directors, employees, affiliates or other agents.</p>
<p className='fs-55'>While the organisation ensures that the content of this website is regularly updated, it does not accept liability for its website being accurate, complete or up-to-date, or for the contents of external links. The project brochures, specifications, designs, floor plans and rendered images/visualizations provided in the website contain forward-looking information and plans that involve risks, uncertainties and assumptions. If such risks or uncertainties materialize or such assumptions prove incorrect, the results of this organisation and its consolidated subsidiaries could differ significantly from those expressed or implied by such forward-looking information and assumptions. This organisation assumes no obligation or undertaking to update or revise the information herein. The actual photographs of homes, products and projects contained in the website are from the past and they are not an indication, implication, promise or guarantee towards the future results of the organisation. The organisation is not responsible for direct, indirect, incidental or consequential loss or damages arising out of, resulting from, or any way connected to the use of the information in this website.</p>
</Container>



   <Footer/>
    </>
  )
}

export default disclaimer
