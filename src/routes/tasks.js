module.exports = app => {
    var Tasks = app.src.db.models.Tasks;

    app.route("/tasks")
        .get((req, resp) => {
            //tasks: Listar tarefas
            Tasks.findAll({})
                .then(result => resp.json(result))
                .catch(error => {
                    resp.status(412).json({
                        msg: error.message
                    })
                })
        })
        .post((req, resp) => {
            //tasks: Cadastrar uma tarefa
            Tasks.create(req.body)
                .then(result => {
                    resp.json(result)
                })
                .catch(error => {
                    resp.status(412).json({
                        error: error.message
                    })
                })
        });

    app.route("/tasks/:id")
        .get((req, resp) => {
            //Consulta uma tarefa por id
            Tasks.findOne({
                    where: req.params
                })
                .then(result => {
                    if (result) {
                        resp.json(result)
                    } else {
                        resp.sendStatus(404)
                    }
                })
                .catch(error => {
                    resp.status(412).json({
                        msg: error.message
                    })
                })
        })
        .put((req, resp) => {
            //Atualiza uma tarefa por id 
            Tasks.update(req.body, {
                    where: req.params
                })
                .then(result => resp.sendStatus(204))
                .catch(error => {
                    resp.status(412).json({
                        msg: error.message
                    })
                })
        })
        .delete((req, resp) => {
            //Deleta uma tarefa por id
            Tasks.destroy({
                    where: req.params.id
                })
                .then(result => resp.sendStatus(204))
                .catch(error => {
                    resp.status(412).json({
                        msg: error.message
                    })
                })
        })
}