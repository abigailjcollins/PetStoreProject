var shop = [
    {
        title: 'Birds',
        image: './birds.jpg',
        price: '40',
        description: ''
        
    },
  
    
    {
        title: 'Fish',
        image: './fish1.jpg',
        price: '20',
        description: ''
        
    },
    {
        title: 'Hunter',
        image: './blackdog.jpg',
        price: '85',
        description: ''
        
    },
    {
        title: 'Bruno',
        image: './husky.jpg',
        price: '100',
        description: ''
        
    },
    {
        title: 'Flora',
        image: './flowerdog.jpg',
        price: '80',
        description: ''
        
    },
    {
        title: 'Selene',
        image: './butterflycat.jpg',
        price: '65',
        description: ''
        
    },
    {
        title: 'Ruby',
        image: './sleepingcat.jpg',
        price: '70',
        description: ''
        
    },
    {
        title: 'Frank',
        image: './talkativecat.jpg',
        price: '60',
        description: ''
        
    },




]

var postHTML = " "



for (var i = 0; i < shop.length; i++) {

    var heading = '<div class="product col-3' + '"><span><h5>' + shop[i].title + '</h5>' 
    var image = '<img class="img-fluid rounded-circle border border-info marketImg" src="' + shop[i].image + '" />'
    var price = '<p> $' + shop[i].price + '</p></span>'
    var description = '<div class=""><p>' + shop[i].description + '</p><button type="button" class="btn btn-dark">Adopt!</button></div></div>'
    var concatThis = heading + image + price + description;
    postHTML = postHTML + concatThis




}
document.getElementById('market').innerHTML = postHTML