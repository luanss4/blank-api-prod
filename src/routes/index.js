module.exports = app=>{
    app.get('/', (req, resp)=>{
        resp.json({status: "API Rodando!"})
    })
}