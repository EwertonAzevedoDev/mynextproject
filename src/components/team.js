import styles from '../../styles.module.css'
import { useState } from "react";


function Team({picks}){ 
    
    const [teamPicks, setChampion] = useState(picks)
    const champPicks = teamPicks.map((oPick, index) =>       
        <div className={styles.championsGrid}>
            <img className={styles.imageskew}  src={oPick}/>  
        </div>
    ) 
    return (                
        <div className={styles.team}>
             {champPicks}
        </div>            
    )
}

export default Team
