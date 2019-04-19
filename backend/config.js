const config = {
    mongo: {
        uri: process.env.MONGO_URL ||
        'mongodb://localhost/citartech',
        options: []
    },
    port: process.env.PORT ||
    '4000'
}

module.exports = config;