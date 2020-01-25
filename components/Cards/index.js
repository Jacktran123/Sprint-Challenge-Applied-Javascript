// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

function createCards(url, headline, auname){
    let divcards=document.createElement('div');
    let divheadline=document.createElement('div');
    let divauthor=document.createElement('div');
    let divimg=document.createElement('div');
    let authorimg=document.createElement('img');
    let spancard=document.createElement('span');

    divcards.classList.add('card');
    divheadline.classList.add('headline');
    divauthor.classList.add('author');
    divimg.classList.add('img-content');
    divheadline.textContent= headline
    authorimg.src= url;
    spancard.textContent= `By ${auname}`;

    divcards.appendChild(divheadline);
    divcards.appendChild(divauthor);
    divcards.appendChild(divimg);
    divcards.appendChild(authorimg);
    divcards.appendChild(spancard);
    return divcards;
} 

let cardComponent= document.querySelector('.cards-container');

axios 
 .get('https://lambda-times-backend.herokuapp.com/articles')
 .then(response =>{ 
     console.log(response);
    response.data.articles.bootstrap.forEach(element => {
    let awesomeCards = createCards(element.authorPhoto, element.headline, element.authorName);
    cardComponent.appendChild(awesomeCards);})

    response.data.articles.javascript.forEach(element=>{
    let awesomejs= createCards(element.authorPhoto, element.headline, element.authorName);
    cardComponent.appendChild(awesomejs);})

    response.data.articles.jquery.forEach(element=>{
        let awesomejquery= createCards(element.authorPhoto, element.headline, element.authorName);
        cardComponent.appendChild(awesomejquery);})

    response.data.articles.node.forEach(element=>{
    let awesomenode= createCards(element.authorPhoto, element.headline, element.authorName);
    cardComponent.appendChild(awesomenode);})

    response.data.articles.technology.forEach(element=>{
        let awesometech= createCards(element.authorPhoto, element.headline, element.authorName);
        cardComponent.appendChild(awesometech);})
})