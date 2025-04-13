import React, { useState } from 'react'
import { useEffect,useTransition } from 'react'
import { getCountrydata } from '../API/postApi';
import Loader from '../UI/Loader';
import CountryCard from '../Layout/CountryCard';
import SearchFilter from '../UI/SearchFilter';

/**
 * useTransition: This is a hook which helps to load the data wihout any waiting or state change
 * Allows components to avoid undesirable loading states by waiting for content to load before transitioning to the next screen. It also allows components to defer slower, data fetching updates until subsequent renders so that more crucial updates can be rendered immediately.
 * @see-- https://react.dev/reference/react/useTransition 
 */

const Country = () => {
  const [isPending,startTransition]=useTransition();
  const [countries,setCountries]=useState([]);

  const [search, setSearch] = useState();
  const [filter, setFilter] = useState("all");

  // M2: we can also use contextApi and UseReducer Hook to manage the state of the data and then pass it down to the child component

  useEffect(()=>{
    startTransition( async () => {
      const res=await getCountrydata();
      console.log(res);
      setCountries(res.data);
    });
  },[])

  /**
   * setStransition hook ko useffect ke andar use krenge
   * startTransition() invokes the setTransition
   * ek baar await kr lenge
   */
  const searchCountry=(country)=>{
    if(search){
      return country.name.common.toLowerCase().includes(search.toLowerCase())
    }
    return country;
  };

  const filterRegion =(country)=>{
    if(filter==="all") return country;
    return country.region===filter;
  }

  //here is the main logic
  const filterCountries = countries.filter((country)=>searchCountry(country) && filterRegion(country));

  if(isPending) return <Loader/>
  //returns the Loading if the data is loading 


  return (
    <section className='country-section'>
      {/* //yahan mai parent se child me bhej raha hun */}
      <SearchFilter
        search={search}
        setSearch={setSearch}
        filter={filter}
        setFilter={setFilter}
        countries={countries}
        setCountries={setCountries}
        />

      <ul className=" cards-containner grid grid-four-cols">
        {filterCountries.map((currCountry,index)=>{
          return <CountryCard country={currCountry} key={index}/>
        })}
      </ul>
    </section>
  )
}

export default Country