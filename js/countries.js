import CountryClass from "./countryClass.js";
import ExpandedCountryClass from "./expandedCountryClass.js";


const countries_ar = ["Israel", "USA", "United Kingdom", "France", "Thailand"];

const getCountryByName = async (countryName) => {
    let url = `https://restcountries.com/v3.1/name/${countryName}`
    const resp = await fetch(url);
    return await resp.json();
}
const getCountryByCode = async (countryCode) => {
    let url = `https://restcountries.com/v3.1/alpha/${countryCode}`
    const resp = await fetch(url);
    let data = await resp.json();
    console.log(data);
    return data[0].name.common;
}


export const createBordersArr = (borders_code_ar) => {
    if (borders_code_ar.length) {
        borders_code_ar.forEach(
            async(country) => {
                let name = await getCountryByCode(country);
                let a = document.createElement("a");
                a.innerHTML = name;
                a.classList = "p-1 text-dark"
                document.querySelector('#border_e').append(a);
                a.addEventListener('click', ()=>{
                    createSingleCountry(name);
                })
            }
        )
    }
    else{
        document.querySelector('#border_e').innerHTML = "no borders🤷‍♀️"
    }
}


export const createCountriesHome = () => {
    document.querySelector("#parent_row").innerHTML = "";
    countries_ar.forEach(country => {
        getCountryByName(country)
            .then(data => {
                console.log(data[0].name.common);
                const country = new CountryClass("#parent_row", data[0]);
                country.render()
            })
            .catch(err => {
                console.log(err);
            })
    });
}

export const createCountriesByArr = (countries_arr) => {
    document.querySelector("#parent_row").innerHTML = "";
    countries_arr.forEach(country => {
        getCountryByName(country.name.common)
            .then(data => {
                console.log(data + "56");
                // console.log(data[0].name.common);
                const country = new CountryClass("#parent_row", data[0]);
                country.render()
            })
            .catch(err => {
                console.log(err);
            })
    });
}


export const createSingleCountry = (countryName) => {
    document.querySelector("#parent_row").innerHTML = "";
    getCountryByName(countryName)
        .then(data => {

            const country = new ExpandedCountryClass("#parent_row", data[0]);
            country.render()
        })
        .catch(err => {
            console.log(err);
        })

}





export const doApiSearch = (search = "all") => {
    document.querySelector("#parent_row").innerHTML = "";
    searchCountries(search)
        .then(countries => {
            if (countries.status != 404) {
                console.log(countries);
                countries.forEach(country => {
                    const country1 = new CountryClass("#parent_row", country);
                    country1.render();
                })
            }
            else {
                // alert("Could not find countries...");
                document.querySelector("#parent_row").innerHTML = '<h2 data-aos="zoom-in" class="bg-white rounded shadow mt-5">Could not find countries</h2>';

            }
        })
        .catch(err => {
            console.log(err);
            // alert("Could not find countries");
            document.querySelector(this.parent).innerHTML = "<h2>Could not find countries</h2>";
        });
}



const searchCountries = async (search) => {
    let url = (`https://restcountries.com/v3.1/all/?fields=name,flags`);
    if (search != "") {
        url = (`https://restcountries.com/v3.1/name/${search}/?fields=name,flags`);
    }
    const resp = await fetch(url);
    // console.log(await resp.json());
    return await resp.json();
}
// doApiSearch("US");



