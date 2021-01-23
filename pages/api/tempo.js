async function tempo(request, response) {
    const dynamicDate = new Date();

    const allChampionsResponse = await fetch("http://ddragon.leagueoflegends.com/cdn/11.2.1/data/pt_BR/champion.json");
    const allChampionsResponseJson = await allChampionsResponse.json();

    response.json({
        date: dynamicDate.toGMTString(),
        champions: allChampionsResponseJson
    });
}

export default tempo;