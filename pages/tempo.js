import tempo from 'api/tempo';

function Tempo(props){
    const dynamicDate = new Date();
    const dynamicDateString = dynamicDate.toGMTString();
    const allChampionsResponse = tempo;
    return (
        <div>
            <div>{dynamicDateString} (dinâmico)</div>
            <div>{props.staticDateString} (estático)</div>
            <div>{allChampionsResponse} (estático)</div>
        </div>
    )
}

export function getStaticProps(){
    const staticDate = new Date();
    const staticDateString = staticDate.toGMTString();
    

    return {
        props: {
            staticDateString            
        },
        revalidate: 1
    }
}
export default Tempo