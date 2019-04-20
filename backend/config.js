const config = {
    mongo: {
        uri: process.env.MONGO_URL ||
        'mongodb://localhost/citartech',
        options: {useNewUrlParser:true}
    },
    port: process.env.PORT ||
    '4000'
}

module.exports = config;