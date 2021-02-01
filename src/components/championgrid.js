import styles from '../../styles.module.css'
import { Children, useState } from "react";
import Champion from "./champion"

function ChampionGrid({champions, needle}){ 
    
    const [dados, setDados] = useState(champions)
    const showlog = (el) => {
        
        console.log(el)
    }
    const champs = Object.values(dados).map((dado, index) =>       
        <Champion key={dado.id} value={dado}/>
    ).filter(function(el) {
        console.log(el)
        return el.key.toLowerCase().indexOf(needle.toLowerCase()) > -1;
    })   
    
    return (                
        <div onClick={showlog.bind(this)}>{champs}</div>      
               
    )
}



export default ChampionGrid