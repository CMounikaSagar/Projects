// REACT/TANSTACK QUERY EXAMPLE


import { useSuperHero } from './UseQuerHook'
import { Link } from 'react-router-dom'




const RQSuperHeroes = () => {

  // const { data } = useQuery<SuperHero[]>['super-heroes', getData]

  // const { data } = useQuery<SuperHero[]>('hero', getData)

  const { data, isError, error, isLoading, isFetching, refetch } = useSuperHero()

  if(isLoading || isFetching) {
    return <h2>Loading...</h2>
  }

  if(isError){
    return <h2>{error.message}</h2>
  }

  function handleClick() {
    refetch();
  }


  return (
    <>
   
    <h2>RQ Super Heroes</h2>
    <button onClick={handleClick}>Refetch</button>

    {data?.map((hero)=>{
      return(
        <div key={hero.id}>
          <Link to={`/rq-super-heroes/${hero.id}`}>{hero.user_name}</Link>
        </div>
      )
    })}
      
      {/* { data?.map((post, index) => (
        <div key={index}>
          <li>{post.user_age}</li>
        </div>
      ))} */}
    </>
  )
}

export default RQSuperHeroes