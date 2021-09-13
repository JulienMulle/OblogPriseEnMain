import React, {useState} from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import axios from 'axios';

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
  const [hasError, setHasError] = useState(false);
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
    axios.get('https://oclock-open-apis.vercel.app/api/blog/posts')
    .then((response) => {
      // axios nous renvoie un objet, les data de la réponse se trouvent dans la propriété "data"
      setPosts(response.data);
    })
    .catch((error) => {
      console.log('error', error);
      setHasError(true);
    })
    .finally(() => {
      setLoading(false);
    });
    // on simule le chargement de données
   // setTimeout(() => {
     // console.log('ici je veux changer mon state');
      //setPosts(postsData);
      //setLoading(false);
    //}, 1000);
  };

  return (
    <div className="blog">
      <Header categories={categoriesData} />
      <button type="button" onClick={loadData}>Load data</button>
      {hasError && <div>Une erreur s'est produite</div>}
      {loading && <div>Chargement des données</div>}
      {!loading && !hasError && (
      <Switch>
        {routes}
        <Redirect from="/jquery" to="/autre" />
        <Route>
          <NotFound />
        </Route>
      </Switch>
      )}
      <Footer />
    </div>
  );
}

export default Blog;
