import React from 'react';
import PropTypes from 'prop-types';
import { useParams, Redirect } from 'react-router-dom';

import './style.scss';

function Single({ posts}) {
    // const foundPost = posts.find((post) => post.slug === slug);
  // on peut destructurer directement l'objet retourner par find
  const foundPost = posts.find((post) => post.slug === slug);

  // si on ne trouve pas de post correspondant au slug
  // on redirige sur la page 404
  // astuce: on peut donner n'importe quelle URL qui ne répond pas
  if (!foundPost) {
    return <Redirect to="/not-found" />;
  }

  // sinon on destructure le post qu'on a trouvé pour placer les infos dans le JSX
  const { title, category, content } = foundPost;
  return (
    <article className="single">
      <h2 className="single__title">{title}</h2>
      <div className="single__category">{category}</div>
      <p className="single__content">{content}</p>
    </article>
  );
}

Single.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  })).isRequired,
};

export default Single;