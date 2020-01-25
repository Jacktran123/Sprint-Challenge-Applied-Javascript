// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date"> MARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
    let headercontainer=document.querySelector('.header-container');
    let headerdiv= document.createElement('div');
    let headerspan=document.createElement('span');
    let headerh1=document.createElement('h1');
    let headerspan2=document.createElement('span');
    
    headerspan2.classList.add('temp')
    headerspan.classList.add('date')
     headerdiv.classList.add('header');
    
    headerspan2.textContent= '98';
    headerh1.textContent='Lambda Times';
     headerspan.textContent= 'MARCH 28, 2019';


    headercontainer.appendChild(headerdiv);
    headerdiv.appendChild(headerspan);
    headerdiv.appendChild(headerh1);
    headerdiv.appendChild(headerspan2);
    return headerdiv;
}

Header();
