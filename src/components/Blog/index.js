import React, {useState, useEffect} from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import axios from 'axios';


// composant créer
import Header from 'src/components/Header';
import Posts from 'src/components/Posts';
import Footer from 'src/components/Footer';
import { getPostsByCategory } from 'src/selectors';
import NotFound from 'src/components/NotFound';
import Single from 'src/components/Single';

// style
import './style.scss';

function Blog() {

  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading,setLoading] = useState(false)
  const [hasError, setHasError] = useState(false);

  // useEffect est le hook qui sera en charge de gérer les effets de bord
  // - Requête API
  // - Listener
  // - Timers
  // - Manipulation de DOM
  // useEffect a 3 rôles, il vient cumuler ce que font les méthodes de lifecycle en class
  // 1e forme
  // on lui passe un callback qui sera exécuté à chaque rendu du composant
  // 1e rendu + mise à jour => componentDidMount + componentDidUpdate
  // useEffect(() => {
  //   console.log('1e forme de useEffect');
  // });

  // 2e forme
  // quand on met un tableau vide en 2e argument de useEffect, le callback qu'on
  // lui passe sera exécuté uniquement au 1e rendu du composant
  // useEffect(() => {
  //   console.log('2e forme de useEffect');
  // }, []);

  // 3e forme
  // quand on met une dépendance dans le tablaeau en 2e argument, useEffect exécutera
  // le callback au 1e rendu et à chaque fois la valeur passée dans tableau changera
  // useEffect(() => {
  //   console.log('3e forme de useEffect');
  // }, [posts]);
  useEffect(loadData,[]);

  // on va générer un composant Route pour chaque catégorie
  // ce composant Route viendra prendre une liste de poste triée en fonction
  // de la catégorie
  const routes = categories.map((category) => {
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

  const loadData = async () => {
    try {
      setLoading(true);
      const { data: categoriesData } = await axios.get('https://oclock-open-apis.vercel.app/api/blog/categories');
      const { data: postsData } = await axios.get('https://oclock-open-apis.vercel.app/api/blog/posts');

      setCategories(categoriesData);
      setPosts(postsData);
    }
    catch (error) {
      setHasError(true);
    }
    finally {
      // dans tous les cas (success / error) on passe par finally
      // on retire le status de loading
      setLoading(false);
    }
  };

  return (
    <div className="blog">
      <Header categories={categories} />
     
      {hasError && <div>Une erreur s'est produite</div>}
      {loading && <div>Chargement des données</div>}
      {!loading && !hasError && (
      <Switch>
        {routes}
        <Redirect from="/jquery" to="/autre" />
        {posts.length > 0 && (
            <Route path="/post/:slug">
              <Single posts={posts} />
            </Route>
          )} 
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
