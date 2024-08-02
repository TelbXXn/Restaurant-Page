import './style.css';
function index() {
  const headOne = document.createElement('h1');
  const mainImage = document.createElement('img');
  const mainP = document.createElement('p');
  const pageDiv = document.createElement('div');
  pageDiv.classList.add('index');


  headOne.textContent = "Sky Bar and Restaurant";
  mainImage.src = "https://upload.wikimedia.org/wikipedia/commons/e/ef/Restaurant_N%C3%A4sinneula.jpg";
  mainImage.style.height = "400px";
  mainImage.style.width= "600px";
  mainP.textContent = "Every day we stray further away from God, so why don't you get closer and enjoy and nice hearty meal at the Sky Bar and Restaurant in NYC. We're only one meal away from heaven."

  pageDiv.appendChild(headOne);
  pageDiv.appendChild(mainImage);
  pageDiv.appendChild(mainP);

  return pageDiv;






  //   <h1>Sky Bar and Restaurant</h1>
  // <img src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Restaurant_N%C3%A4sinneula.jpg" height="400px" width="600px">
  // <p>Every day we stray further away from God, so why don't you get closer and enjoy and nice hearty meal at the Sky Bar and Restaurant in NYC. We're only one meal away from heaven.</p>
}

function loadIndex() {
  const mainDiv = document.querySelector('#content');
  mainDiv.textContent = '';
  mainDiv.appendChild(index());

}


export default loadIndex; 