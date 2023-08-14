import {Breadcrumb,Button ,Container, Row, Col,Card} from 'react-bootstrap';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Image from 'next/image';
import Link from 'next/link';
import Yoast from '../components/Head';

function privacy() {


  return (
    <>
    <Yoast pageTitle="Privacy Policy - Chartered Housing" />
   <Header/>
   <Container className="p-3 banner-img" fluid style={{ 
      backgroundImage: `url("/assets/images/careers-banner.jpeg")` 
    }}>
<Container>
    <h2 className='text-white'>Privacy Policy</h2>
    <nav aria-label="breadcrumb">
        <ol class="breadcrumb"><li class="breadcrumb-item">
            <Link href="/">Home</Link></li>
            <li class="breadcrumb-item active" aria-current="page">Privacy Policy</li></ol></nav>

</Container>
    
        </Container>   
<Container className='mt-5 mb-5'>
<p className='fs-55'>This Privacy Policy governs the manner in which Chartered Housing collects, uses, maintains and discloses information collected from users of the website.</p>
<h3>Personal identification information:</h3>
<p className='fs-55'>We may collect personal identification information from Users in a variety of ways, including, when the Users visit our website, fill out a form, or via any other feature we make available. Users will be asked for their name, email address and phone number. Users may, however, visit our website anonymously and always refuse to supply personal identification information, except that it may prevent them from engaging in certain website related activities.</p>
<h3>Non-personal identification information:</h3>
<p className='fs-55'>We may collect non-personal identification information about Users whenever they interact with our website. Non-personal identification information may include the browser name, the type of computer and technical information.</p>
<h3>Web browser cookies:</h3>
<p className='fs-55'>Our website may use “cookies” to enhance the User experience. User’s web browser places cookies on their hard drive for record-keeping purposes and sometimes to track information about them. User may choose to set their web browser to refuse cookies, or to alert the Users when cookies are being sent. If they do so, note that some parts of the website may not function properly. This is a standard operating procedure that is used across the internet.</p>
<h3>How we use collected information:</h3>
<p className='fs-55 '>Chartered Housing may collect and use User’s personal information for the following purposes:</p>
<h3>To improve customer service by:</h3>
<ol className='fs-55 '>
 <li>Using feedback provided by the Users to improve our services</li>
 <li>Respond to User query</li>
 <li>Send periodic emails to Users</li>
</ol>
<h3>How we protect User’s information:</h3>
<p className='fs-55 '>We adopt appropriate data collection, storage and processing practices and security measures to protect against unauthorized access, alteration, disclosure or destruction of User’s personal information and data stored on our website. Note: As with data security, there are limits to its effectiveness and we indemnify ourselves in the event of an attack that is difficult to defend against. We also will do our best to retrieve any data that is lost as per available resources.</p>
<h3>Sharing personal information of Users:</h3>
<p className='fs-55 '>We do not sell or trade User’s personal identification information to others.</p>
<h3>Changes to this privacy policy:</h3>
<p className='fs-55 '>Chartered Housing will update this privacy policy at its sole discretion. Users are advised to check this page for any changes in the privacy policy and to stay informed about how the personal information of the Users is protected by us. The User’s hereby acknowledge and agree that it is their responsibility to review this privacy policy periodically and become aware of modifications.</p>
<h3>Your acceptance of these terms:</h3>
<p className='fs-55 '>By using this Site, the Users signify their acceptance of this policy as may be modified from time to time. The Users are advised not to access this site if they do not agree to our privacy policy. The abovementioned privacy policy shall be applicable for the information and data collected by our call centers as well.</p>
<h3>Contact us:</h3>
<p className='fs-55 '>If you have any questions about this Privacy Policy, the practices of this site, or your dealings with this site, please contact us at <a href="tel:9972012391">9972012391</a></p>

</Container>



   <Footer/>
    </>
  )
}

export default privacy
