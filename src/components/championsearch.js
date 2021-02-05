import styles from '../../styles.module.css'
import ChampionGrid from "./championgrid"
import Champion from "./champion"
import Team from "./team"
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

    const addChoice = (champion, pickOrBan, team) => {
        console.log(champion)
        console.log(pickOrBan)
        console.log(team)
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
      
    }

    const blueSidePicksComp = blueSidePicks.map((dado, index) =>       
        <Champion key={dado.id} value={dado.champ}/>
    )

    const redSidePicksComp = redSidePicks.map((dado, index) =>       
        <Champion key={dado.id} value={dado.champ}/>
    )
    console.log(blueSidePicks)
    console.log(redSidePicks)
    const search = (event) => {
        setNeedle(event.target.value)       
    }
   
    return (    
        <div className={styles.container}>
            <Team picks={blueSidePicksComp}/> 
            <div className={styles.championPool}>
                <div className={styles.searchBar}><label>Procurar: </label><input type="text" onChange={search} value={needle} /></div> 
                <ChampionGrid champions={championList} needle={needle} onChooseChampion={addChoice}/>                  
            </div> 
            <Team picks={redSidePicks}/> 
        </div>
    )
}



export default ChampionSearch