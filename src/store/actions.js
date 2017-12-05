export const loadData = ({ commit }) => {
    axios.get('data.json')
    .then(response => {
        if(response.data) {
            const coins = response.data.coins;
            const funds = response.data.funds;
            const assets = response.data.portfolio;
            const portfolio = {
                funds: funds,
                coins: assets
            };
            commit('SET_COINS', coins);
            commit('SET_PORTFOLIO', portfolio);
        }
    })
    .catch(error => {
      console.log(error);
    });
};