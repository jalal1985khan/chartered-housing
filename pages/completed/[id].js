import { Breadcrumb, Button, Container, Row, Col, Card } from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link';
import configData from "../../config.json";
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useState, useEffect } from 'react';
import fetch from 'isomorphic-unfetch';
import Yoast from '../../components/Head';
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const post = ({ data }) => {
  //console.log(data);
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchPosts() {
      //const apiUrl = `/api/posts?page=${page}&perPage=${perPage}`;
      const apiUrl = `${configData.SERVER_URL}posts?status=publish`;
      const response = await fetch(apiUrl);
      const newPosts = await response.json();
      setPosts([...posts, ...newPosts]);
    }
    fetchPosts();
  }, [page]);

  return (
    <div>
      <Yoast pageTitle="Chartered Hummingbird – Luxury Apartments On Kanakapura Road - Chartered Housing" />
      <Header />
      {
        data.map((post) => {
          console.log(post);
          const mapurl = `https://maps.google.com/maps?q=${post['acf']['property_map']['address']}&zoom=14&size=512x512&maptype=roadmap&sensor=false`;
          const images = [
            {
              original: post['acf']['banner_image_1']['url'],
              thumbnail: post['acf']['banner_image_1']['url'],
            },
            {
              original: post['acf']['banner_image_2']['url'],
              thumbnail: post['acf']['banner_image_2']['url'],
            },
            {
              original: post['acf']['banner_image_3']['url'],
              thumbnail: post['acf']['banner_image_3']['url'],
            },
            {
              original: post['acf']['banner_image_4']['url'],
              thumbnail: post['acf']['banner_image_4']['url'],
            },
            {
              original: post['acf']['banner_image_5']['url'],
              thumbnail: post['acf']['banner_image_5']['url'],
            },
            {
              original: post['acf']['banner_image_6']['url'],
              thumbnail: post['acf']['banner_image_6']['url'],
            },
            {
              original: post['acf']['banner_image_7']['url'],
              thumbnail: post['acf']['banner_image_7']['url'],
            },
            {
              original: post['acf']['banner_image_8']['url'],
              thumbnail: post['acf']['banner_image_8']['url'],
            },
            {
              original: post['acf']['banner_image_9']['url'],
              thumbnail: post['acf']['banner_image_9']['url'],
            },
            {
              original: post['acf']['banner_image_10']['url'],
              thumbnail: post['acf']['banner_image_10']['url'],
            },

          ];
          return (
            <div key={post.id}>
              <Container className="p-3 banner-img" fluid style={{ backgroundImage: `url("/assets/images/about-banner.jpeg")` }}>
                <Container>
                  <h2 className='text-white'>Completed Projects</h2>
                  <p className='text-white'>Completed</p>
                </Container>
              </Container>
              <Container className='mt-5 mb-5'>
                <h2 className='mb-4' dangerouslySetInnerHTML={{ __html: post.title.rendered}}/>
                {post['acf']['property_location'] && <p className='fs-5'>{post['acf']['property_location']}</p>}
              </Container>
              <Container fluid>

                <ImageGallery
                  items={images}
                  showBullets={false}
                  showIndex={false}
                  showThumbnails={true}
                  lazyLoad={false}
                  showPlayButton={false}
                  showNav={true}
                  showFullscreenButton={true}
                  thumbnailPosition={"bottom"}
                // renderLeftNav={renderLeftNav}
                // renderRightNav={renderRightNav}
                />

              </Container>
              <Container className='grey' fluid>
                <Container className='pt-5'>
                  <h2>About</h2>
                  <hr />
                  <h4 dangerouslySetInnerHTML={{ __html: post.title.rendered}}/>
                  <div className='fs-5' dangerouslySetInnerHTML={{ __html: post['acf']['property_description'] }} />
                </Container>
                <Container className='pt-5'>
                  <Row><Col><h2>Highlights</h2></Col></Row>
                  <hr />
                  <Row>
                    {post['acf']['property_year_built'] && <Col><h6 className="fw-bold">Year Built:</h6> {post['acf']['property_year_built']}</Col>}
                    {post['acf']['property_bedrooms'] && <Col><h6 className="fw-bold">Bedrooms:</h6> {post['acf']['property_bedrooms']}</Col>}
                    {post['acf']['property_area'] && <Col><h6 className="fw-bold">Area:</h6> {post['acf']['property_area']}</Col>}
                    
                  </Row>
                  <hr />
                  <Row>
                    {post['acf']['property_type']&& <Col><h6 className="fw-bold">Type:</h6>{post['acf']['property_type']}</Col>}
                    {post['acf']['property_location'] && <Col><h6 className="fw-bold">Location:</h6> {post['acf']['property_location']}</Col>}
                    {post['acf']['rera_details'] && <Col><h6 className="fw-bold">RERA Number:</h6>{post['acf']['rera_details']}</Col>}
                    { post['acf']['oc_number'] && <Col><h6 className="fw-bold">OC Number:</h6>{post['acf']['oc_number']}</Col>}
                    
                    
                  </Row>
                </Container>
                <Container className='pt-5'>
                  <Row><Col><h2>Address</h2></Col>
                  {post['acf']['property_map']['address'] && <Col className="d-flex justify-content-end"><a href={mapurl}  target='_blank' className="eq-btn">Open On Google Map</a></Col>}
                  </Row>
                  <hr />
                  {post['acf']['property_address'] && <p className='fs-5'><b>Address:</b> {post['acf']['property_address']}</p>}
                  {post['acf']['property_location'] && <p className='fs-5'><b>Location:</b> {post['acf']['property_location']}</p>}
                </Container>
                <Container className='pt-5'>
                  <h2>Location Advantages</h2>
                  <hr />
                  <Row>
                    {post['acf']['property_amenities'][0] && 
                     <Col sm={3}>
                     <Card className='a-card'>
                          <Image
                            class="card-img-top"
                            className="amenities"
                            src="/assets/images/amenities-01.png"
                            width="500"
                            height="250"
                           />
                       <Card.Body>
                         <Card.Text className='fs-6'>{post['acf']['property_amenities'][0] }</Card.Text>
                       </Card.Body>
                     </Card>
                   </Col>
                    
                    }
                     {post['acf']['property_amenities'][1] && 
                     <Col sm={3}>
                     <Card className='a-card'>
                          
                          <Image
                            class="card-img-top"
                            className="amenities"
                            src="/assets/images/amenities-01.png"
                            width="500"
                            height="250"
                           />
                       <Card.Body>
                         <Card.Text className='fs-6'>{post['acf']['property_amenities'][1] }</Card.Text>
                       </Card.Body>
                     </Card>
                   </Col>
                    
                    }
                     {post['acf']['property_amenities'][2] && 
                     <Col sm={3}>
                     <Card className='a-card'>
                          <Image
                            class="card-img-top"
                            className="amenities"
                            src="/assets/images/amenities-01.png"
                            width="500"
                            height="250"
                           />
                       <Card.Body>
                         <Card.Text className='fs-6'>{post['acf']['property_amenities'][2] }</Card.Text>
                       </Card.Body>
                     </Card>
                   </Col>
                    
                    }
                     {post['acf']['property_amenities'][3] && 
                     <Col sm={3}>
                     <Card className='a-card'>
                          
                          <Image
                            class="card-img-top"
                            className="amenities"
                            src="/assets/images/amenities-01.png"
                            width="500"
                            height="250"
                           />
                       <Card.Body>
                         <Card.Text className='fs-6'>{post['acf']['property_amenities'][3] }</Card.Text>
                       </Card.Body>
                     </Card>
                   </Col>
                    
                    }
                     {post['acf']['property_amenities'][4] && 
                     <Col sm={3}>
                     <Card className='a-card'>
                          
                          <Image
                            class="card-img-top"
                            className="amenities"
                            src="/assets/images/amenities-01.png"
                            width="500"
                            height="250"
                           />
                       <Card.Body>
                         <Card.Text className='fs-6'>{post['acf']['property_amenities'][4] }</Card.Text>
                       </Card.Body>
                     </Card>
                   </Col>
                    
                    }
                     {post['acf']['property_amenities'][5] && 
                     <Col sm={3}>
                     <Card className='a-card'>
                          
                          <Image
                            class="card-img-top"
                            className="amenities"
                            src="/assets/images/amenities-01.png"
                            width="500"
                            height="250"
                           />
                       <Card.Body>
                         <Card.Text className='fs-6'>{post['acf']['property_amenities'][5] }</Card.Text>
                       </Card.Body>
                     </Card>
                   </Col>
                    
                    }
                     {post['acf']['property_amenities'][6] && 
                     <Col sm={3}>
                     <Card className='a-card'>
                          
                          <Image
                            class="card-img-top"
                            className="amenities"
                            src="/assets/images/amenities-01.png"
                            width="500"
                            height="250"
                           />
                       <Card.Body>
                         <Card.Text className='fs-6'>{post['acf']['property_amenities'][6] }</Card.Text>
                       </Card.Body>
                     </Card>
                   </Col>
                    
                    }
                     {post['acf']['property_amenities'][7] && 
                     <Col sm={3}>
                     <Card className='a-card'>
                          
                          <Image
                            class="card-img-top"
                            className="amenities"
                            src="/assets/images/amenities-01.png"
                            width="500"
                            height="250"
                           />
                       <Card.Body>
                         <Card.Text className='fs-6'>{post['acf']['property_amenities'][7] }</Card.Text>
                       </Card.Body>
                     </Card>
                   </Col>
                    }
                     {post['acf']['property_amenities'][8] && 
                     <Col sm={3}>
                     <Card className='a-card'>
                       <Card.Img variant="top" className="amenities" src="/assets/images/amenities-01.png" />
                       <Card.Body>
                         <Card.Text className='fs-6'>{post['acf']['property_amenities'][8] }</Card.Text>
                       </Card.Body>
                     </Card>
                   </Col>
                    }
                     {post['acf']['property_amenities'][9] && 
                     <Col sm={3}>
                     <Card className='a-card'>
                          
                          <Image
                            class="card-img-top"
                            className="amenities"
                            src="/assets/images/amenities-01.png"
                            width="500"
                            height="250"
                           />
                       <Card.Body>
                         <Card.Text className='fs-6'>{post['acf']['property_amenities'][9] }</Card.Text>
                       </Card.Body>
                     </Card>
                   </Col>
                    
                    }
                    

                    
                   

                    
                  </Row>

                  
                </Container>
                {post['acf']['property_specifications'] &&
                <Container className='pt-5'>
                  <h2>Specifications</h2>
                  <hr />
                  <ul className="a-list fs-5" dangerouslySetInnerHTML={{ __html: post['acf']['property_specifications'] }}></ul>
                </Container>}
                {post['acf']['floor_plan_image_1'] &&
                <Container className='pt-5'>
                  <h2>Floor Plans</h2>
                  <hr />
                  <img src={post['acf']['floor_plan_image_1']} className="img-width"/>
                  </Container>
                  }
                  

                

              </Container>




            </div>
          )
        })}

      <Footer />
    </div>
  )
}

export default post
export async function getServerSideProps(context) {
  const { id } = context.params;
  const res = await fetch(`${configData.SERVER_URL}property?_embed&slug=${id}`);
  const data = await res.json();
  return { props: { data } }
}

