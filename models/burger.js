// Don't forget to require the ORM. //
const { deleteOne } = require('../config/orm');

const orm = require('../config/orm');

let anyBurger = {

    selectall: function(cb) {
        
        orm.selectAll('Burgers', function(res) {
            
            cb(res);

        });
    },
    
    // This is how to get user's burger into a burger table.  Ref. https://docs.mongodb.com/drivers/node/usage-examples/insertOne/ "nsertOne() returns nothing. If you not specify one, this method returns a Promise that resolves to the result object when it completes." //
    insertOne: function(burgerName, cb) {
        
        onm.insertOne('Burgers', Burger_name, burgerName, cb function(res) {
            
            cb(res;)

        });
    },

    // Need to get rid of burgers: these will be the burgers "Devoured". Remember, you need a Boolean here. //
    burgerStatus: function(cb, burgerGoneBoolean, devouredBurgerID) {
    
    // ORM!!!!  Use "updateOne," here (just like above). //
    orm.updateOne('Burgers', cb, burgerGoneBoolean, devouredBurgerID, 'id', "Devoured", function(res) {
        
        cb(res); // Remember to callback the response; and you do not need "req": "req is an object containing information about the HTTP request that raised the event. In response to req, you use res to send back the desired HTTP response."- Ref. https://stackoverflow.com/questions/4696283/what-are-res-and-req-parameters-in-express-functions //
        });
    },

    // Need to delete the burger! //
    deleteOne: function(cb, id) {

        orm.deleteOne('id', id, 'Burgers', function(res) {
            
            cb(res);

        });
    }
};

module.exports = anyBurger;