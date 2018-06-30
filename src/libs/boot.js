module.exports = function(app) {

    app.src.db.sequelize.sync().done(function() {
        app.listen(app.get("port"), function(){
            console.log(`API Rodando na porta ${app.get("port")}`);
        });
    });
}