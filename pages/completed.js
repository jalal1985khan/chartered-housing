import {Container,Row, Col,Breadcrumb,Card, Button, Offcanvas,Badge} from 'react-bootstrap';
import Link from 'next/link';
import configData from "../config.json";
import Header from '../components/Header';
import Footer from '../components/Footer';
import Yoast from '../components/Head';
import { useState, useEffect } from 'react';
import fetch from 'isomorphic-unfetch';
import Image from 'next/image';

function Posts() {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(22);
  const [hasMore, setHasMore] = useState(true);
  

  useEffect(() => {
    async function fetchPosts() {
      const apiUrl = `${configData.SERVER_URL}property?_embed&status=publish&categories=183&per_page=${perPage}`;
      const response = await fetch(apiUrl);
      const newPosts = await response.json();
      setPosts([...posts, ...newPosts]);
      setHasMore(false);
    }
    fetchPosts();
  }, [page]);

  function handleLoadMore() {
    setPerPage(perPage + 5);
    //setPage(page + 1);
    //alert(page);
  }

  return (
    <>
    <Yoast pageTitle="Completed - Chartered Housing" pageDesc="In the last 3 decades, we’ve built the best of apartments in Bangalore. It’s the same with luxury villas in Bangalore. All our completed projects have earned"  />
    <Header/>
    <Container className="p-3 banner-img" fluid style={{ 
      backgroundImage: `url("/assets/images/ongoing-banner.jpeg")` 
    }}>
<Container>
    <h2 className='text-white'>Completed Projects</h2>
    <nav aria-label="breadcrumb">
        <ol className="breadcrumb"><li className="breadcrumb-item">
            <Link href="/">Home</Link></li>
            <li className="breadcrumb-item active" aria-current="page">Completed Projects</li></ol></nav>

</Container>
    
        </Container> 
    <Container>
<h6 className='fs-2 text-center mt-5'>Completed</h6>
<p className='fs-5'>In the last 3 decades, we’ve built the best of apartments in Bangalore. It’s the same with luxury villas in Bangalore. All our completed projects have earned us the reputation of being a reliable and transparent real estate player with a penchant for quality. Proof of which lies in many happy customers who vouch for us time and again.</p>  
<h6 className='fs-3 mt-5'>Our Properties</h6>        
        {/* <Row>
            <Col sm={8}> */}
        <Row>  
      {posts.map((post) => (
        <Col sm={4} key={post.id}>
              <Card className='mt-5'>
            <img src={post._embedded['wp:featuredmedia'][0].source_url}
              alt=""
              className="responsive"
            />
            
      
      <Card.Body>
      <Badge bg="secondary">{post['acf']['property_type']}</Badge>
      <Card.Title>{post.title.rendered}</Card.Title>
        <Card.Text>{post['acf']['property_location']}</Card.Text>
        <hr/>
        <Row>
<Col>
<p>Year</p>
<p>{post['acf']['property_year_built']}</p>
</Col>
</Row>
<Link href={`/completed/${post['slug']}`} className="k-btn btn text-white">know more</Link>
</Card.Body>
</Card> 
</Col>
      ))}
      </Row>
      
      {/* </Col> */}
      {/* <Col> */}
      {/* </Col>
      </Row> */}
    </Container>
    { hasMore &&
    <Container className='text-center'>
    <button onClick={handleLoadMore} className="eq-btn text-white mt-5">Load more</button>
    </Container>
}
    <Footer/>
    </>
  );
}

export default Posts;
