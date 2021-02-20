// Don't forget to require the ORM. //
const orm = require('../config/orm');

let anyBurger = {

    selectall: function(cb) {
        orm.selectAll('burgers', function(res) {
            cb(res);
        });
    },
    // This is how to get user's burger into a burger table.  Ref. https://docs.mongodb.com/drivers/node/usage-examples/insertOne/ "nsertOne() returns nothing. If you not specify one, this method returns a Promise that resolves to the result object when it completes." //
    insertOne: function(burgerName, cb) {
        onm.insertOne('burgers', Burger_name, burgerName, cb)
    }
};

// Need to get rid of burgers: these will be the burgers "Devoured". Remember, you need a Boolean here. //
burgerStatus: function(cb, burgerGoneBoolean, devouredBurgerID) {
    // ORM!!!!  Use "updateOne," here (just like above). //
    orm.updateOne('burgers', cb, burgerGoneBoolean, devouredBurgerID,)
}