let color=["red", "green", "blue", "pink", "purple", "yellow", "orange"];
let n=color.length;

function changeColorSimple(){
    let rand=Math.floor(Math.random()*n);
    document.getElementById("body").style.backgroundColor=color[rand];
    document.getElementById('color').innerHTML=color[rand];
}