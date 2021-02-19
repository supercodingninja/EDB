// Don't forget to require the ORM. //
const orm = require('../config/orm');

let burger = {

    selectall: function(cb){
        orm.selectAll('burgers', function(res){
            cb(res);
        });
    },
    // This is how to get user's burger into a burger table.  Ref. https://docs.mongodb.com/drivers/node/usage-examples/insertOne/ "nsertOne() returns nothing. If you not specify one, this method returns a Promise that resolves to the result object when it completes." //
    insertOne: function(burgerName, cb){
        onm.insertOne('burgers', Burger_name)
    }

};