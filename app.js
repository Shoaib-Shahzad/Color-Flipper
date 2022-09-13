let ColorCode = document.querySelector(".MakingColor");
let Button = document.querySelector(".btn");
let Body = document.querySelector(".body-bg");

let value = ["A","B","a",1,"b","C",8,"D",2,"c","E",3,"d",4,"F","e",5,"f",6,9];

Button.addEventListener("click",function(){
    let code = "#";
    let newcode = "#";

    for(let x = 0; x < 6; x++){
        code+=value[Random()]
    }

    for(let x = 0; x < 6; x++){
        newcode+=value[Random()]
    }

    ColorCode.innerHTML = code;
    Body.style.background = "linear-gradient(" + code + "," + newcode + ")";
})

function Random(){
    return Math.floor(Math.random() * value.length);
}