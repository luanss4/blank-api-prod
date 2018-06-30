module.exports = {
    database: "ntask",
    username: "postgres",
    password: "postgres",

    params: {
        host: 'localhost',
        dialect: 'postgres',
        operatorsAliases: false,

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