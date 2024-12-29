function addfunction(){

    let input = document.getElementById("input-box");
inputvalue= input.value;

let listitems = document.getElementById('list-items')


if (!inputvalue.length){
alert("please write  something on input")}


else {

    let li = document.createElement("li");
    li.innerText = inputvalue;
    listitems=listitems.appendChild(li);
    input.value=""
}

}

document.addEventListener('keypress',addfunction())