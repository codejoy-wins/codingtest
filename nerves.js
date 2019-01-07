// alert("active nervous system");
var alreadyseen = [];
// if already seen length > 5 then clear it.
function next(){
    if(alreadyseen.length >= 5){
        alreadyseen = [];
    }
    var rando = Math.floor(Math.random(0,1)*5);
    console.log(rando);
    rando++;
    var target = document.getElementById("showcase");
    if(target){
        target.innerHTML = "<img src= './images/" + rando +  ".png' alt='next image' class = 'small'>";

        if(alreadyseen.includes(rando)){
                next();
        }else{
            alreadyseen.push(rando);
        }
    }
    var headline = document.getElementById("headline");
    if(headline){
        if(alreadyseen[alreadyseen.length-1] ==1){
            headline.innerHTML = "<h2>This bird cocktail</h2>";
        }else if(alreadyseen[alreadyseen.length-1] == 2){
            headline.innerHTML = "<h2>This police bunny</h2>";
        }else if(alreadyseen[alreadyseen.length-1] == 3){
            headline.innerHTML = "";
        }else if(alreadyseen[alreadyseen.length-1] == 4){
            headline.innerHTML = "<h2>This Princess Leia frog</h2>";
        }else if(alreadyseen[alreadyseen.length-1] == 5){
            headline.innerHTML = "<h2>This tree wearing underwear</h2>";
        }else{
            headline.innerHTML = rando;
        }
    }
    var spot = document.getElementById("debug");
    if(spot){
        spot.innerHTML = alreadyseen;
    }
}
// next();

// next now serves a random image on load.  I have to attach headlines to these...
// I need a real next function that guarentees no repeats
// also I think rando is zero sometimes.