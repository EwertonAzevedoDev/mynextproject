import axios from "axios";

function Tempo(props){
    const dynamicDate = new Date();
    const dynamicDateString = dynamicDate.toGMTString();
    const dados = props.championsData  
    console.log(dados.data)
    const champs = Object.values(dados.data).map((dado) =>
       
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
    console.log(championsData)
    return {
        props: {            
            championsData           
        },
        revalidate: 10
    }
}

export default Tempo