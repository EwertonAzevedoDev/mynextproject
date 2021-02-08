import styles from '../../styles.module.css'
import { useState } from "react";

function Champion(props){ 
    
    const [champion, setChampion] = useState(props.value)    

    return (                
        <div id="bbbb" className={styles.championsGrid} onClick={props.onChoose.bind([this, champion])}>
             <img className={styles.imageskew} campeao={champion.id} alt={champion.id} src={"http://ddragon.leagueoflegends.com/cdn/11.2.1/img/champion/" + champion.id + ".png"}/>  
        </div>            
    )
}

export default Champion

