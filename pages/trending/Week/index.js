const server="https://api.themoviedb.org/3"
import Cards from "../../../components/Cards"

//styles
import styles from '../../../styles/weekly.module.css'


export async function getStaticProps(){
    const data= await fetch(`${server}/trending/all/week?api_key=${process.env.API_KEY}`)
    const weekly=await data.json()
   
    return{
        props:{weekly}
    }

}

export default function Weekranking({weekly}){
    return(
        <div>
                
            <ul className={styles.weekly}>
                <h1 className={styles.title}>The most voted of the week:</h1>
                {weekly.results.map((element)=> <Cards key={element} movie={element} />)}
                
            </ul>
            
        
        </div>
    )

}