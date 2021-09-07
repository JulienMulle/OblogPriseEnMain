import React from 'react'

function Posts() {
    return (
        <li className="post">
        <article>
          <h2 className="post__title">Titre du post</h2>
          <div className="post__category">Category</div>
          <p className="post__content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta praesentium, accusamus cupiditate culpa qui similique delectus deserunt voluptatem molestiae, eligendi voluptas eveniet error explicabo odit quibusdam tenetur sequi facilis dignissimos.</p>
        </article>
      </li>
    );
}

export default Posts
