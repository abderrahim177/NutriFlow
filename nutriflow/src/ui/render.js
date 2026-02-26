import { GetApi } from "../api/recipeProvider.js";

export function remove() {
    let btn = document.querySelector('#btn');
    let hero_section = document.querySelector('.hero_section');
    let page_home = document.querySelector('.page_home');
    let arrow = document.querySelector('#arrow');
   console.log(arrow);
    page_home.style.display = 'none';
    arrow.addEventListener('click' , function(){
        page_home.style.display = 'none';
        hero_section.style.display = 'block';
    })
    btn.addEventListener('click' , function(){
    hero_section.style.display = 'none';
    page_home.style.display = 'block';
})
}
const recipes=await GetApi()
export function AddData(){
    let image = document.getElementById('image');
    let image2 = document.getElementById('image2');
    for (let i = 0; i < recipes.length; i++) {
      image.innerHTML += `
       <img id= "image" src="${recipes[i].image}" alt="">
        <p>${recipes[i].rating}</p>
    
    `    
    }
   
}
AddData()