import styles from '../../styles.module.css'
import { useState } from "react";


function Ban({picks, side}){ 
    
    const [teamPicks, setTeamPicks] = useState(picks)
    console.log(picks)
    console.log(teamPicks)
    if(picks != teamPicks){
        setTeamPicks(picks)
    }
    const champPicks = teamPicks.map((oPick, index) =>
        <div className={styles.championsGrid} key={oPick.id}>            
            <img className={styles.imageskew}  src={oPick.champ}/>  
        </div>
    ) 
    return (
                    
        <div className={`${styles.ban} ${side == "blue" ? styles.blue : styles.red}`}>
             {champPicks}
        </div>            
    )
}

export default Ban
