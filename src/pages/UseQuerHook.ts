// REACT QUERY HOOK EXAMPLE

import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { data } from 'react-router-dom';


const getData = async (): Promise<SuperHero[]> => {
  const response = await axios.get('http://127.0.0.1:8000/practices/')
  return response.data;
}


type SuperHero = {
  id: number;
  user_name: string;
  user_age: number;
  user_city: string;
  user_country: string;
  user_email: string;
  user_password: string;
}


export const useSuperHero = ()=>{
    return  useQuery({
        queryKey: ['super-heroes'],
        queryFn: getData,
        // refetchOnMount: true,
        // refetchInterval: 10000,  automatically refetch every 10 seconds
        // refetchOnWindowFocus: false,
        // staleTime: 1000 * 60 * 5,
        // gcTime: 5000,
        enabled: false, // disable automatic fetching
        // select: (data: SuperHero[]) => {
        //     const modifiedData = data.map((hero) => ({
        //         ...hero,
        //         user_name: hero.user_name.toUpperCase(),
        //     }));
        //     return modifiedData;
        // }
      })
}
    