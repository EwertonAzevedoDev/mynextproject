import axios from "axios";

function Tempo(props){
    const dynamicDate = new Date();
    const dynamicDateString = dynamicDate.toGMTString();
    const dados = props.championsData.allChampionsResponseJson.data  
    console.log(dados)
    const champs = Object.values(dados).map((dado) =>
       
        <div key={dado.key}>
             <img src={"http://ddragon.leagueoflegends.com/cdn/11.2.1/img/champion/" + dado.id + ".png"}/>  
        </div>
    )    
    return (
        <div>            
            {champs}                  
        </div>
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

export default Tempo