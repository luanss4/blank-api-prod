module.exports = app => {

    app.src.db.sequelize.sync().done(() => {
        app.listen(app.get("port"), () => {
            console.log(`API Rodando na porta ${app.get("port")}`);
        });
    });
}