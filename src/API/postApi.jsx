import axios from 'axios';

const api=axios.create({
    baseURL:"https://restcountries.com/v3.1/",
})

/**
 * AXIOS is the tool to get the data from an API and then  converts it into JSON on its own and also provide many other functionalities as well
 * @returns It return the data fetched by the api
 */

//HTTP Get Method
export const getCountrydata=()=>{
    return api.get("/all?fields=name,population,region,capital,flags"); 
}
//HTTP Get Indiviual country data

export const getCountryDetails=(name)=>{
    return api.get(
        `/name/${name}?fullText=true&fields=name,population,region,subregion,tld,capital,flags,languages,currencies,borders`,
    )
}