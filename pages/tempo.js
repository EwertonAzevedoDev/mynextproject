function Tempo(props){
    const dynamicDate = new Date();
    const dynamicDateString = dynamicDate.toGMTString();

    return (
        <div>
            <div>{dynamicDateString} (dinâmico)</div>
            <div>{props.staticDateString} (estático)</div>
            <div>{props.allChampionsResponse} (estático)</div>
        </div>
    )
}

export function getStaticProps(){
    const staticDate = new Date();
    const staticDateString = staticDate.toGMTString();
    const allChampionsResponse = fetch("https://mynextproject.vercel.app/api/tempo");

    return {
        props: {
            staticDateString,
            allChampionsResponse
        },
        revalidate: 1
    }
}
export default Tempo