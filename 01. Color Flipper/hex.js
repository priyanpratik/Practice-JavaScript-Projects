let hex=[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
let n=hex.length;

function changeColorHex(){
    let hexColor="#";
    for(var i=1;i<=6;i++){
        let rand=Math.floor(Math.random()*n);
        hexColor+=hex[rand];
    }
    document.getElementById('body').style.backgroundColor=hexColor;
    document.getElementById('color').innerHTML=hexColor;

}