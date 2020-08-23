import axios from 'axios';

const urlOverview = 'https://onemocneni-aktualne.mzcr.cz/api/v2/covid-19/zakladni-prehled.json';
const urlDaily = 'https://onemocneni-aktualne.mzcr.cz/api/v2/covid-19/nakazeni-vyleceni-umrti-testy.json';

export const fetchData = async () => {
    try {
        const { data: { modified, data: {0: {provedene_testy_celkem, potvrzene_pripady_celkem, aktivni_pripady, vyleceni, umrti, aktualne_hospitalizovani}}}} = await axios.get(urlOverview);
        return { modified, provedene_testy_celkem, potvrzene_pripady_celkem, aktivni_pripady, vyleceni, umrti, aktualne_hospitalizovani };
    } catch (e) {
    
    }
}

export const fetchDailyData = async () => {
    try {
        const { data : { data} } = await axios.get(urlDaily);

        const formatedData = data.map((dailyData) => ({
            kumulativni_pocet_nakazenych: dailyData.kumulativni_pocet_nakazenych,
            kumulativni_pocet_vylecenych: dailyData.kumulativni_pocet_vylecenych,
            kumulativni_pocet_umrti: dailyData.kumulativni_pocet_umrti,
            datum: dailyData.datum
        }))

        return formatedData;
    } catch (e) {
        
    }
}
