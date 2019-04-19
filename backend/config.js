const config = {
    mongo: {
        uri: process.env.MONGO_URL ||
        'mongodb://localhost/citartech',
        options: []
    },
    port: process.env.port ||
    '4000'
}

module.exports = config;