module.exports = {
    port: process.env.PORT || 8081,
    db: {
        database: process.env.DB_NAME || 'linedrive',
        user: process.env.DB_USER || 'ld_root',//'root',
        password: process.env.DB_PASS || 'ldroot123',//'root',
        options:{
            dialect: process.env.DIALECT || 'mysql',
            host: process.env.HOST || 'ld-sqldb.c9q5gqhtxa3y.us-east-2.rds.amazonaws.com',//'localhost',
            storage: './tabtracker.mysql'
        }
    },
    authentication:{
        jwtSecret: process.env.JWT_SECRET || 'secret'
    }
}