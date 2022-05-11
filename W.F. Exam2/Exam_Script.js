var pettings = [3, 5, 8];
var sapns = [
    document.querySelector("#post-1"),
    document.querySelector("#post-2"),
    document.querySelector("#post-3"),
];
function pet(id){
    pettings[id]++;
    sapns[id].innerHTML = pettings[id] + "petting(s)";
}
var donateDiv = document.querySelector(".icon");
function donate(){
    donateDiv.remove();
}