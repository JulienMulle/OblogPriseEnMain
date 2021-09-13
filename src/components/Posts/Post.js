import React from 'react';
import PropTypes from 'prop-types';
import DOMPurify from 'dompurify';

function Post({title, category, excerpt}) {
    // lorqu'on récupère des données, il faut s'assurer qu'elles ne sont pas
  // dangereuses. Pour cela il faut les assainir, ici avec DOMPurify
  const createMarkup = () => {
    const clean = DOMPurify.sanitize(excerpt, { ALLOWED_TAGS: ['em', 'strong'] });
    return { __html: clean };
  };
    return (
        <li className="post">
        <article>
          <h2 className="post__title">{title}</h2>
          <div className="post__category">{category}</div>
          <p className="post__content"dangerouslySetInnerHTML={createMarkup()}/>
        </article>
      </li>
    );
}
// creation de Post.propType où j'aurais besoin de title, category et exercpt 
Post.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
};

export default Post;
