//url 
//https://api.themoviedb.org/3/trending/all/day?api_key=<<api_key>>



//components

import Cards from "../../../components/Cards"

//Style
import styles from '../../../styles/daily.module.css'

const server="https://api.themoviedb.org/3"
export async function getStaticProps(){
    const data=await fetch(`${server}/trending/all/day?api_key=${process.env.API_KEY}`)
    const daily=await data.json()
  return{
    props:{daily}
  }
}



export default function Dailyranking({daily}){

    return (
        <div>
            <ul className={styles.daily}>
                <h1 className={styles.title}>The most voted of the day:</h1>
                {daily.results.map((element)=> <Cards key={element} movie={element} />)}
                
            </ul>
            
        </div>
    )
}

