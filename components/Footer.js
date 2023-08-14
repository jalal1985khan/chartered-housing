import {Container} from 'react-bootstrap';
import Link from 'next/link';
const Footer = () => {
  return (
    <>
    <Container className="footer" fluid>
<Container className="text-center">
<ul className="footer-list">
<li><Link href="/media">Media</Link></li> 
<li><Link href="/csr-activities">CSR Activities</Link></li> 
<li><Link href="/blogs">Blog</Link></li> 
<li><Link href="/careers">Careers</Link></li> 
<li><Link href="/privacy-policy">Privacy Policy</Link></li> 
<li><Link href="/sitemap">Sitemap</Link></li>
<li><Link href="/disclaimer">Disclaimer</Link></li>      
</ul>
<Container>
    <p className="f-text">27, Victoria Road, Bangalore - 560047</p>
    <p className="f-text">Phone <a href="tel:+91-80 42450000">+91-80 42450000</a></p>
    <p className="f-text">Email: <a href="mailto:info@charteredhousing.com">info@charteredhousing.com</a></p>
    </Container>
</Container>
<Container className="text-center pb-5">
{(new Date().getFullYear())}. Chartered Housing Private Limited
</Container>
    </Container>
    </>
  )
}

export default Footer
