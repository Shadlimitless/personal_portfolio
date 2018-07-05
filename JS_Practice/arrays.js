var movieDB = [
    {
        "title":"lawless",
        "rating":7.1,
        "hasWatched":true
    },
    {
        "title":"warrior",
        "rating":8,
        "hasWatched":false
    },
    {
        "title":"Inception",
        "rating":8.9,
        "hasWatched":true
    }
    
]


movieDB.forEach(function(movie){

    if(movie.hasWatched!=true) {

        console.log("You have not watched "+movie.title+" - "+movie.rating+" stars");
    }
    else{
        console.log("Awesome!! You have watched "+movie.title+" - "+movie.rating+" stars");
    }
})

// console.log(movieDB);