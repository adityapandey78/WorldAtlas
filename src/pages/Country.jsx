import React, { useState } from 'react'
import { useEffect,useTransition } from 'react'
import { getCountrydata } from '../API/postApi';
import Loader from '../UI/Loader';
import CountryCard from '../Layout/CountryCard';
/**
 * useTransition: This is a hook which helps to load the data wihout any waiting or state change
 * Allows components to avoid undesirable loading states by waiting for content to load before transitioning to the next screen. It also allows components to defer slower, data fetching updates until subsequent renders so that more crucial updates can be rendered immediately.
 * @see-- https://react.dev/reference/react/useTransition 
 */

const Country = () => {
  const[isPending,startTransition]=useTransition();
  const [countries,setCountries]=useState([]);

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
  if(isPending) return <Loader/>
  //returns the Loading if the data is loading 
  return (
    <section className='country-section'>
      <ul className="grid grid-four-cols">
        {countries.map((currCountry)=>{
          return <CountryCard country={currCountry}/>
        })}
      </ul>
    </section>
  )
}

export default Country