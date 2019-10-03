let y = 5;
let x = 5;

let str = "";

for(let i = 1; i < y; i++ ){
    for(let j = 1; j < x; j++){
        if(i + j >= y){
        str = str.concat("*");
        }else{
        str = str.concat(" ")
        }
    }
    str = str.concat("\n")
}

console.log(str);