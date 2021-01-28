import axios from "axios";
import { useState } from "react";
import ChampionGrid from "../src/components/championgrid"

function Picks(props){    
    return (      
        <ChampionGrid champions={props.championsData}/>        
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