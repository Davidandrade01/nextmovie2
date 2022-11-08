import Image from "next/image";
import {FaStar,FaRegCalendarAlt}from "react-icons/fa"


//Styles
import styles from '../styles/cards.module.css'
import Link from "next/link";


export default function Cards ({movie}){
    return( 
       
            <div className={styles.cards}>
               <Image src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} width={200} height={300} alt={movie.title}/>
                <h1 className={styles.cards_titles}>{movie.title}</h1>
                 <p className={styles.cards_paragraph}><FaStar className={styles.cards_icons}/> {movie.vote_average.toFixed(1)}</p>
                 <p className={styles.cards_paragraph}><FaRegCalendarAlt className={styles.cards_icons}/> {movie.release_date}</p>
                 <Link className={styles.cards_btn} href={`/trending/detailId=${movie.title}`}>Details</Link>
                
            </div>
        

    )
}