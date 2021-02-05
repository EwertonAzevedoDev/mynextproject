import styles from '../../styles.module.css'
import { useState } from "react";


function Team({picks, side}){ 
    
    const [teamPicks, setTeamPicks] = useState(picks)
    console.log(picks)
    console.log(teamPicks)
    if(picks != teamPicks){
        setTeamPicks(picks)
    }
    const champPicks = teamPicks.map((oPick, index) =>     
         
        <div className={styles.championsGrid}>            
            <img className={styles.imageskew}  src={oPick.champ}/>  
        </div>
    ) 
    return (
                    
        <div className={`${styles.team} ${side == "blue" ? styles.blue : styles.red}`}>
             {champPicks}
        </div>            
    )
}

export default Team
