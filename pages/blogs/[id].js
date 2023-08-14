import {Container,Row, Col,Breadcrumb} from 'react-bootstrap';
import Link from 'next/link';
import configData from "../../config.json";
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useState, useEffect } from 'react';
import fetch from 'isomorphic-unfetch';
import Yoast from '../../components/Head';

const post = ({data}) => {
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
<Header/>  
{
data.map((post)=>{
return (
    <div className="grey mb-5">
<Container className="p-3 banner-img" fluid style={{ 
      backgroundImage: `url("/assets/images/blog-banner.jpeg")` 
    }}>
<Container>
    <h2 className='text-white'>{post.title.rendered}</h2>
    <nav aria-label="breadcrumb">
        <ol class="breadcrumb"><li class="breadcrumb-item">
            <Link href="/">Home</Link></li>
            <li class="breadcrumb-item">
            <Link href="/blogs">Blogs</Link></li>
            <li class="breadcrumb-item active" aria-current="page">{post.title.rendered}</li></ol></nav>

</Container>
</Container>
<Row>
<Col sm={8}>
<Container className="mt-5 bg-white p-5 ">
<h3>{post.title.rendered}</h3>    
<div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
</Container>
</Col> 
<Col>
<Container className="mt-5 bg-white p-5 ">
<h5>Recent Posts</h5>    
<ul className="recents">
{posts.map((post) => (
<li><Link href={post.slug}>{post.title.rendered}</Link></li>
      ))}
</ul>
</Container>
</Col>
</Row> 
    </div>
)
})}

<Footer/>
</div>
  )
}

export default post

export async function getServerSideProps(context){
    const {id} = context.params;
    const res = await fetch(`${configData.SERVER_URL}posts?_embed&slug=${id}`);
    const data = await res.json();
    return {props:{data}}   
}

