import {Breadcrumb,Button ,Container, Row, Col,Card} from 'react-bootstrap';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Yoast from '../components/Head';
import configData from "../config.json";
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import fetch from 'isomorphic-unfetch';

function activities() {

  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);

  useEffect(() => {
    async function fetchPosts() {
      //const apiUrl = `/api/posts?page=${page}&perPage=${perPage}`;
      const apiUrl = `${configData.SERVER_URL}posts?_embed&categories=4&page=${page}&status=publish&per_page=${perPage}`;
      const response = await fetch(apiUrl);
      const newPosts = await response.json();
      setPosts([...posts, ...newPosts]);
      console.log(newPosts)
    }

    fetchPosts();
  }, [page]);

  function handleLoadMore() {
    setPage(page + 1);
  }



  return (
    <>
    <Yoast pageTitle="CSR Activities - Chartered Housing" pageDesc="Understanding its responsibility towards the society, Chartered Housing has continuously contributed through its CSR activities" />
   <Header/>
   <Container className="p-3 banner-img" fluid style={{ 
      backgroundImage: `url("/assets/images/csr-banner.jpeg")` 
    }}>
<Container>
    <h2 className='text-white'>CSR Activities</h2>
    <nav aria-label="breadcrumb">
        <ol className="breadcrumb"><li className="breadcrumb-item">
            <Link href="/">Home</Link></li>
            <li className="breadcrumb-item active" aria-current="page">CSR Activities</li></ol></nav>

</Container>
</Container>   
<Container>
        {/* <Row>
            <Col sm={8}> */}
        <Row>  
      {posts.map((post) => (
        <Col sm={4} key={post.id}>
        <Card className="rounded-0 mt-4" style={{height:600 + 'px'}}>
        <Card.Body>
        <img src={post._embedded['wp:featuredmedia'][0].source_url} alt="" fluid className="responsive"/>
          <Card.Title className="mt-2">{post.title.rendered}</Card.Title>
          <Card.Text dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
        </Card.Body>
        <Card.Body>
          <Link href={`/csr/${post['slug']}`} className="eq-btn">Continue reading</Link>
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
  )
}

export default activities
