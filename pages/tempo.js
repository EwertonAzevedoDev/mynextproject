import axios from "axios";

function Tempo(props){
    const dynamicDate = new Date();
    const dynamicDateString = dynamicDate.toGMTString();
 
    return (
        <div>
            <div>{dynamicDateString} (dinâmico)</div>
            <div>{props.champions} (estático)</div>           
        </div>
    )
}

export async function getStaticProps(){
    const staticDate = new Date();
    const staticDateString = staticDate.toGMTString();    
    const champions = await axios.get("https://mynextproject.vercel.app/api/tempo")
    return {
        props: {
            staticDateString,
            champions           
        },
        revalidate: 10
    }
}

export default Tempo