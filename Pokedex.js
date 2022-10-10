
const num = ["#001","#002","#003","#004", "#005", "#006", "#007", "#008", "#009", "#010", "#011", "#012", "#013", "#014", "#015", "#016", "#017", "#018", "#019", "#020"]

const pokemonType = ["Grass/Poison","Grass/Poison","Grass/Poison","Fire","Fire","Fire/Flying",
                    "Water","Water","Water","Bug","Bug","Bug/Flying","Bug/Poison","Bug/Poison",
                    "Bug/Poison","Normal/Flying","Normal/Flying","Normal/Flying","Normal","Normal"]

const fastMoves = ["Tackle / Vine Whip", "Razor Leaf / Vine Whip", "Razor Leaf / Vine Whip", "Ember / Scratch",
 "Ember / Fire Fang", "Fire Spin / Air Slash", "Tackle / Bubble", "Bite / Water Gun", "Bite / Water Gun",
 "Tackle / Bug Bite", "Tackle / Bug Bite" , "Struggle Bug / Confusion", "Bug Bite / Poison Sting" , 
"Bug Bite / Poison Sting" , "Infestation / Poison Jab" , "Tackle / Quick Attack" , "Wing Attack / Steel Wing",
"Air Slash / Steel Wing" , "Tackle / Quick Attack" , "Bite / Quick Attack" , "Quick Attack / Peck"]

const chargeMoves = ["Sludge Bomb / Seed Bomb / Power Whip", "Sludge Bomb / Solar Beam / Power Whip",
"Sludge Bomb / Solar Beam / Petal Blizzard", "Flame Burst / Flamethrower / Flame Charge", "Flame Burst / Flamethrower / Fire Punch" , 
"Fire Blast / Dragon Claw / Overheat", "Aqua Jet / Aqua Tail / Water Pulse" , "Aqua Jet / Hydro Pump / Ice Beam" , 
"Ice Beam / Hydro Pump / Flash Cannon" , "Struggle" , "Struggle" , "Psychic / Bug Buzz / Signal Beam" , "Struggle" , "Struggle",
"Aerial Ace / Sludge Bomb / X-Scissor", "Twister / Aerial Ace / Air Cutter" , "Twister / Aerial Ace / Air Cutter" , 
"Hurricane / Aerial Ace / Brave Bird" , "Dig / Hyper Fang / Body Slam" , "Dig / Hyper Fang / Hyper Beam" , "Aerial Ace / Drill Peck / Sky Attack"]






const pokemon = ["Bulbasaur","Ivysaur","Venusaur","Charmander","Charmeleon","Charizard","Squirtle",
                "Wartortle","Blastoise","Caterpie","Metapod","Butterfree","Weedle","Kakuna",
                "Beedrill","Pidgey","Pidgeotto","Pidgeot","Rattata","Raticate"]



// var list = document.getElementById("AllPokemon").getElementById("li");
// console.log(list[0])




var pokemonNodeList = document.querySelectorAll("li")

function displayPokemon(){
    
    
    alert(pokemonNodeList.length)

    let searchBox = document.getElementById("pokeName").value.toLowerCase();

  
      for(let j = 0; j < pokemonNodeList.length; j++){
        alert(pokemonNodeList.item(2).children.item(0).textContent.toLowerCase())
        
            if (pokemonNodeList.item(j).children.item(0).textContent.toLowerCase().includes(searchBox)){
               
                
                let element = pokemonNodeList.item(j).cloneNode(true)
                document.getElementById("newList").appendChild(element)
            }
            
            
        }
        
        
    

    

   












      
    // let filteredPokemon = [];

    // for (let i = 0; i < pokemon.length;i++){
    //     if(pokemon[i].toLowerCase().includes(searchBox.toLowerCase())){
    //         filteredPokemon.push(pokemon[i])
    //     }
    // }
    // console.log(filteredPokemon);



// for(i = 0; i < filteredPokemon.length; i++){
//     let test = document.createElement("li");
//     pokeFilteredName = document.createTextNode(filteredPokemon[i])
//     test.appendChild(pokeFilteredName);
//     console.log(pokeFilteredName);
// }

//have to create the pokemon again with the filtered list - using javascript to do that 


 


   




function searchPokemonName(){

    let pokemonName = document.getElementById("pokeName").value;
    let output = "";
    let count = 0;
    
    if(pokemonName.length > 20 || pokemonName.length == 0){
        alert("Search does not contain between 1-20 characters. Please try again.")
    }

    else{
    for (let i = 0; i < pokemon.length; i++){
        if(pokemon[i].toLowerCase().includes(pokemonName.toLowerCase())){
            output += pokemon[i] + "/" + num[i] + " is a " + pokemonType[i] + " type pokemon."+ " It has " + fastMoves[i] + " for fast moves. Also, it has " + chargeMoves[i] +   " for charge moves. "  + "\n\n";
            count++;
        }

        if(count > 4){
            break;
        }
    }

    if(count == 0){
        alert("No Pokemon found, try again.")
    }
    else{
        alert(output);
    }
}
}

function searchPokemonId(){

    let pokemonId = document.getElementById("pokeId").value;
    let output = "";
    let count = 0;

    if(pokemonId.length > 20 || pokemonId.length == 0){
        alert("Search does not contain between 1-20 characters. Please try again.")
    }

    else{ 
    for (let i = 0; i < pokemon.length; i++){
        if(num[i].includes(pokemonId)){
            output += pokemon[i] + "/" + num[i] + " is a " + pokemonType[i] + " type pokemon."+ " It has " + fastMoves[i] + " for fast moves. Also, it has " + chargeMoves[i] +   " for charge moves. "  + "\n\n";
            count++;
        }

        if(count > 4){
            break;
        }
        
    }

    if(count == 0){
        alert("No Pokemon found, try again.")
    }
    else{
        alert(output);
    }
    
    }


}
}

 