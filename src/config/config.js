const config = {
    url:"127.0.0.1",
    port:"3000",
    api: {
        default:"/api",
        home:"/api/home",
        user:"/api/user",
        type:"/api/type",
        item:"/api/item"
    },
    allowCORS: true,
    authorizedCORS:"4200",
    mongoUser: "adrien8",
    mongoPwd: "perso_adrien8",
    mongoUrl:"adrien8:perso_adrien8@ds163730.mlab.com",
    mongoPort:"63730",
    mongoDB:"perso"
};

module.exports = config;