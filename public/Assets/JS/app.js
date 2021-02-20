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