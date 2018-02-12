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
    mongoUrl:"localhost",
    mongoPort:"27017",
    mongoDB:"local"
};

module.exports = config;