var addform = document.getElementById("submit");
var input = document.getElementById("text");
var tasks = document.getElementById("ewew");

addform.addEventListener('click', addlist);


function addlist(){
    if (input.value === '') {
        alert('ne stoit delat');
    } else {
        var inputs = input.value;
        var node = document.createElement("li");
        node.className = 'form1';
        var check = document.createElement('input');
        var icon = document.createElement('IMG');
        icon.src = 'korzina.png';
        icon.className = "imga";
        check.setAttribute('type', 'checkbox');
        var textnode = document.createTextNode(inputs);
        node.appendChild(check);
        node.appendChild(textnode);
        node.appendChild(icon);
        tasks.appendChild(node);
        input.value = "";
    }
}

tasks.addEventListener("click", removelist);

function removelist(event){
    var node = event.target;
    if(node.tagName === 'IMG'){
        tasks.removeChild(node.parentNode);
    }
} 

tasks.addEventListener('click', checkList);
function checkList(event) {
    var nurbek = event.target;
    if (nurbek.type === 'checkbox') {
        if(nurbek.parentNode.style.textDecoration === 'line-through') {
            nurbek.parentNode.style.textDecoration = 'none';
        } else {
            nurbek.parentNode.style.textDecoration = 'line-through';
        }
    }
}