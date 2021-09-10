import React from 'react';
import { Route } from 'react-router';

// composant créer
import Header from 'src/components/Header';
import Posts from 'src/components/Posts';
import Footer from 'src/components/Footer';
import { getPostsByCategory } from 'src/selectors';
// données
import categoriesData from 'src/data/categories';
import postsData from 'src/data/posts';
// style
import './style.scss';

function Blog() {
  // on va générer un composant Route pour chaque catégorie
  // ce composant Route viendra prendre une liste de poste triée en fonction
  // de la catégorie
  const routes = categoriesData.map((category) => {
    const postsList = getPostsByCategory(category.label, postsData);
    return (
      <Route
        path={category.route}
        key={category.route}
        exact
      >
        <Posts posts={postsList} />
      </Route>
    );
  });
  return (
    <div className="blog">
      <Header categories={categoriesData} />
      {routes}
      {/* <Posts posts={postsData} /> */}
      <Footer />
    </div>
  );
}

export default Blog;
