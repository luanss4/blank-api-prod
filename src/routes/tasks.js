module.exports = function(app){
    var Tasks = app.src.db.models.Tasks;
    app.get('/tasks', function(req, resp){
        Tasks.findAll({}).then(function(tasks){
            resp.json({tasks: tasks});
        })
    })
}