import axios from "axios";
import { useState } from "react";

import ChampionSearch from "../src/components/championsearch"


function Picks(props){    
    return (        
        <ChampionSearch champions={props.championsData}/>     
    )
}

export async function getStaticProps(){     
    const champions = await axios.get("https://mynextproject.vercel.app/api/tempo")
    const championsData = champions.data    
    return {
        props: {            
            championsData           
        },
        revalidate: 10
    }
}

export default Picks