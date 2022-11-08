import styles from '../styles/Home.module.css'
import Cards from '../components/Cards'


  //url
  const server='https://api.themoviedb.org/3';

import Link from 'next/link'

export async function getStaticProps(){
    const res=await fetch (`${server}/movie/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`)
    const movies= await res.json()
    
    return {
        props:{
            movies
        }
    }
}

export default function Home({movies}){
    console.log(movies)
    return(
        <>
       
            <div>
            
                <ul className={styles.home_container}>
                <h1 className={styles.title}>The most popular Movies: </h1>
                {movies.results.map((movie)=><Cards key={movie.id} movie={movie}/>)}</ul>
            </div>
        </>
    ) 
}

    
//https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1  