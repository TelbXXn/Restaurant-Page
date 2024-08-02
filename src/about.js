import './style.css';
export function about() {

  const pageDiv = document.createElement('div');
  const headerMain = document.createElement('h1');
  const cInfo = document.createElement('div');
  pageDiv.classList.add('about');

  
  cInfo.innerHTML = 
  "<h1>Here we have our Phone Number</h1><p>Call us  at 860666666</p><p>We probably won't pickup<p>"

  headerMain.textContent = "Contact Information";

  pageDiv.appendChild(headerMain);
  pageDiv.appendChild(cInfo);

  return pageDiv;
  




}