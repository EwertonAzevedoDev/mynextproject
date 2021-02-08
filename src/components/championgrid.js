import styles from '../../styles.module.css'
import { Children, useState } from "react";
import Champion from "./champion"

let pickControl = 0
let pickOrBan = ""
let side = ""
const pickOrdering = () => {
    if(pickControl == 0 || pickControl == 2 || pickControl == 4 || pickControl == 13 || pickControl == 15){
        pickOrBan = "ban"
        side = "blue"
    }
    if(pickControl == 1 || pickControl == 3 || pickControl == 5 || pickControl == 12 || pickControl == 14){
        pickOrBan = "ban"
        side = "red"
    }
    if(pickControl == 6 || pickControl == 9 || pickControl == 10 || pickControl == 17 || pickControl == 18){
        pickOrBan = "pick"
        side = "blue"
    }
    if(pickControl == 7 || pickControl == 8 || pickControl == 11 || pickControl == 16 || pickControl == 19){
        pickOrBan = "pick"
        side = "red"
    }
    if(pickControl > 19){
        pickOrBan = "finish"
    }

    let obj = {}
    obj.pickOrBan = pickOrBan
    obj.side = side

    pickControl = pickControl + 1    

    return obj

}

function ChampionGrid({champions, needle, onChooseChampion}){ 
    
    const [dados, setDados] = useState(champions)
    

    const chooseChampion = (el) => {  
        console.log(el)
        let pickWhere = pickOrdering()   
        if(pickWhere.pickOrBan != "finish"){              
            onChooseChampion(el.target.currentSrc, pickWhere.pickOrBan, pickWhere.side) 
            el.target.setAttribute('style', 'display: none');
        }
        
    }

    const champs = Object.values(dados).map((dado, index) =>       
        <Champion key={dado.id} value={dado} onChoose={chooseChampion}/>
    ).filter(function(el) {        
        return el.key.toLowerCase().indexOf(needle.toLowerCase()) > -1;
    })   
    
    return (                
        <div id="aaaaa">{champs}</div>      
               
    )
}



export default ChampionGrid