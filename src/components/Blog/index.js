import React from 'react';
//composant creer
import Header from 'src/components/Header';
import Posts from 'src/components/Posts';
import Footer from 'src/components/Footer';
//données
import categoriesData from 'src/data/categories';
import postsData from 'src/data/posts';
//style
import './style.scss';

function Blog() {
  return (
    <div className="blog">
      <Header categories={categoriesData}/>
      <Posts/>
      <Footer/>
    </div>
  );
}

export default Blog;