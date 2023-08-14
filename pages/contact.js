import { useState} from 'react';
import axios from "axios";
import {Container, Row, Col} from 'react-bootstrap';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Yoast from '../components/Head';
import Link from 'next/link';
import configData from "../config.json";
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function contact() {

    const [post, setPost] = useState(null);
    const [yourName, setName] = useState(null);
    const [yourEmail, setEmail] = useState(null);
    const [yourSubject, setSubject] = useState(null);
    const [yourMessage, setMessage] = useState(null);
    const [spinner, setSpinner] = useState(false);
    const [loading, setLoading] = useState(false);
    const [disable, setDisabled] = useState(false);
    const [errrname, setErrName] = useState(null);
    const [errremail, setErrEmail] = useState(null);
    const [errrsubject, setErrSubject] = useState(null);
    const [success, setSuccess] = useState(true);
    const [button, setButton] = useState(true);

    const handleSubmit = event => {
        // 👇️ prevent page refresh
        event.preventDefault();

    };

    function createPost() {

        setSpinner(true);
        setButton(false);
        axios.post(`${configData.SERVER_FROM}contact-form-7/v1/contact-forms/3656/feedback`,
        //axios.post(`https://chartered.ivistasolutions.biz/wp-json/contact-form-7/v1/contact-forms/3656/feedback`,
            {
                'your-name': 'Jalal',
                'your-email': 'jl@ivistasolutions.com',
                'your-subject': 'test',
                'your-message': 'test',
            }, {
            headers: {
                "Content-Type": 'multipart/form-data',
            }

        })
            .then((response) => {
                setPost(response.data.message);
                
                // setErrMessage(response.data['invalid_fields'][1]['message']);
                const msg = response.data.status;
            //     if (msg == 'mail_sent') {
            //         setLoading(true);
            //         setSpinner(false);
            //         setSuccess(false);
            //         setButton(true);

            //     }
            //     else{
            //     setErrName(response.data['invalid_fields'][0]['message']);
            //     setErrEmail(response.data['invalid_fields'][1]['message']);
            //     setErrSubject(response.data['invalid_fields'][2]['message']);
            //     setSpinner(false);
            //     setButton(true);
            // }
                console.log(response.data)
            });
    }


  return (
    <>
    <Yoast pageTitle="Contact - Chartered Housing" pageDesc="Contact Chartered Housing property builder for apartments and villas Properties in Bangalore, India" />
   <Header/>
   <Container className="p-3 banner-img" fluid style={{ 
      backgroundImage: `url("/assets/images/about-banner.jpeg")` 
    }}>
<Container>
    <h2 className='text-white'>Contact Us</h2>
    <nav aria-label="breadcrumb">
        <ol className="breadcrumb"><li className="breadcrumb-item">
            <Link href="/">Home</Link></li>
            <li className="breadcrumb-item active" aria-current="page">Contact Us</li></ol></nav>
</Container>
    
</Container>
<Container className="contact-bg  pb-5" fluid>
<Container className='pt-5'>
<h2 className='text-center mb-4'>Get In Touch With Chartered Housing</h2>
<p className='fs-5'>Whether it’s feedback or relationship building, we are always open to it. For queries or details on the development of our projects, get in touch with us.</p>
</Container>
<Container>
<Row>
<Col sm={7} className='white'>
<h3>Send Us Message</h3>
{success &&
                    <form
                        onSubmit={handleSubmit}
                        style={{ margin: '20px' }}>

                        <div className="mb-3 mt-3">
                            {/* <label htmlfor="yourName" className="form-label text-white"><span className="errors">*</span>Your Name:</label> */}
                            <input
                                //required
                                type='text'
                                className="form-control"
                                id="yourName"
                                name='yourName'
                                placeholder="Ravi Kumar"
                                value={yourName}
                                onChange={event => setName(event.target.value)}
                            />
                            <span className="r_error">{errrname}</span>
                        </div>

                        <div className="mb-3 mt-3">
                            {/* <label htmlfor="yourEmail" className="form-label text-white"><span className="errors">*</span>Your Email:</label> */}
                            <input
                                //required
                                type='email'
                                className="form-control"
                                id="yourEmail"
                                name='yourEmail'
                                placeholder="test@test.com"
                                value={yourEmail}
                                onChange={event => setEmail(event.target.value)}

                            /><span className="r_error">{errremail}</span></div>

                            <div className="mb-3 mt-3">
                                {/* <label htmlfor="yourSubject" className="form-label text-white"><span className="errors">*</span>Subject:</label> */}
                                <input
                                    //required
                                    type='text'
                                    className="form-control"
                                    id="yourSubject"
                                    name='yourSubject'
                                    placeholder="your subject"
                                    value={yourSubject}
                                    onChange={event => setSubject(event.target.value)}

                                /><span className="r_error">{errrsubject}</span>
                                </div>

                                <div className="mb-3 mt-3">
                                {/* <label htmlfor="yourMessage" className="form-label text-white"><span className="errors">*</span>Message:</label> */}
                                <textarea
                                    //required
                                    rows="4" 
                                    cols="50"
                                    className="form-control"
                                    id="yourMessage"
                                    name='yourMessage'
                                    placeholder="your Message"
                                    value={yourMessage}
                                    onChange={event => setMessage(event.target.value)}

                                />
                                </div>
                                {spinner && <div className="spinner-border text-light" role="status"/>}
                                {button && <button type='submit' className='btn eq-btn' onClick={createPost}>Send Message</button> }
                            

                    </form>
                   }
                   {loading && <h1 className="reg-success mt-4">{post}</h1>}
                   {post}
</Col>   
<Col sm={4} className='white'>
<h3>Get In Touch</h3>
<Container >
<Row>
<Col sm={2} className="d-flex align-items-center"><Image src="/assets/images/location.png" width={50} height={40} alt="Chartered Housing (P) Ltd., 27, Victoria Road, Bangalore – 560047"/></Col>
<Col><p>Chartered Housing (P) Ltd., 27, Victoria Road, Bangalore – 560047</p></Col>    
</Row>
<Row>
<Col sm={2} className="d-flex align-items-center"><Image src="/assets/images/tel.png" width={50} height={40} alt="080-42450017"/></Col>
<Col><p>080-42450017</p></Col>    
</Row>
<Row>
<Col sm={2} className="d-flex align-items-center"><Image src="/assets/images/phone.png" width={42} height={40} alt="080-42450017"/></Col>
<Col><p>+91-80 42450000</p><p>+91 8660697659</p></Col>    
</Row>    
<Row>
<Col sm={2} className="d-flex align-items-center"><Image src="/assets/images/mail.png" width={42} height={30} alt="sales@charteredhousing.com"/></Col>
<Col><p>sales@charteredhousing.com</p><p>info@charteredhousing.com</p></Col>    
</Row>
</Container>    
</Col>        
</Row>    
</Container>
</Container>   
   <Footer/>
    </>
  )
}

export default contact
