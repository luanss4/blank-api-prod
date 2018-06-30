module.exports = app => {
    var Users = app.src.db.models.Users;

    app.get("/users/:id", (req, resp) => {
        Users.findById(req.params.id, {
                attributes: ["id, name, email"]
            })
            .then(result => resp.json(result))
            .catch(error => {
                resp.status(412).json({
                    msg: error.message
                })
            })
    });

    app.delete("/users/:id", (req, resp) => {
        Users.destroy({
                where: {
                    id: req.params.id
                }
            })
            .then(result => resp.sendStatus(204))
            .catch(error => {
                resp.status(412).json({
                    msg: error.message
                })
            })
    });

    app.post("/users", (req, resp) => {
        Users.create(req.body)
            .then(result => resp.json(result))
            .catch(error => {
                resp.status(412).json({
                    msg: error.message
                })
            })
    });
}