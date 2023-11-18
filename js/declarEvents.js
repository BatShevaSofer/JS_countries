import { doApiSearch, createSingleCountry, createCountriesHome } from '../js/countries.js'





export const init = () => {
    const search = document.querySelector('#search');
    const form_search = document.querySelector('#form_search');
    const home_n = document.querySelector('#home_n');
    const nav_link = document.querySelectorAll('.nav-link');


    nav_link.forEach(link => {
        link.addEventListener('click', () =>{
            createSingleCountry(link.innerHTML);
        })
    })
  
    home_n.addEventListener('click', () =>{
        createCountriesHome();
    })
    

    form_search.addEventListener("submit", e => {
        e.preventDefault()
        doApiSearch(search.value);

    })
    form_search.addEventListener("keydown", e => {
        if (e.key == "enter") {
            doApiSearch(search.value);
        }
    })

    
}