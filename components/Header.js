import {NavDropdown,Navbar,Nav,Form,Button ,Container} from 'react-bootstrap';
import Link from 'next/link';
import React, { useState } from 'react';
import configData from "../config.json";
import axios from "axios";

function NavScrollExample() {

  const [showDiv, setShowDiv] = useState(false);
    const [yourName, setName] = useState(null);
    const [yourEmail, setEmail] = useState(null);
    const [yourSubject, setSubject] = useState(null);
    const [yourMessage, setMessage] = useState(null);
    const [spinner, setSpinner] = useState(false);
    const [button, setButton] = useState(true);
    const [selectedOption, setSelectedOption] = useState('');
    const [inputValue, setInputValue] = useState('');
    const [post, setPost] = useState(null);

  const handleClick = () => {
    setShowDiv(!showDiv);
  }
  const handleSubmit = event => {
    // 👇️ prevent page refresh
    event.preventDefault();

};
const handleOptionChange = (event) => {
  const selectedOptionId = event.target.selectedOptions[0].getAttribute('data-id');
    setSelectedOption(selectedOptionId);
}

const handleInputChange = (event) => {
  // setInputValue(event.target.value);
  const selectedOptionId = event.target.selectedOptions[0].getAttribute('data-id');
  setSelectedOption(selectedOptionId);
}

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
    <Navbar  expand="lg">
      <Container fluid>
        <Link href="/" className='navbar-brand'>
          <img src="/assets/images/chartered-housing-white.svg"/>
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mx-auto my-2 my-lg-0"
            style={{ maxHeight: '200px' }}
            navbarScroll
          >
            <Link href="/about" className='nav-link'>About</Link>
            <NavDropdown title="Projects" id="navbarScrollingDropdown">
              <Link href="/ongoing" data-rr-ui-dropdown-item="" className="dropdown-item">Ongoing</Link>
              <NavDropdown.Divider />
              <Link  href="/completed" data-rr-ui-dropdown-item="" className="dropdown-item">Completed</Link>
            </NavDropdown>
            <Link href="/contact" className='nav-link'>Contact Us</Link>
            <NavDropdown title="Locations" id="navbarScrollingDropdown">
            <Link href="/bangalore/apartments-on-kanakapura-road" data-rr-ui-dropdown-item="" className="dropdown-item">Kanakapura Road</Link>
              <NavDropdown.Divider />
              <Link href="/bangalore/luxury-villas-in-electronic-city" data-rr-ui-dropdown-item="" className="dropdown-item">Electronic City</Link>
              <NavDropdown.Divider />
              <Link href="/bangalore/plots-in-nelamangala" data-rr-ui-dropdown-item="" className="dropdown-item">Nelamangala</Link>
            </NavDropdown>
            <Link href="/media" className='nav-link'>Media</Link>
            <Link href="/csr-activities" className='nav-link'>CSR Activities</Link>
            <Link href="/blogs" className='nav-link'>Blog</Link>
          </Nav>
          <Button className='eq-btn'  onClick={handleClick}>Enquire Now</Button>
          
      {showDiv && <div className="enquiry-form">
      <form
                        // onSubmit={handleSubmit}
                        style={{ margin: '20px' }}>


      
      <div className="mb-3 mt-3">
      <Form.Select aria-label="Default select example" onChange={handleOptionChange}>
      <option>Select Project*</option>
      <option value="Chartered Hummingbird" data-id="2/3 BHK Apartments, Rs 71.3L Onwards" >Chartered Hummingbird</option>
      <option value="Chartered Grasshopper" data-id="3/4 BHK Villas, Rs 2.51 Crores Onwards">Chartered Grasshopper</option>
      <option value="Chartered Veda" data-id="1200 to 1500 Sq Ft Plots, Rs 21.13L Onwards">Chartered Veda</option>
      <option value="Chartered Woodpecker" >Chartered Woodpecker</option>
    </Form.Select>
      </div>
      {selectedOption && (
            <div className="mb-3 mt-3">
            <input
                                      //required
                                      type='text'
                                      className="form-control"
                                      id="propertyValue"
                                      name='propertyValue'
                                      placeholder="Ravi Kumar"
                                      value={selectedOption}
                                      onChange={handleInputChange}
                                  />
            </div>
      )}
  

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

                            /></div>

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

                                />
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
                                {button && <button type='submit' className='btn eq-btn' onClick={createPost}>Submit</button> }
                            

                    </form>
        
        </div>}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;