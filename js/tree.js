function myTreeInit() {
    createDiv("root", "rootDiv");
    createNode("rootDiv", "Button", "lvl0Yes", "Yes", "btn-lg btn-warning","callYes(\'lvl0\')");
    createNode("rootDiv", "Button", "lvl0No", "No", "btn-lg btn-danger","callNo(\'lvl0\')");
}
function createDiv(parentID, divId){
    var div = document.createElement("div");//div
    div.setAttribute("id", divId);//
    document.getElementById(parentID).appendChild(div);//root
}
function createNode(parentID, elementType, nodeId, text, classes, events){
    var node = document.createElement(elementType);//Button
    node.setAttribute("id", nodeId);//lvl1yes
    node.setAttribute("class",classes);
    node.setAttribute("onClick", events);//js function name
    node.onClick = events;
    var textnode = document.createTextNode(text);//Yes
    node.appendChild(textnode);
    document.getElementById(parentID).appendChild(node);//root
}