import React, {useState} from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

// composant créer
import Header from 'src/components/Header';
import Posts from 'src/components/Posts';
import Footer from 'src/components/Footer';
import { getPostsByCategory } from 'src/selectors';
import NotFound from 'src/components/NotFound';
// données
import categoriesData from 'src/data/categories';
import postsData from 'src/data/posts';
// style
import './style.scss';

function Blog() {

  const [posts, setPosts] = useState([]);
  const [loading,setLoading] = useState(false)
  // on va générer un composant Route pour chaque catégorie
  // ce composant Route viendra prendre une liste de poste triée en fonction
  // de la catégorie
  const routes = categoriesData.map((category) => {
    const postsList = getPostsByCategory(category.label, posts);
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
  const loadData = () => {
    setLoading(true);
    // on simule le chargement de données
    setTimeout(() => {
      console.log('ici je veux changer mon state');
      setPosts(postsData);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="blog">
      <Header categories={categoriesData} />
      <button type="button" onClick={loadData}>Load data</button>
      {loading && <div>Chargement des données</div>}
      <Switch>
        {routes}
        <Redirect from="/jquery" to="/autre" />
        <Route>
          <NotFound />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default Blog;
