/* eslint-disable import/prefer-default-export */
export const getPostsByCategory = (category, posts) => {
    // Par défaut on place toutes les données des posts dans postsList
    let postsList = posts;
  
    // on va filtrer les posts par catgégories
    // le point en commun entre les objet de catégories
    // et les objets de post : propriété category.label et propriété post.category
    if (category !== 'Accueil') {
      // ici on détermine si le category est égal à post.category
      postsList = posts.filter((post) => post.category === category);
    }
  
    return postsList;
  }