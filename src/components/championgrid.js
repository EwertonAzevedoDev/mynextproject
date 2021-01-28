import styles from '../../styles.module.css'

function ChampionGrid({champions, pesquisa}){    
    const dados = champions.allChampionsResponseJson.data
    
    console.log(champions)
    const champs = Object.values(dados).map((dado, index) =>       
        <div className={styles.championsGrid} key={index}>
             <img className={styles.imageskew} src={"http://ddragon.leagueoflegends.com/cdn/11.2.1/img/champion/" + dado.id + ".png"}/>  
        </div>
    )    
    return (
        <div className={styles.championPool}>            
            <div>{champs}</div>
        </div>       
    )
}



export default ChampionGrid