// IMPORTANT NOTE TO SELF: Go back to COMMITTING IMMEDIATELY after each function: so you do not lose your work, by accidental deletes, computer issues, etc.!  YOU'RE NEW TO THIS; and it's OKAY- who cares if more experience developers do not overly commit- YOU HAVE TO DO WHAT WORKS BEST FOR YOU; SO DO IT, AND DO IT GREAT!!! //

// Ref. views/specifics/getBurger.handlebars //
const burgerTemplate = (burgerName, id, is_favorite) => {
    
    const burgerContainer = $('<div>').attr({
        
        class: 'getBurger',
        
        id: id

    });

    const img = $('<img>').attr('src', '/public/Assets/Media/DaFavs.png');
    
    const name = $('<p>');
    
    const button = $('<button>').attr({
        
        'data-id': id,
        
        class: 'btn btn-default favorites',
        
        'data-state': is_favorite
    });

    name.html(burgerName);
    
    button.html('Da Favs!');

    burgerContainer.append(img, name, button);
    
    return burgerContainer;
};

// Getting new burgers to appear. //
const getNewBurger = (Burger) => {
    
    const freshBurger = burgerTemplate(name, id, is_favorite);
    
    const name = Burger.Burger_name;
    
    const id = Burger.id;
    
    const is_favorite = Burger.is_favorite;
    
    $('.getBurger').prepend(freshBurger);
    
    $('input').val('');
};

// What happens if a burger does't load? //
const noBurger = (res) => {
    
    alert('No money,no burger!  Please wash your hands by refreshing your page.');

};

// User's Burger submission (the submit button). //
$('button[type=submit]').on('click', function(event) {
    
    e.preventDefault(); // Keeps the page from refreshing. //
    
    const burgerName = $('input[name="Burger_name"]').val();

    $.ajax({
        
        url: '/api/models/burger.js',
        
        method: 'POST',
        
        data: {
            
            Burger_name: burgerName
        
        }
    })
    
    .then(getNewBurger)
    
    .catch(noBurger);
});

// "DaFavs!" or "Yuck!" //
const addFav = (Burger) => {
    const id = Burger.id;
    $(`#${id}`).remove();
};

// What if these buttons do not work? //
const addFail = () => {
    alert('Fail to add Fav');
};