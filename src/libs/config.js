module.exports = {
    database: "d8h2i4vjgmdrnf",
    username: "ffaqxoeyaqiywi",
    password: "f4fac98be164e8c247b61660003ae8dca62c15c308516e5004c7687c1f7d7e42",

    params: {
        host: 'ec2-54-227-250-33.compute-1.amazonaws.com',
        dialect: 'postgres',
        operatorsAliases: false,
        port: 5432,

        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        }
    },
    sync: {
        // fazer DROP de tudo?
        force: false,
        schema: 'public'
    }
}