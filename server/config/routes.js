const mongoose = require('mongoose')

var task = require('../controllers/tasks.js')

module.exports = function (app){
    app.get('/', task.index)

    app.post('/create', task.create)

    app.get('/delete/:title', task.delete)

    app.post('/update/:title', task.update)
}
