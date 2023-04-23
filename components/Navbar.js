import Link from "next/link"
import styles from '../styles/navbar.module.css'
export default function Navbar(){
return(
    <div className={styles.navbar}>
    <h1>Nextmovie</h1>
    <nav className={styles.navbar_links}>
      
        <Link className={styles.navbar_btn}  href='/'>Home</Link>
        <Link className={styles.navbar_btn} href='/trending/Daily'> Daily ranking</Link>
        <Link className={styles.navbar_btn} href='/trending/Week/'>Weekly ranking</Link>
    </nav>
    </div>
)
    

}