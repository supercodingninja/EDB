// IMPORTANT NOTE TO SELF: Go back to COMMITTING IMMEDIATELY after each function: so you do not lose your work, by accidental deletes, computer issues, etc.!  YOU'RE NEW TO THIS; and it's OKAY- who cares if more experience developers do not overly commit- YOU HAVE TO DO WHAT WORKS BEST FOR YOU; SO DO IT, AND DO IT GREAT!!! //

// Ratings //
function ratings() {

    $.ajax('/api/burgers', {
        
        method: 'GET',
    })
    
    .then(function (data) {
        
        for (var i = 0; i < data.length; i++) {
            
            ratings(data[i].id, data[i].rating);
        }
    });
};


// How do I update my ratings? //
 $('.fa-star').on('click', function (e) {
    
    e.preventDefault();
    
    let ratingInt = $(this).data('rating');
    
    let id = $(this).parent().data('burgerID'); // I do not know what I should put here. //

    let burgerData = {
        
        rating: ratingInt
    };

    // render stars
    ratings(id, ratingInt);

    // DON'T FORGET THE DATABASE!!! //
    $.ajax('/api/burgers/' + id, {
        
        data: burgerData,
        
        method: 'PUT'
    })
    
    .then(function () {
        
        location.reload(); 
    });
});


// Ref. views/specifics/getBurger.handlebars //
const burgerTemplate = (burgerName, id, not_devoured) => {
    
    const burgerContainer = $('<div>').attr({
        
        class: 'getBurger',
        
        id: id

    });

    const img = $('<img>').attr('src', '../Media/DaFavs.png');
    
    const name = $('<p>');
    
    const button = $('<button>').attr({
        
        'data-id': id,
        
        class: 'btn btn-default devoured',
        
        'data-state': not_devoured
    });

    name.html(burgerName);
    
    button.html('Da Favs!');

    burgerContainer.append(img, name, button);
    
    return burgerContainer;
};


// Getting new burgers to appear. //
const getNewBurger = (Burger) => {
    
    location.reload()
};


// What happens if a burger does't load? //
const noBurger = (res) => {
    
    alert('No money, no burger!  Please wash your hands by refreshing your page.');

};


// User's Burger submission (the submit button). //
$('#submitBurger').on('submit', function(e) {
    alert("click me")
  //  ratings();
    console.log("submits");
    
    e.preventDefault(); // Keeps the page from refreshing. //
    
    const burgerName = $('#Burger_name').val();


    const data = {
            
        burger_name: burgerName,


        devoured: 0
    
    };

    fetch('/api/burgers', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
        location.reload();
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });


    
     
});


// "Devoured!" or "Not Devoured" //
const addToDevoured = (Burger) => {
    
    const id = Burger.id;
    
    $(`#${id}`).remove();

};


// What if these buttons do not work? //
const addFail = () => {
   
    alert('Fail to add Devoured.');

};


$(document).on('click', '.devoured', function() {
    
    const id = $(this).attr('data-id');
    
    const value = $(this).attr('data-state');
     
    const burgerData = {
        devoured:1
    }

    // let condition = value === '0' ? false : true; //

    $.ajax('/api/burgers/' + id, {
        
        method: 'PUT',
        
        data: burgerData
    })
    
    .then(function() {
            
        console.log('Bye-bye, Burger!');
            
        location.reload();
    
    })

    .then(addToDevoured)
    
    .catch(addFail);
});


const removeBurger = (burger) => {
    
    const id = burger.id;

    $(`.btb .Burger[data-id=${id}]`).remove();
};


const removeFailed = () => {
    
    alert('Fail to delete burger.');
};

$('.btb .Burger button').on('click', function() {
    
    const id = $(this).attr('data-id');


    $.ajax({
        
        url: '/api/burgers', // I really want to get something like this `/delete/${id}` down. //
        
        method: 'DELETE'
    })

    .then(removeBurger)
    
    .catch(removeFailed);
});