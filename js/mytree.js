function init() {
    let element = document.getElementById("parentDiv");
    while (element.lastChild.id !== 'init') {
        element.removeChild(element.lastChild);
    }
    createDiv("parentDiv", "root");
    createNode("root", "Button", "lvl0Yes", "これまでの転勤/転職回数は？", "btn btn-warning", "rootInit('yes')");
    createNode("root", "Button", "lvl0No", "仕事を探すときに最も重要とすることは？", "btn btn-danger", "rootInit('no')");
}
function createDiv(parentID, divId){
    var parentEl = document.getElementById(parentID);
    //creating a <br> tag
    var mybr = document.createElement('br');
    parentEl.appendChild(mybr);
    //creating the row div
    var mydiv = document.createElement("div");
    mydiv.setAttribute("id", divId);
    mydiv.setAttribute("class","row");
    parentEl.appendChild(mydiv);
}
function createNode(parentID, elementType, nodeId, text, classes, events){
    var node = document.createElement(elementType);//Button
    node.setAttribute("id",nodeId);
    node.setAttribute("class",classes);
    node.setAttribute("onClick", events);//js function name
    node.onClick = events;
    var textnode = document.createTextNode(text);//Yes
    node.appendChild(textnode);
    document.getElementById(parentID).appendChild(node);//root
}
function hide(hideId, parentId){
    var hidden = document.getElementById(hideId);
    hidden.style.display = 'none';
    document.getElementById(parentId).className = "btn btn-dark";
}