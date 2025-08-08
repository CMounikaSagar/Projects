import { useEffect, useState} from 'react'
import axios from 'axios';

type SuperHero = {  id: number;
  user_name: string;
  user_age:number;
  user_city:string;
  user_country:string;
  user_email:string;
  user_password:string;
}

const SuperHeroes = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data1, setData] = useState<SuperHero[]>([]);

  useEffect(() => {
    const getData = async() => {
      const res = await axios.get('http://127.0.0.1:8000/practices/')
      setData(res.data);
      setIsLoading(false);
    }
    getData();
  },[])
  console.log(data1)
  
  return (
    <div>
      <h2>SuperHeroes</h2>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <ul>
          {data1 && data1.map((hero,index) => (
            <li key={index}>
              {hero.user_name} - {hero.user_age}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default SuperHeroes