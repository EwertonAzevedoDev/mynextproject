import axios from "axios";

function Tempo(props){
    const dynamicDate = new Date();
    const dynamicDateString = dynamicDate.toGMTString();
    console.log(props.championsData)
    return (
        <div>
            <div>{dynamicDateString} (dinâmico)</div>
            <div>{props.championsData} (estáticos)</div>           
        </div>
    )
}

export async function getStaticProps(){
    const staticDate = new Date();
    const staticDateString = staticDate.toGMTString();    
    const champions = await axios.get("https://mynextproject.vercel.app/api/tempo")
    const championsData = champions.data
    return {
        props: {
            staticDateString,
            championsData           
        },
        revalidate: 10
    }
}

export default Tempo