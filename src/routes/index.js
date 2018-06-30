module.exports = function(app){
    app.get('/', function(req, resp){
        resp.json({status: "API Rodando!"});
    });
}