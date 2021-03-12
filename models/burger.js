// Don't forget to require the ORM. //
 

const orm = require('../config/orm.js');

let anyBurger = {

    selectAll: function (cb) {
        
        orm.selectAll('BigTimeEst_Burgers', function (data) {
            
            cb (data);

        });
    },
    
    // This is how to get user's burger into a burger table.  Ref. https://docs.mongodb.com/drivers/node/usage-examples/insertOne/ "insertOne() returns nothing. If you not specify one, this method returns a Promise that resolves to the result object when it completes." //
    insertOne: function (body, cb) {
        
        orm.insertOne('BigTimeEst_Burgers', body,  function (res) {
            console.log(res,"----------------")
            cb(res);

        });
    },

    // Need to get rid of burgers: these will be the burgers "Devoured". Remember, you need a Boolean here. //
    burgerStatus: function (cb, burgerGoneBoolean, devouredBurgerID) {
    
    // ORM!!!!  Use "updateOne," here (just like above). //
    orm.updateOne('Burgers', cb, burgerGoneBoolean, devouredBurgerID, 'id', "Devoured", function (res) {
        
        cb (res); // Remember to callback the response; and you do not need "req": "req is an object containing information about the HTTP request that raised the event. In response to req, you use res to send back the desired HTTP response."- Ref. https://stackoverflow.com/questions/4696283/what-are-res-and-req-parameters-in-express-functions //
        });
    },

    // Need to delete the burger! //
    deleteOne: function(cb, id) {

        orm.deleteOne('id', id, 'Burgers', function(res) {
            
            cb(res);

        });
    },

    // DON'T FORGET THE RATINGS!!! //
    updateRating: function (ratingNum, burgerID, cb) {
        
        orm.updateOne('Ratings', ratingInt, cb, 'Burgers', 'id', burgerID, function (res) { // Not sure how I will rate the burgers; i. e. "+A, A...F, F-"; or is best to rate by numbers, "1...10," worst to Best; or best to worst...perhaps I will have to stick to the 5-Stars rating; but I need to decide how I will render these stars to display/disappear...or probably have five stars as emptied shells (unhighlighted images), where the user can select their choice...

            cb(res);

        });
    }
};

module.exports = anyBurger;