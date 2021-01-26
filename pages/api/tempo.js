async function tempo(request, response) {
    const dynamicDate = new Date();

    const allChampionsResponse = await fetch("http://ddragon.leagueoflegends.com/cdn/11.2.1/data/pt_BR/champion.json");
    const allChampionsResponseJson = await allChampionsResponse.json();

    response.setHeader('Cache-Control', 's-maxage=10, stale-while-revalidate');

    response.json({        
        allChampionsResponseJson
    });
}

export default tempo;