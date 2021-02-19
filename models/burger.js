const orm = require('../config/orm');

let burger = {

    selectall: function(cb){
        orm.selectAll('burgers', function(res){
            cb(res);
        });
    },

    insertOne: function(burgerName, cb){
        onm.insertOne('burgers', Burger_name)
    }

};