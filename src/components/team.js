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
        <div className={styles.championsGrid2} key={oPick.id}>            
            <img className={styles.imageskew2}  src={"http://ddragon.leagueoflegends.com/cdn/img/champion/splash/" + oPick.champ + "_0.jpg"}/>  
        </div>
    ) 
    return (
                    
        <div className={`${styles.team} ${side == "blue" ? styles.blue : styles.red}`}>
             {champPicks}
        </div>            
    )
}

export default Team
