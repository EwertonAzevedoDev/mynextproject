function Tempo(){
    const dynamicDate = new Date();
    const dynamicDateString = dynamicDate.toGTMString();

    return (
        <div>
            {dynamicDateString} (dinâmico)
        </div>
    )
}

export default Tempo;