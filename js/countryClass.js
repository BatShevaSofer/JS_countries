import { createSingleCountry } from './countries.js';

export default class CountryClass {
    constructor(_parent, _item) {
        this.parent = _parent;
        this.name = _item.name.common;
        this.flag = _item.flags["png"];
    }

    handleClick() {
        alert(`Clicked on ${this.name}`);
    }

    render() {
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('country-card', 'p-2', 'mt-5');
        countryDiv.dataset.aos = 'zoom-in';

        const imageDiv = document.createElement('div');
        imageDiv.classList.add('imge_e', 'd-flex', 'align-items-center', 'justify-content-center');
        imageDiv.style.backgroundImage = `url('${this.flag}')`;

        const earthDiv = document.createElement('div');
        earthDiv.classList.add('earth', 'bg-dark', 'text-white', 'w-100', 'h-100', 'd-flex', 'justify-content-center', 'align-items-center', 'p-1');
        earthDiv.textContent = this.name;

        imageDiv.appendChild(earthDiv);
        countryDiv.appendChild(imageDiv);

        countryDiv.addEventListener('click', () => createSingleCountry(this.name));

        document.querySelector(this.parent).appendChild(countryDiv);
    }
}















// import { createSingleCountry } from './countries.js';

// let countryInstanceCounter = 0; // נגדיר מונה ליצירת IDs ייחודיים

// export default class CountryClass {
//     constructor(_parent, _item) {
//         this.parent = _parent;
//         this.name = _item.name.common;
//         this.flag = _item.flags["png"];
//         this.id = `card_earth_${countryInstanceCounter++}`; // יוסיף מזהה ייחודי לכל אובייקט
//     }

//     handleClick() {
//         alert(`Clicked on ${this.name}`);
//     }

//     render() {
//         document.querySelector(this.parent).innerHTML += `
//         <div id="${this.id}" data-aos="zoom-in" class="p-2 mt-5">
//             <div class="imge_e d-flex align-items-center justify-content-center" style="background-image:url('${this.flag}');">
//                 <div class="earth bg-dark text-white w-100 h-100 d-flex justify-content-center align-items-center p-1">
//                     ${this.name}
//                 </div>
//             </div>
//         </div>
//         `;

//         const countryInstance = this;
//         document.getElementById(this.id).addEventListener("click", function () {
//             countryInstance.handleClick();
//         });
//     }
// }



// let div = document.querySelector('.imge_e');
// let div1 = div.querySelector(".earth");
// div1.addEventListener("click", () => {
//     alert(this.name)
// })
/* <div id="card_earth" data-aos="zoom-in" class="p-2  mt-5" >
<div class="card">
    <img src="" class="card-img-top rounded" alt="bg-missing" />
    <div class="card-body p-0">
        <h5 class="card-title"></h5>
        <!--<button class="btn btn-secondary w-100 m-0">show more</button>-->
    </div>
</div>
</div>
` */