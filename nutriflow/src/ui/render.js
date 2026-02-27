import { GetApi } from "../api/recipeProvider.js";

export function remove() {
    let btn = document.querySelector('#btn');
    let hero_section = document.querySelector('.hero_section');
    let page_home = document.querySelector('.page_home');
    let arrow = document.querySelector('#arrow');
    page_home.style.display = 'none';
    arrow.addEventListener('click' , function(){
        page_home.style.display = 'none';
        hero_section.style.display = 'block';
    })
    btn.addEventListener('click' , function(){
    hero_section.style.display = 'flex';
    hero_section.style.alignitems = 'flex-end';
    footer.style.justifycontent = 'center';    
    hero_section.style.display = 'none';
    page_home.style.display = 'block';
    footer.style.display = 'block';
    footer.style.display = 'flex';
    footer.style.justifycontent = 'space-between'
})
}
const recipes=await GetApi()
export function AddData(){
    let image = document.getElementById('image');
    // let image2 =document.getElementById('image2');
    for (let i = 0; i < recipes.length; i++) {
      image.innerHTML += `
      <div class = "container" data-index="${i}">
       <img class="image" src="${recipes[i].image}" alt="">
        <p>${recipes[i].name}</p>
        <div class="baliz">
        <i class="fa-solid fa-fire star"></i>
        <p>${recipes[i].caloriesPerServing}</p>
        </div>
        <div class = "favorits">
        <i  class="fa-solid fa-heart heart"></i>
        </div>
        
    </div>
    `}
let page_home = document.querySelector('.page_home');
 let containers = document.querySelectorAll('.container');
let page_detail = document.querySelector('.image_detail');
let header = document.querySelector('.header');
let title = document.querySelector('#h2');
title.style.display = 'none';
header.style.display = 'none';
page_detail.style.display = 'none';
    containers.forEach(function(container){
        container.addEventListener('click', function(){
            title.style.display = 'block';
            header.style.display = 'block';
            header.style.display = 'flex';
            header.style.justifycontent = 'space-between';
            let index = this.dataset.index; 
            getDetail(index);
        });
    });
let heart = document.querySelectorAll('.heart')
heart.forEach(function(heart){
    heart.addEventListener('click' , function(e){
        e.preventDefault();
    heart.classList.toggle('color');
})
})
}
AddData();
let footer = document.querySelector('.footer');
footer.style.display = 'none';

function getDetail(index){
   let page_home = document.querySelector('.page_home');
    let page_detail = document.querySelector('.image_detail');

    page_home.style.display = 'none';
    page_detail.style.display = 'block';
    page_detail.innerHTML = `
        
        <img src="${recipes[index].image}" width="370">
        <div class ="details">
        <h2 class = "titre">${recipes[index].name}</h2>
        <p class = "para">${recipes[index].cookTimeMinutes}min</p>
        </div>
        <div class = 'elamentDetail'>
            <div>
                <p>rating</p>
                <span>${recipes[index].rating}</span>
            </div>
            <div>
                <p>cuisine</p>
                <span>${recipes[index].cuisine}</span>
            </div>
            <div>
                <p>difficulty</p>
                <span>${recipes[index].difficulty}</span>
            </div>
            <div>
                <p>Calories</p>
                <span>${recipes[index].caloriesPerServing}</span>
            </div>
            </div>
        
    `;
}

let arrow = document.getElementById('arrow');
arrow.onclick = function(){
    p

}


    