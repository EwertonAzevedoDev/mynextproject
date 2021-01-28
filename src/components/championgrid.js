import styles from '../../styles.module.css'
import { useState } from "react";

function ChampionGrid({champions, needle}){ 
    console.log(needle) 
    const [dados, setDados] = useState(champions.allChampionsResponseJson.data)
    
    //Fazer funcao que filtra os dados pelo que vier no needle
    
    
  
    const champs = Object.values(dados).map((dado, index) =>       
        <div className={styles.championsGrid} key={index}>
             <img className={styles.imageskew} src={"http://ddragon.leagueoflegends.com/cdn/11.2.1/img/champion/" + dado.id + ".png"}/>  
        </div>
    )    
    return (                
        <div>{champs}</div>             
    )
}



export default ChampionGrid