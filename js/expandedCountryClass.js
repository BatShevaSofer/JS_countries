import { createCountriesHome } from './countries.js';
import {createBordersArr} from './countries.js'


export default class ExpandedCountryClass {
    constructor(_parent, _item) {
        this.parent = _parent;
        this.name = _item.name.common;
        this.population = _item.population;
        this.region = _item.region;
        this.languages = Object.values(_item.languages).join(', ');
        this.currencies = _item.currencies;
        this.capital = _item.capital;
        this.latlng = _item.latlng;
        this.borders = _item.borders;
        this.flag = _item.flags["png"];
    }

    getCoins(_coin_ar) {
        let key = Object.keys(_coin_ar)[0];
        return `${key} - ${_coin_ar[key].name}`;
    }





    render() {
        document.querySelector(this.parent).innerHTML = `
            <div class="card p-0 m-0 mt-5 card-e">
                <img src=${this.flag} class="card-img-top" alt="bg-missing"/>
                <div class="card-body">
                    <h5 class="card-title">${this.name}</h5>
                    <h6 class="card-title"><strong>Population: </strong> ${this.population}</h6>
                    <h6 class="card-title"><strong>Region: </strong> ${this.region}</h6>
                    <h6 class="card-title"><strong>Languages: </strong> ${this.languages}</h6>
                    <h6 class="card-title"><strong>Coin: </strong> ${this.getCoins(this.currencies)}</h6>
                    <h6 class="card-title"><strong>Capital: </strong> ${this.capital}</h6>
                    <h6 class="card-title"><strong>Borders: </strong> <div id="border_e"></div></h6>
                    <a href="#" id="goHome" class="btn btn-secondary">Go Home</a>
                </div>
            </div>
            <iframe class="m-0 mt-5 p-0 bg-white" width="100%" height="500px" frameborder="0" scrolling="no" marginheight="0"
                marginwidth="0" src="https://maps.google.com/maps?q=${this.latlng[0]},${this.latlng[1]}&hl=he&z=6&amp;output=embed">
            </iframe>
            `
        document.querySelector('#goHome').addEventListener('click', createCountriesHome);
        createBordersArr(this.borders)
    }







}