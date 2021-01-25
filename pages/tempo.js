import tempo from '../pages/api/tempo'

function Tempo(props){
    const dynamicDate = new Date();
    const dynamicDateString = dynamicDate.toGMTString();
 
    return (
        <div>
            <div>{dynamicDateString} (dinâmico)</div>
            <div>{props.allChampionsResponseJson} (estático)</div>           
        </div>
    )
}

export async function getStaticProps(){
    const staticDate = new Date();
    const staticDateString = staticDate.toGMTString();    
    const allChampionsResponse = await fetch("http://ddragon.leagueoflegends.com/cdn/11.2.1/data/pt_BR/champion.json");
    const allChampionsResponseJson = await allChampionsResponse.json();
    return {
        props: {
            staticDateString,
            allChampionsResponseJson           
        },
        revalidate: 10
    }
}

export default Tempo