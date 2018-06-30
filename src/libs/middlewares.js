var bodyParser = require('body-parser')

module.exports = app=>{
    app.set("port", process.env.PORT || 3000)
    app.use((req, resp, next) => {
        //Middleware de pre-execução das rotas
        if(req.body){
            delete req.body.id;
        }
        next();
    });
    app.use(bodyParser.urlencoded({ extended: false }));
    // parse application/json
    app.use(bodyParser.json());

}
