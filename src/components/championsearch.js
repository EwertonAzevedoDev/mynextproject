import styles from '../../styles.module.css'
import ChampionGrid from "./championgrid"
import { useState } from "react";

function ChampionSearch({champions}){    
    const [needle, setNeedle] = useState('')
    const [championList, setChampionList] = useState(champions.allChampionsResponseJson.data)
    const search = (event) => {
        setNeedle(event.target.value)       
    }
   
    return (    
        <div className={styles.championPool}>
             <div className={styles.searchBar}><label>Procurar: </label><input type="text" onChange={search} value={needle} /></div> 
            <ChampionGrid champions={championList} needle={needle}/>    
        </div> 
    )
}



export default ChampionSearch