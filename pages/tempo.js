import tempo from '../pages/api/tempo'

function Tempo(props){
    const dynamicDate = new Date();
    const dynamicDateString = dynamicDate.toGMTString();
 
    return (
        <div>
            <div>{dynamicDateString} (dinâmico)</div>
            <div>{props.staticDateString} (estático)</div>  
            <div>{props.champions} (estático)</div>          
        </div>
    )
}

export function getStaticProps(){
    const staticDate = new Date();
    const staticDateString = staticDate.toGMTString();    
    const champions = new tempo()

    return {
        props: {
            staticDateString,
            champions           
        },
        revalidate: 1
    }
}

export default Tempo