import styles from '../../styles.module.css'
import ChampionGrid from "./championgrid"
import Champion from "./champion"
import Team from "./team"
import Ban from "./ban"
import { useState } from "react";

let idPick = 0
const generateIdPick = () => {
    idPick = idPick + 1
    return idPick
}

function ChampionSearch({champions}){    
    const [needle, setNeedle] = useState('')
    const [championList, setChampionList] = useState(champions.allChampionsResponseJson.data)
    const [choices, setChoices] = useState([])
    const [blueSidePicks, setBlueSidePicks] = useState([])
    const [redSidePicks, setRedSidePicks] = useState([])
    const [blueSideBans, setBlueSideBans] = useState([])
    const [redSideBans, setRedSideBans] = useState([])

    const addChoice = (champion, pickOrBan, team) => {
        
        const newChoice = {
            id: generateIdPick(),
            champ: champion,
            pickOption: pickOrBan,
            teamSide: team
        }
        if(pickOrBan == "pick" && team == "blue"){
            setBlueSidePicks((exstingBluePicks) => {
                return [...exstingBluePicks, newChoice]
            }) 
        }
        if(pickOrBan == "pick" && team == "red"){
            setRedSidePicks((exstingRedPicks) => {
                return [...exstingRedPicks, newChoice]
            }) 
        }
        if(pickOrBan == "ban" && team == "blue"){
            setBlueSideBans((exstingBlueBans) => {
                return [...exstingBlueBans, newChoice]
            }) 
        }
        if(pickOrBan == "ban" && team == "red"){
            setRedSideBans((exstingRedBans) => {
                return [...exstingRedBans, newChoice]
            }) 
        }
      
    }

    
    const search = (event) => {
        setNeedle(event.target.value)       
    }
   
    return (   
        <div> 
            <div className={styles.container}>
                <Team picks={blueSidePicks} side="blue"/> 
                <div className={styles.championPool}>
                    <div className={styles.searchBar}><label>Procurar: </label><input type="text" onChange={search} value={needle} /></div> 
                    <ChampionGrid champions={championList} needle={needle} onChooseChampion={addChoice}/>                  
                </div> 
                <Team picks={redSidePicks} side="red"/>               
            </div>
            <div className={styles.flex}>
                <Ban picks={blueSideBans} side="blue"/>
                <Ban picks={redSideBans} side="red"/>
            </div>
        </div>
    )
}



export default ChampionSearch