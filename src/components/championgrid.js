import styles from '../../styles.module.css'
import { Children, useState } from "react";
import Champion from "./champion"

function ChampionGrid({champions, needle, onChooseChampion}){ 
    
    const [dados, setDados] = useState(champions)
    

    const chooseChampion = (el) => {
        onChooseChampion(el.target.currentSrc, "pick", "blue")
        
    }

    const champs = Object.values(dados).map((dado, index) =>       
        <Champion key={dado.id} value={dado}/>
    ).filter(function(el) {        
        return el.key.toLowerCase().indexOf(needle.toLowerCase()) > -1;
    })   
    
    return (                
        <div onClick={chooseChampion.bind(this)}>{champs}</div>      
               
    )
}



export default ChampionGrid