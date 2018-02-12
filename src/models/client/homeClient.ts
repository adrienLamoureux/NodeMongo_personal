class HomeClient {
    public initData = {};
    constructor(){
        this.initData = {
            appName: "sweetHeart",
            map: {
                link: "https://planificateur.a-contresens.net/embed-itineraire/68151-carte?flag=1&style=classic&climate=1&itinerary=1&co2=1&budget=1&centercurrentstep=1&stepnumber=1&futurstep=normal",
                config: {}
            }
        }
    }
}

const homeClient = new HomeClient();

export default homeClient;