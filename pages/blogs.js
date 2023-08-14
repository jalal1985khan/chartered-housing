import {Container,Row, Col,Image,Breadcrumb,Card, Button, Offcanvas} from 'react-bootstrap';
import Link from 'next/link';
import configData from "../config.json";
import Header from '../components/Header';
import Footer from '../components/Footer';
import Yoast from '../components/Head';
import { useState, useEffect } from 'react';
import fetch from 'isomorphic-unfetch';

function Posts() {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);

  useEffect(() => {
    async function fetchPosts() {
      //const apiUrl = `/api/posts?page=${page}&perPage=${perPage}`;
      const apiUrl = `${configData.SERVER_URL}posts?categories=3&page=${page}&status=publish&per_page=${perPage}`;
      const response = await fetch(apiUrl);
      const newPosts = await response.json();
      setPosts([...posts, ...newPosts]);
    }

    fetchPosts();
  }, [page]);

  function handleLoadMore() {
    setPage(page + 1);
  }

  return (
    <>
    <Yoast pageTitle="Blogs - Chartered Housing" />
    <Header/>
    <Container className="p-3 banner-img" fluid style={{ 
      backgroundImage: `url("/assets/images/blog-banner.jpeg")` 
    }}>
<Container>
    <h2 className='text-white'>Blog</h2>
    <nav aria-label="breadcrumb">
        <ol class="breadcrumb"><li class="breadcrumb-item">
            <Link href="/">Home</Link></li>
            <li class="breadcrumb-item active" aria-current="page">Blog</li></ol></nav>

</Container>
    
        </Container> 
    <Container>
        {/* <Row>
            <Col sm={8}> */}
        <Row>  
      {posts.map((post) => (
        <Col sm={4}>
        <Card className="rounded-0 mt-4">
        <Card.Body>
          <Card.Title>{post.title.rendered}</Card.Title>
          <Card.Text dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
          <Link href={`/blogs/${post['slug']}`}>continue reading..</Link>
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
    <Container className='text-center'>
    <button onClick={handleLoadMore} className="eq-btn text-white mt-5">Load more</button>
    </Container>
    <Footer/>
    </>
  );
}

export default Posts;
