const mongoose = require('mongoose')

var Task = mongoose.model('Task')

module.exports = {
    index : function(req, res){
        Task.find({}, function(err, data){
            res.json({data:data})
        })
    },

    create : function(req, res){
        var task = new Task({title: req.body.title, description: req.body.description})

        task.save(function(err){
            if(err){
                res.json({'Error':err})
            } else {
                res.redirect('/')
            }
        })
    },

    delete : function(req, res){
        Task.deleteOne({title: req.params.title}, function(err){
            if(err){
                res.json({'Error': err})
            } else {
                res.redirect('/')
            }
        })
    },

    update : function(req, res){
        Task.findOneAndUpdate({title: req.params.title}, {$set: {completed: true}}, function(err){
            if(err){
                res.json({'Error': err})
            } else {
                res.redirect('/')
            }
        })
    }
}