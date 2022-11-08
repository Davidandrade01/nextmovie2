const server='https://api.themoviedb.org/3';

export async function getStaticProps(context){
    const{params}=context
    const data= await fetch(`${server}/movie/popular?api_key=${process.env.API_KEY}&language=en-US&page=1/${params.moviesId}`)
    const movie= await data.json()
    return{
        props:{movie}
    }
}

export async function getStaticPaths(){
    const response=await fetch(`${server}/movie/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`)
    const data= await response.json()
    const paths= data.results.map((movie)=>{
        return{
            params:{moviesId:`${movie.id}`}
        }
    })
    return{paths,fallback:false}

}



export default function Detail ({movie}){
    return(
        <div>
        <h1>Teste</h1>
            <p>{movie.title}</p> 
           
            
                
        </div>
    )
}


//https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1  