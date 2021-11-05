const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];



//Richiamo il container dove inserire i post
const containerPosts = document.getElementById('container');


// creo il contenuto del container dove inserire i post
for (let i = 0; i < posts.length; i++) {

    const postAttuale = posts[i];

    
    //Creo il div dove inserire tutti i dati del singolo post  
    const post = document.createElement('div');
    post.classList.add('post');
    containerPosts.append(post);
    
    console.log(containerPosts);
    
    //Creiamo l'header del post
    const postHeader = document.createElement('div');
    postHeader.classList.add('post__header');
    post.append(postHeader);
    
    const postMeta = document.createElement('div');
    postMeta.classList.add('post-meta');
    postHeader.append(postMeta);
    
    //foto profilo
    const fotoProfilo = document.createElement('div');
    fotoProfilo.classList.add('post-meta__icon');
    postMeta.append(fotoProfilo);
    
    const media = postAttuale.media;
    console.log('media', media);
    
    fotoProfilo.innerHTML =
    `
    <img class="profile-pic" src="${media}" alt="Phil Mangione">
    `
    
    //Creo div contenitore per il nome e per la pubblicazione del post
    const nomeData = document.createElement('div');
    nomeData.classList.add('post-meta__data');
    postMeta.append(nomeData);
  
  //Nome
  const nomeUtente = document.createElement('div');
  nomeUtente.classList.add('post-meta__author');
  nomeData.append(nomeUtente);
  
  
  
  

  //Data pubblicazione
  const dataPost = document.createElement('div');
  dataPost.classList.add('post-meta__time');
  nomeData.append(dataPost)
  
  
  
  
  
  /////////////////////
  //Creo l'area del testo dell'utente
  const testoPost = document.createElement('div');
  testoPost.classList.add('post__text');
  post.append(testoPost);

  

  
  
  //Creo il div dell'immagine del post
  const immaginePost = document.createElement('div');
  immaginePost.classList.add('post__image');
  post.append(immaginePost);
  
  
  

  
  ////////////////////////////////
  //creo il footer del post
  const postFooter = document.createElement('div');
  postFooter.classList.add('post__footer');
  post.append(postFooter);

  //creo il container dei like
  const barraLike = document.createElement('div');
  barraLike.classList.add('likes');
  postFooter.append(barraLike);

  //Creo il div del bottone dei like
  const like = document.createElement('div');
  like.classList.add('likes__cta');
  barraLike.append(like);
  
  //Creo il btn
  const bottoneLike = document.createElement('a');
  bottoneLike.classList.add('like-button');
  like.append(bottoneLike)

  
}


