import React from 'react';
import { Route } from 'react-router';

// composant créer
import Header from 'src/components/Header';
import Posts from 'src/components/Posts';
import Footer from 'src/components/Footer';
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
    // Par défaut on place toutes les données des posts dans postsList
    let postsList = postsData;
    // on va filtrer les posts par catgégories
    // le point en commun entre les objet de catégories
    // et les objets de post : propriété category.label et propriété post.category
    if (category.label !== 'Accueil') {
      postsList = postsData.filter((post) =>
      // ici on détermine si le category.label est égal à post.category
        post.category === category.label);
    }
    
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
