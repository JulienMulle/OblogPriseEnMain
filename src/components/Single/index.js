import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

function Single({
  title,
  category,
  content,
}) {
  return (
    <article className="single">
      <h2 className="single__title">{title}</h2>
      <div className="single__category">{category}</div>
      <p className="single__content">{content}</p>
    </article>
  );
}

Single.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Single;