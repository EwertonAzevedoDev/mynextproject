import styles from '../../styles.module.css'
import { useState } from "react";

function ChampionGrid({champions, needle}){ 
    
    const [dados, setDados] = useState(champions)
  
    const champs = Object.values(dados).map((dado, index) =>       
        <div className={styles.championsGrid} key={dado.id}>
             <img className={styles.imageskew} src={"http://ddragon.leagueoflegends.com/cdn/11.2.1/img/champion/" + dado.id + ".png"}/>  
        </div>
    ).filter(function(el) {
        return el.key.toLowerCase().indexOf(needle.toLowerCase()) > -1;
    })   
    
    return (                
        <div>{champs}</div>             
    )
}



export default ChampionGrid