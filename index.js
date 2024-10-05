// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];

// let name = "Ralph"\
function destructivelyAppendCat(name){
    cats.push(name); 
}
destructivelyAppendCat("Ralph"); 

// name = "Bob"
function destructivelyPrependCat(name){
    cats.unshift(name); 
}
destructivelyPrependCat("Bob"); 

function destructivelyRemoveLastCat(){
    cats.pop(); 
}
destructivelyRemoveLastCat()

function destructivelyRemoveFirstCat(){
    cats.shift(); 
}
destructivelyRemoveFirstCat()
function appendCat(name){
    let newCat = cats.concat(name)
    return newCat;
}
appendCat("Broom")

function prependCat(name){
    let newCat = [name].concat(cats)
    return newCat;
}
prependCat("Broom", cats)

function removeLastCat(){
    return cats.slice(0,-1)
}
removeLastCat()

function removeFirstCat(){
    return cats.slice(1)

}
removeFirstCat();


