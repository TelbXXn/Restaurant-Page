import './style.css';
export default function menu() {

  const pageDiv = document.createElement('div');
  const headerMain = document.createElement('h1');
  headerMain.textContent = "Menu"
  pageDiv.classList.add('menu');

  


  pageDiv.appendChild(headerMain);
  pageDiv.appendChild(createMenuItem("Pizza", "Cheese, Pepperoni, Tomato Sauce"));
  pageDiv.appendChild(createMenuItem("Pasta", "Cheese, Beef, Tomato Sauce, Penne"));


  return pageDiv;

}

function createMenuItem(item, description) {
  const menuItem = document.createElement('div');

  const foodName = document.createElement('h2');
  foodName.textContent = item;

  const descriptions = document.createElement('p');
  descriptions.textContent = description;

  menuItem.appendChild(foodName);
  menuItem.appendChild(descriptions);

  return menuItem;
}