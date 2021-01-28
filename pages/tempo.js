import axios from "axios";
import styles from '../styles.module.css'

function Tempo(props){
    const dynamicDate = new Date();
    const dynamicDateString = dynamicDate.toGMTString();
    const dados = props.championsData.allChampionsResponseJson.data  
    console.log(dados)
    const champs = Object.values(dados).map((dado) =>
       
        <div className={styles.championsGrid} key={dado.key}>
             <img className={styles.imageskew} src={"http://ddragon.leagueoflegends.com/cdn/11.2.1/img/champion/" + dado.id + ".png"}/>  
        </div>
    )    
    return (
        <div className={styles.championPool}>
            <div className={styles.searchBar}><label>Procurar: </label><input type="text"/></div>
            <div>{champs}</div>
        </div>       
    )
}

export async function getStaticProps(){     
    const champions = await axios.get("https://mynextproject.vercel.app/api/tempo")
    const championsData = champions.data    
    return {
        props: {            
            championsData           
        },
        revalidate: 10
    }
}

export default Tempo