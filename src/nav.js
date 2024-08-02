import menu from "./menu";
import {about} from "./about";
import loadIndex from "./index";
import './style.css';

const mainDiv = document.querySelector('#content');

const homeButton = document.querySelector('.home');
const menuButton = document.querySelector('.menu');
const aboutButton = document.querySelector('.about');

loadIndex();


homeButton.addEventListener('click', function() {
  loadIndex();
});   

menuButton.addEventListener('click', function() {
  mainDiv.textContent = '';
  mainDiv.appendChild(menu());
});   

aboutButton.addEventListener('click', function() {
  mainDiv.textContent = '';
  mainDiv.appendChild(about());
});   
